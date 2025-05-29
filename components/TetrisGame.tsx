
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BoardMatrix, CellValue, Position, ActivePiece, TetrominoShape, GameState } from '../types';
import { BOARD_WIDTH, BOARD_HEIGHT, BLOCK_SIZE, TETROMINOES, COLORS, INITIAL_FALL_INTERVAL, LEVEL_INTERVAL_DECREMENT, LINES_PER_LEVEL, getRotations } from '../constants';

interface TetrisGameProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  linesCleared: number;
  setLinesCleared: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  nextPiecePreview: ActivePiece | null;
  setNextPiecePreview: React.Dispatch<React.SetStateAction<ActivePiece | null>>;
  onGameOver: () => void;
  isAiActive: boolean;
}

interface AiMove {
  targetRotation: number;
  targetCol: number;
  score: number;
  finalRow: number;
}

const LINE_CLEAR_ANIMATION_DURATION = 300; // ms

const createEmptyBoard = (): BoardMatrix => Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0));

const TetrisGame: React.FC<TetrisGameProps> = ({
  gameState, setGameState, score, setScore, linesCleared, setLinesCleared, level, setLevel, nextPiecePreview, setNextPiecePreview, onGameOver, isAiActive
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  const boardGroupRef = useRef<THREE.Group>(new THREE.Group());
  const currentPieceGroupRef = useRef<THREE.Group>(new THREE.Group());

  const blockGeometryRef = useRef<THREE.BoxGeometry | null>(null);
  const blockMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const flashMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);


  const [board, setBoard] = useState<BoardMatrix>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<ActivePiece | null>(null);
  
  const fallIntervalRef = useRef<number>(INITIAL_FALL_INTERVAL);
  const lastFallTimeRef = useRef<number>(0);

  // AI related refs
  const currentPieceRef = useRef<ActivePiece | null>(null);
  const boardRef = useRef<BoardMatrix>(createEmptyBoard());
  const aiActionInProgressRef = useRef(false);
  const aiThinkTimeoutRef = useRef<number | null>(null);
  const aiCurrentBestMoveRef = useRef<AiMove | null>(null);
  const aiStepTimeoutRef = useRef<number | null>(null);

  const AI_STEP_INTERVAL = 75; // ms
  const prevGameStateRef = useRef<GameState | null>(null);

  // Line clear animation refs
  const clearingRowsRef = useRef<number[]>([]);
  const isLineClearingAnimationActiveRef = useRef(false);
  const lineClearEffectTimeoutRef = useRef<number | null>(null);


  useEffect(() => {
    currentPieceRef.current = currentPiece;
  }, [currentPiece]);

  useEffect(() => {
    boardRef.current = board;
  }, [board]);

  const spawnNewPiece = useCallback((): ActivePiece => {
    const randomIndex = Math.floor(Math.random() * TETROMINOES.length);
    const shape = TETROMINOES[randomIndex];
    const matrices = getRotations(shape.matrix.map(row => row.map(cell => cell > 0 ? shape.colorIndex : 0)));
    return {
      shape,
      matrices,
      rotation: 0,
      position: { row: 0, col: Math.floor(BOARD_WIDTH / 2) - Math.floor(matrices[0][0].length / 2) },
    };
  }, []);

  const checkCollision = useCallback((piece: ActivePiece, pos: Position, boardToCheck: BoardMatrix): boolean => {
    const matrix = piece.matrices[piece.rotation];
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] !== 0) {
          const boardRow = pos.row + r;
          const boardCol = pos.col + c;
          if (
            boardRow >= BOARD_HEIGHT ||
            boardCol < 0 ||
            boardCol >= BOARD_WIDTH ||
            (boardRow >= 0 && boardToCheck[boardRow] && boardToCheck[boardRow][boardCol] !== 0)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }, []);

  useEffect(() => {
    const previousGameState = prevGameStateRef.current;
    prevGameStateRef.current = gameState;

    if (gameState === GameState.Playing) {
      if (previousGameState === GameState.Initial || previousGameState === GameState.GameOver || previousGameState === null) {
        setBoard(createEmptyBoard());
        const newCurrentPiece = spawnNewPiece();
        setCurrentPiece(newCurrentPiece);
        if (setNextPiecePreview) {
          setNextPiecePreview(spawnNewPiece());
        }
        fallIntervalRef.current = Math.max(100, INITIAL_FALL_INTERVAL - (level - 1) * LEVEL_INTERVAL_DECREMENT);
        isLineClearingAnimationActiveRef.current = false;
        clearingRowsRef.current = [];
      }
      lastFallTimeRef.current = performance.now(); 
      aiActionInProgressRef.current = false; 
      aiCurrentBestMoveRef.current = null;
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
      if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);

    } else if (gameState === GameState.GameOver || gameState === GameState.Initial || gameState === GameState.Paused) {
        if (gameState !== GameState.Paused) { // Don't clear current piece on pause
            setCurrentPiece(null); 
        }
      aiActionInProgressRef.current = false;
      aiCurrentBestMoveRef.current = null;
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
      if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
      if (lineClearEffectTimeoutRef.current) {
        clearTimeout(lineClearEffectTimeoutRef.current);
        lineClearEffectTimeoutRef.current = null;
      }
      isLineClearingAnimationActiveRef.current = false;
      clearingRowsRef.current = [];
    }
  }, [gameState, level, spawnNewPiece, setNextPiecePreview]);


  const lockPiece = useCallback((pieceToLock: ActivePiece | null) => {
    if (!pieceToLock) {
        aiActionInProgressRef.current = false;
        return;
    }
    if (isLineClearingAnimationActiveRef.current) return; // Don't lock if already clearing

    const newBoard = boardRef.current.map(row => [...row]);
    const matrix = pieceToLock.matrices[pieceToLock.rotation];
    matrix.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell !== 0) {
          const boardRow = pieceToLock.position.row + r;
          const boardCol = pieceToLock.position.col + c;
          if (boardRow >= 0 && boardRow < BOARD_HEIGHT && boardCol >= 0 && boardCol < BOARD_WIDTH) {
            newBoard[boardRow][boardCol] = cell as CellValue;
          }
        }
      });
    });
    
     let isLockPhaseGameOver = false;
     const lockedMatrix = pieceToLock.matrices[pieceToLock.rotation];
     for (let r_idx = 0; r_idx < lockedMatrix.length; r_idx++) {
        for (let c_idx = 0; c_idx < lockedMatrix[r_idx].length; c_idx++) {
          if (lockedMatrix[r_idx][c_idx] !== 0 && (pieceToLock.position.row + r_idx < 0)) {
               isLockPhaseGameOver = true;
               break;
          }
        }
        if (isLockPhaseGameOver) break;
     }

     if (isLockPhaseGameOver) {
        onGameOver();
        setCurrentPiece(null); 
        aiActionInProgressRef.current = false;
        aiCurrentBestMoveRef.current = null;
        if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
        if (lineClearEffectTimeoutRef.current) clearTimeout(lineClearEffectTimeoutRef.current);
        isLineClearingAnimationActiveRef.current = false;
        clearingRowsRef.current = [];
        return;
     }

    let linesToClearIndices: number[] = [];
    for (let r = BOARD_HEIGHT - 1; r >= 0; r--) {
      if (newBoard[r].every(cell => cell !== 0)) { 
        linesToClearIndices.push(r);
      }
    }
    
    setBoard(newBoard); // Update board with locked piece first

    if (linesToClearIndices.length > 0) {
      clearingRowsRef.current = linesToClearIndices;
      isLineClearingAnimationActiveRef.current = true;
      
      // currentPiece is set to null during animation to prevent it from being rendered/moved
      setCurrentPiece(null); 


      if (lineClearEffectTimeoutRef.current) clearTimeout(lineClearEffectTimeoutRef.current);
      lineClearEffectTimeoutRef.current = window.setTimeout(() => {
        const boardAfterClearVisuals = boardRef.current.map(row => [...row]); // boardRef IS newBoard now
        let linesClearedThisTurn = 0;

        const sortedClearingRows = [...clearingRowsRef.current].sort((a, b) => b - a);

        for (const rowIndex of sortedClearingRows) {
          boardAfterClearVisuals.splice(rowIndex, 1); 
          boardAfterClearVisuals.unshift(Array(BOARD_WIDTH).fill(0)); 
          linesClearedThisTurn++;
        }
        setBoard(boardAfterClearVisuals); 

        if (linesClearedThisTurn > 0) {
          const newTotalLines = linesCleared + linesClearedThisTurn;
          setLinesCleared(newTotalLines);
          setScore(prevScore => prevScore + linesClearedThisTurn * 100 * linesClearedThisTurn * level); 
          const newLevel = Math.floor(newTotalLines / LINES_PER_LEVEL) + 1;
          if (newLevel > level) {
            setLevel(newLevel);
            fallIntervalRef.current = Math.max(100, INITIAL_FALL_INTERVAL - (newLevel - 1) * LEVEL_INTERVAL_DECREMENT);
          }
        }

        let newPieceToSpawn: ActivePiece | null = null;
        if (nextPiecePreview) {
            newPieceToSpawn = nextPiecePreview;
            if (setNextPiecePreview) setNextPiecePreview(spawnNewPiece());
        } else { 
            newPieceToSpawn = spawnNewPiece();
            if (setNextPiecePreview) setNextPiecePreview(spawnNewPiece());
        }
        
        if (newPieceToSpawn && checkCollision(newPieceToSpawn, newPieceToSpawn.position, boardAfterClearVisuals)) { 
            onGameOver();
            // setCurrentPiece(null) already done
        } else {
            setCurrentPiece(newPieceToSpawn);
        }

        clearingRowsRef.current = [];
        isLineClearingAnimationActiveRef.current = false;
        aiActionInProgressRef.current = false; 
        aiCurrentBestMoveRef.current = null;
        if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
        lastFallTimeRef.current = performance.now(); // Reset fall timer for new piece

      }, LINE_CLEAR_ANIMATION_DURATION);

    } else { // No lines cleared
      // setBoard(newBoard) already called
      let newPieceToSpawn: ActivePiece | null = null;
      if (nextPiecePreview) {
          newPieceToSpawn = nextPiecePreview;
          if (setNextPiecePreview) setNextPiecePreview(spawnNewPiece());
      } else { 
          newPieceToSpawn = spawnNewPiece();
          if (setNextPiecePreview) setNextPiecePreview(spawnNewPiece());
      }
      
      if (newPieceToSpawn && checkCollision(newPieceToSpawn, newPieceToSpawn.position, newBoard)) { 
          onGameOver();
          setCurrentPiece(null);
      } else {
          setCurrentPiece(newPieceToSpawn);
      }
      aiActionInProgressRef.current = false; 
      aiCurrentBestMoveRef.current = null;
      if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
    }

  }, [nextPiecePreview, spawnNewPiece, setLinesCleared, setScore, setLevel, level, linesCleared, onGameOver, setNextPiecePreview, checkCollision, boardRef]);


  const movePiece = useCallback((dRow: number, dCol: number): boolean => {
    if (!currentPieceRef.current || gameState !== GameState.Playing || isLineClearingAnimationActiveRef.current) return false;
    const newPosition = { row: currentPieceRef.current.position.row + dRow, col: currentPieceRef.current.position.col + dCol };
    if (!checkCollision(currentPieceRef.current, newPosition, boardRef.current)) {
      setCurrentPiece(prev => prev ? { ...prev, position: newPosition } : null);
      return true;
    }
    return false;
  }, [checkCollision, gameState, setCurrentPiece]);

  const moveDown = useCallback(() => {
    if (!currentPieceRef.current || gameState !== GameState.Playing || isLineClearingAnimationActiveRef.current) return;
    if (!movePiece(1, 0)) {
      lockPiece(currentPieceRef.current); 
    }
  }, [movePiece, lockPiece, gameState]);

  const rotatePiece = useCallback(() => {
    if (!currentPieceRef.current || gameState !== GameState.Playing || isLineClearingAnimationActiveRef.current) return;
    const newRotation = (currentPieceRef.current.rotation + 1) % currentPieceRef.current.matrices.length;
    const rotatedPiece = { ...currentPieceRef.current, rotation: newRotation };
    if (!checkCollision(rotatedPiece, currentPieceRef.current.position, boardRef.current)) {
      setCurrentPiece(rotatedPiece);
    } else {
      const testOffsets = [-1, 1, -2, 2]; 
      for (const offset of testOffsets) {
        const testPosition = { row: currentPieceRef.current.position.row, col: currentPieceRef.current.position.col + offset };
        if (!checkCollision(rotatedPiece, testPosition, boardRef.current)) {
          setCurrentPiece({ ...rotatedPiece, position: testPosition });
          return;
        }
      }
      if (currentPieceRef.current.shape.id === 'I' && currentPieceRef.current.position.row <=1 ) { 
         const testPositionUp1 = { ...currentPieceRef.current.position, row: currentPieceRef.current.position.row -1};
         if(!checkCollision(rotatedPiece, testPositionUp1, boardRef.current)){
            setCurrentPiece({...rotatedPiece, position: testPositionUp1});
            return;
         }
         const testPositionUp2 = { ...currentPieceRef.current.position, row: currentPieceRef.current.position.row -2};
         if(!checkCollision(rotatedPiece, testPositionUp2, boardRef.current)){
            setCurrentPiece({...rotatedPiece, position: testPositionUp2});
            return;
         }
      } else if (currentPieceRef.current.position.row <=1) { 
         const testPositionUp = { ...currentPieceRef.current.position, row: currentPieceRef.current.position.row -1};
          if(!checkCollision(rotatedPiece, testPositionUp, boardRef.current)){
            setCurrentPiece({...rotatedPiece, position: testPositionUp});
            return;
         }
      }
    }
  }, [checkCollision, gameState, setCurrentPiece]);
  
  const hardDrop = useCallback(() => {
    if (!currentPieceRef.current || gameState !== GameState.Playing || isLineClearingAnimationActiveRef.current) return;
    let pieceToDrop = { ...currentPieceRef.current }; 
    let newPosition = { ...pieceToDrop.position };
    while (!checkCollision(pieceToDrop, { row: newPosition.row + 1, col: newPosition.col }, boardRef.current)) {
      newPosition.row++;
    }
    const finalPieceState = { ...currentPieceRef.current, position: newPosition };
    lockPiece(finalPieceState); 
  }, [gameState, checkCollision, lockPiece]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLineClearingAnimationActiveRef.current) return; 
      if (isAiActive && gameState === GameState.Playing) {
          event.preventDefault();
          return;
      }
      if (gameState !== GameState.Playing || !currentPieceRef.current) {
         if (event.key === ' ' && gameState === GameState.Playing && !currentPieceRef.current && !isLineClearingAnimationActiveRef.current) {
            event.preventDefault();
         }
        return;
      }
      if (event.key === ' ') event.preventDefault(); 

      switch (event.key) {
        case 'ArrowLeft': movePiece(0, -1); break;
        case 'ArrowRight': movePiece(0, 1); break;
        case 'ArrowDown': 
          lastFallTimeRef.current = performance.now(); 
          moveDown(); 
          break;
        case 'ArrowUp': case 'x': case 'X': rotatePiece(); break;
        case ' ': hardDrop(); break; 
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, movePiece, moveDown, rotatePiece, hardDrop, isAiActive]);

  // AI Logic
  const evaluateBoardState = (tempBoard: BoardMatrix, piece: ActivePiece, dropRow: number): number => {
    let score = 0;
    let linesClearedCount = 0;
  
    const boardAfterPlace = tempBoard.map(r => [...r]);
    const matrix = piece.matrices[piece.rotation];

    let isPlacedGameOver = false;
    matrix.forEach((rowCells, r) => {
        rowCells.forEach((cell, c) => {
            if (cell !== 0) {
                const finalRow = dropRow + r;
                const finalCol = piece.position.col + c; 
                if (finalRow >= 0 && finalRow < BOARD_HEIGHT && finalCol >= 0 && finalCol < BOARD_WIDTH) {
                    boardAfterPlace[finalRow][finalCol] = cell as CellValue;
                } else if (finalRow < 0) { 
                    isPlacedGameOver = true;
                }
            }
        });
    });

    if (isPlacedGameOver) return -Infinity; 

    for (let r_idx = BOARD_HEIGHT - 1; r_idx >= 0;) {
      if (boardAfterPlace[r_idx].every(cellVal => cellVal !== 0)) {
        linesClearedCount++;
        boardAfterPlace.splice(r_idx, 1);
        boardAfterPlace.unshift(Array(BOARD_WIDTH).fill(0));
      } else {
        r_idx--;
      }
    }
    score += linesClearedCount * 5000; 
  
    let aggregateHeight = 0;
    const heights = Array(BOARD_WIDTH).fill(0);
    for (let c = 0; c < BOARD_WIDTH; c++) {
      for (let r_idx = 0; r_idx < BOARD_HEIGHT; r_idx++) {
        if (boardAfterPlace[r_idx][c] !== 0) {
          heights[c] = BOARD_HEIGHT - r_idx;
          break;
        }
      }
      aggregateHeight += heights[c];
    }
    score -= aggregateHeight * 10;
  
    let holes = 0;
    for (let c = 0; c < BOARD_WIDTH; c++) {
      let blockReached = false;
      for (let r_idx = 0; r_idx < BOARD_HEIGHT; r_idx++) {
        if (boardAfterPlace[r_idx][c] !== 0) {
          blockReached = true;
        } else if (blockReached && boardAfterPlace[r_idx][c] === 0) {
          holes++;
        }
      }
    }
    score -= holes * 75; 
  
    let bumpiness = 0;
    for (let c = 0; c < BOARD_WIDTH - 1; c++) {
      bumpiness += Math.abs(heights[c] - heights[c + 1]);
    }
    score -= bumpiness * 3;
    
    return score;
  };

  const calculateBestMove = useCallback((piece: ActivePiece, currentBoard: BoardMatrix): AiMove | null => {
    let bestMove: AiMove | null = null;
  
    for (let rot = 0; rot < piece.matrices.length; rot++) {
      const currentMatrix = piece.matrices[rot];
      let minCShape = currentMatrix[0].length;
      let maxCShape = -1;
      let pieceIsEmpty = true;
      for(let r_shape = 0; r_shape < currentMatrix.length; ++r_shape) {
          for(let c_shape = 0; c_shape < currentMatrix[r_shape].length; ++c_shape) {
              if(currentMatrix[r_shape][c_shape] !== 0) {
                  pieceIsEmpty = false;
                  minCShape = Math.min(minCShape, c_shape);
                  maxCShape = Math.max(maxCShape, c_shape);
              }
          }
      }
      if (pieceIsEmpty) continue; 

      for (let col = -minCShape; col <= BOARD_WIDTH - 1 - maxCShape; col++) {
        const testPiece: ActivePiece = {
          ...piece,
          rotation: rot,
          position: {row:0, col:col} 
        };
  
        let simulatedRow = 0;
        if (checkCollision(testPiece, {row: 0, col: col}, currentBoard)) {
            let canPlaceHigher = false;
            for(let rOffset = -1; rOffset >= -3; rOffset--){ 
                if(!checkCollision(testPiece, {row: rOffset, col: col}, currentBoard)){
                    simulatedRow = rOffset;
                    canPlaceHigher = true;
                    break;
                }
            }
            if(!canPlaceHigher && checkCollision(testPiece, {row:0, col:col}, currentBoard)) continue; 
        }

        let currentSimulatedRow = simulatedRow;
        while (!checkCollision(testPiece, {row: currentSimulatedRow + 1, col: col}, currentBoard)) {
            currentSimulatedRow++;
        }
        const finalDropRow = currentSimulatedRow;
  
        const scoreForMove = evaluateBoardState(currentBoard, {...testPiece, position:{row:finalDropRow, col:col}}, finalDropRow);
  
        if (bestMove === null || scoreForMove > bestMove.score) {
          bestMove = { targetRotation: rot, targetCol: col, score: scoreForMove, finalRow: finalDropRow };
        }
      }
    }
    return bestMove;
  }, [checkCollision]);


  const executeAiStep = useCallback(() => {
    if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);

    if (!isAiActive || gameState !== GameState.Playing || !currentPieceRef.current || !aiCurrentBestMoveRef.current || isLineClearingAnimationActiveRef.current) {
      aiActionInProgressRef.current = false; 
      aiCurrentBestMoveRef.current = null;
      return;
    }

    const piece = currentPieceRef.current;
    const targetMove = aiCurrentBestMoveRef.current;
    let actionTaken = false;

    if (piece.rotation !== targetMove.targetRotation) {
      const rotatedPieceState = { ...piece, rotation: targetMove.targetRotation };
      if (!checkCollision(rotatedPieceState, piece.position, boardRef.current)) {
        setCurrentPiece(rotatedPieceState);
        actionTaken = true;
      } else {
        const testOffsets = [-1, 1, -2, 2];
        let kicked = false;
        for (const offset of testOffsets) {
          const testPosition = { ...piece.position, col: piece.position.col + offset };
          if (!checkCollision(rotatedPieceState, testPosition, boardRef.current)) {
            setCurrentPiece({ ...rotatedPieceState, position: testPosition });
            actionTaken = true;
            kicked = true;
            break;
          }
        }
        if (!kicked && (piece.shape.id === 'I' || piece.shape.id === 'L' || piece.shape.id === 'J') && piece.position.row <= 1) {
            const upOffsets = [-1, -2]; 
             for (const upOffset of upOffsets) {
                const testPositionUp = { ...piece.position, row: piece.position.row + upOffset };
                 if (!checkCollision(rotatedPieceState, testPositionUp, boardRef.current)) {
                    setCurrentPiece({ ...rotatedPieceState, position: testPositionUp });
                    actionTaken = true;
                    kicked = true;
                    break;
                 }
             }
        }
        if (!kicked) { 
          lockPiece(currentPieceRef.current); 
          return; 
        }
      }
    }
    else if (piece.position.col !== targetMove.targetCol) {
      const direction = targetMove.targetCol > piece.position.col ? 1 : -1;
      if (movePiece(0, direction)) { 
        actionTaken = true;
      } else { 
          lockPiece(currentPieceRef.current); 
          return;
      }
    }
    else if (piece.position.row < targetMove.finalRow) {
      if (movePiece(1, 0)) { 
        actionTaken = true;
      } else { 
        lockPiece(currentPieceRef.current); 
        return; 
      }
    }
    else {
      lockPiece(currentPieceRef.current);
      return; 
    }

    if (actionTaken && aiActionInProgressRef.current) { 
      aiStepTimeoutRef.current = window.setTimeout(executeAiStep, AI_STEP_INTERVAL);
    } else if (!actionTaken && aiActionInProgressRef.current) {
        lockPiece(currentPieceRef.current);
    }
  }, [isAiActive, gameState, checkCollision, movePiece, lockPiece, setCurrentPiece, boardRef, AI_STEP_INTERVAL]);
  
  useEffect(() => {
    if (isLineClearingAnimationActiveRef.current) {
        if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
        if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
        aiActionInProgressRef.current = false;
        aiCurrentBestMoveRef.current = null;
        return;
    }

    if (isAiActive && gameState === GameState.Playing && currentPieceRef.current && !aiActionInProgressRef.current) {
      aiActionInProgressRef.current = true;
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);

      const thinkTime = fallIntervalRef.current > 0 ? Math.min(fallIntervalRef.current / 2, 200) : 100; 

      aiThinkTimeoutRef.current = window.setTimeout(() => { 
        const piece = currentPieceRef.current;
        const CBoard = boardRef.current;
        if (!piece || !CBoard || !isAiActive || gameState !== GameState.Playing || isLineClearingAnimationActiveRef.current) { 
          aiActionInProgressRef.current = false;
          return;
        }

        const bestMove = calculateBestMove(piece, CBoard);
        if (bestMove) {
          aiCurrentBestMoveRef.current = bestMove;
          executeAiStep();
        } else { 
           if(currentPieceRef.current) {
              if(!movePiece(1,0)) { 
                lockPiece(currentPieceRef.current);
              } else {
                aiActionInProgressRef.current = false; 
              }
           } else {
             aiActionInProgressRef.current = false;
           }
        }
      }, thinkTime);
    }
    
    return () => {
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
    };
  }, [isAiActive, gameState, currentPiece, calculateBestMove, executeAiStep, lockPiece, movePiece]); 

  useEffect(() => {
    if (!isAiActive) { 
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
      if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
      aiActionInProgressRef.current = false;
      aiCurrentBestMoveRef.current = null;
    }
  }, [isAiActive]);


  useEffect(() => {
    if (!mountRef.current) return;

    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0x2d3748); 

    cameraRef.current = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    cameraRef.current.position.set(BOARD_WIDTH * BLOCK_SIZE / 2 - BLOCK_SIZE/2, BOARD_HEIGHT * BLOCK_SIZE / 4, BOARD_HEIGHT * BLOCK_SIZE * 0.75); 

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(rendererRef.current.domElement);

    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.target.set(BOARD_WIDTH * BLOCK_SIZE / 2 - BLOCK_SIZE/2, BOARD_HEIGHT * BLOCK_SIZE / 2 - BLOCK_SIZE/2, 0); 
    controlsRef.current.enablePan = true;
    controlsRef.current.enableZoom = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    sceneRef.current.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    sceneRef.current.add(directionalLight);
    
    sceneRef.current.add(boardGroupRef.current);
    sceneRef.current.add(currentPieceGroupRef.current);
    
    const boardOutlineGeometry = new THREE.BoxGeometry(BOARD_WIDTH * BLOCK_SIZE, BOARD_HEIGHT * BLOCK_SIZE, BLOCK_SIZE);
    const boardOutlineEdges = new THREE.EdgesGeometry(boardOutlineGeometry);
    const boardOutlineMaterial = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
    const boardOutlineMesh = new THREE.LineSegments(boardOutlineEdges, boardOutlineMaterial);
    boardOutlineMesh.position.set(
        (BOARD_WIDTH / 2 - 0.5) * BLOCK_SIZE,
        (BOARD_HEIGHT / 2 - 0.5) * BLOCK_SIZE,
        -BLOCK_SIZE / 2 
    );
    sceneRef.current.add(boardOutlineMesh);

    if (!blockGeometryRef.current) {
        blockGeometryRef.current = new THREE.BoxGeometry(BLOCK_SIZE * 0.95, BLOCK_SIZE * 0.95, BLOCK_SIZE * 0.95);
    }
    if (blockMaterialsRef.current.length === 0) {
        COLORS.forEach(colorHex => {
            blockMaterialsRef.current.push(new THREE.MeshStandardMaterial({ color: colorHex }));
        });
    }
    if (!flashMaterialRef.current) {
        flashMaterialRef.current = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: 0xeeeeee,
            emissiveIntensity: 1,
            transparent: true,
            opacity: 1,
        });
    }


    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && mountRef.current) {
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    clockRef.current.start();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) rendererRef.current.dispose();
      if (mountRef.current && rendererRef.current && mountRef.current.contains(rendererRef.current.domElement)) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (controlsRef.current) controlsRef.current.dispose();
      
      if (blockGeometryRef.current) {
        blockGeometryRef.current.dispose();
        blockGeometryRef.current = null;
      }
      blockMaterialsRef.current.forEach(material => material.dispose());
      blockMaterialsRef.current = [];
      if (flashMaterialRef.current) {
        flashMaterialRef.current.dispose();
        flashMaterialRef.current = null;
      }
      boardOutlineGeometry.dispose();
      boardOutlineMaterial.dispose();
      clockRef.current.stop();
      if (aiThinkTimeoutRef.current) clearTimeout(aiThinkTimeoutRef.current);
      if (aiStepTimeoutRef.current) clearTimeout(aiStepTimeoutRef.current);
      if (lineClearEffectTimeoutRef.current) clearTimeout(lineClearEffectTimeoutRef.current);
    };
  }, []); 


  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !blockGeometryRef.current || blockMaterialsRef.current.length === 0) return;
    
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (gameState === GameState.Playing && currentPieceRef.current && !isAiActive && !isLineClearingAnimationActiveRef.current) { 
        if (timestamp - lastFallTimeRef.current > fallIntervalRef.current) {
          moveDown();
          lastFallTimeRef.current = timestamp;
        }
      }
      
      while (boardGroupRef.current.children.length > 0) {
        boardGroupRef.current.remove(boardGroupRef.current.children[0]);
      }
      while (currentPieceGroupRef.current.children.length > 0) {
        currentPieceGroupRef.current.remove(currentPieceGroupRef.current.children[0]);
      }

      boardRef.current.forEach((row, r) => {
        row.forEach((cell, c) => {
          if (cell !== 0 && cell < blockMaterialsRef.current.length) { 
            let material = blockMaterialsRef.current[cell];
             if (isLineClearingAnimationActiveRef.current && clearingRowsRef.current.includes(r)) {
                if (flashMaterialRef.current) {
                    material = flashMaterialRef.current;
                    const flashProgress = (performance.now() % (LINE_CLEAR_ANIMATION_DURATION / 1.5)) / (LINE_CLEAR_ANIMATION_DURATION / 1.5); // Faster pulse
                    const intensity = Math.sin(flashProgress * Math.PI) * 0.4 + 0.6; // Pulse between 0.6 and 1.0
                    flashMaterialRef.current.emissiveIntensity = intensity;
                    flashMaterialRef.current.opacity = intensity;
                }
            }
            const cube = new THREE.Mesh(blockGeometryRef.current!, material); 
            cube.position.set(
              c * BLOCK_SIZE,
              (BOARD_HEIGHT - 1 - r) * BLOCK_SIZE,
              0
            );
            boardGroupRef.current.add(cube);
          }
        });
      });

      if (currentPieceRef.current) { // currentPieceRef might be null during line clear animation
        const pieceToRender = currentPieceRef.current;
        const matrix = pieceToRender.matrices[pieceToRender.rotation];
        matrix.forEach((row, r) => {
          row.forEach((cell, c) => { 
            if (cell !== 0 && cell < blockMaterialsRef.current.length) {
              const material = blockMaterialsRef.current[cell];
              const cube = new THREE.Mesh(blockGeometryRef.current!, material); 
              cube.position.set(
                (pieceToRender.position.col + c) * BLOCK_SIZE,
                (BOARD_HEIGHT - 1 - (pieceToRender.position.row + r)) * BLOCK_SIZE,
                0
              );
              currentPieceGroupRef.current.add(cube);
            }
          });
        });
      }
      
      if (controlsRef.current) controlsRef.current.update();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameState, moveDown, isAiActive]);


  return <div ref={mountRef} className="w-full h-full" />;
};

export default TetrisGame;
