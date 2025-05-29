
import React, { useState, useEffect, useCallback } from 'react';
import TetrisGame from './components/TetrisGame';
import { ActivePiece, GameState, CellValue } from './types';
import { BOARD_WIDTH, COLORS, INITIAL_FALL_INTERVAL, LEVEL_INTERVAL_DECREMENT, LINES_PER_LEVEL } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Initial);
  const [score, setScore] = useState(0);
  const [linesCleared, setLinesCleared] = useState(0);
  const [level, setLevel] = useState(1);
  const [nextPiecePreview, setNextPiecePreview] = useState<ActivePiece | null>(null);
  const [isAiActive, setIsAiActive] = useState(false);

  const startGame = () => {
    setScore(0);
    setLinesCleared(0);
    setLevel(1);
    setNextPiecePreview(null);
    // setIsAiActive(false); // Optionally reset AI state on new game
    setGameState(GameState.Playing);
  };

  const pauseGame = () => {
    if (gameState === GameState.Playing) setGameState(GameState.Paused);
  };

  const resumeGame = () => {
    if (gameState === GameState.Paused) setGameState(GameState.Playing);
  };

  const handleGameOver = useCallback(() => {
    setGameState(GameState.GameOver);
  }, []);

  const NextPieceDisplay: React.FC<{ piece: ActivePiece | null }> = ({ piece }) => {
    if (!piece) return <div className="w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded">미리보기 없음</div>;

    const matrix = piece.matrices[piece.rotation];
    let minR = matrix.length, maxR = -1, minC = matrix[0].length, maxC = -1;
    let hasBlocks = false;
    matrix.forEach((row, rIdx) => {
        row.forEach((cell, cIdx) => {
            if (cell !== 0) {
                hasBlocks = true;
                minR = Math.min(minR, rIdx);
                maxR = Math.max(maxR, rIdx);
                minC = Math.min(minC, cIdx);
                maxC = Math.max(maxC, cIdx);
            }
        });
    });

    if (!hasBlocks) return <div className="w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded">미리보기 없음</div>;


    const pieceHeight = maxR - minR + 1;
    const pieceWidth = maxC - minC + 1;
    const displayGridSize = 4;


    return (
      <div className="grid grid-cols-4 gap-0.5 p-1 border border-gray-600 bg-gray-700 rounded" style={{width: '6rem', height: '6rem'}}>
        {Array(displayGridSize * displayGridSize).fill(0).map((_, i) => {
          const r = Math.floor(i / displayGridSize);
          const c = Math.floor(i % displayGridSize);

          const displayRowOffset = Math.floor((displayGridSize - pieceHeight) / 2);
          const displayColOffset = Math.floor((displayGridSize - pieceWidth) / 2);

          const matrixRow = r - displayRowOffset;
          const matrixCol = c - displayColOffset;

          let cellValue: CellValue = 0;
          if (matrixRow >= 0 && matrixRow < pieceHeight && matrixCol >= 0 && matrixCol < pieceWidth) {
             if(matrix[matrixRow + minR] && matrix[matrixRow + minR][matrixCol + minC] !== 0) {
                cellValue = matrix[matrixRow + minR][matrixCol + minC];
             }
          }

          const color = cellValue ? COLORS[cellValue] : 'transparent';
          const hexColor = typeof color === 'number' ? `#${color.toString(16).padStart(6, '0')}` : color;
          const style = { backgroundColor: hexColor };

          return <div key={i} className="w-full h-full" style={style}></div>;
        })}
      </div>
    );
  };


  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 text-white p-2 md:p-4 gap-2 items-center justify-start overflow-hidden">
      {/* Global Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center w-full shrink-0 my-1 md:my-2">테트리스 AI 마스터 3D</h1>

      {/* Next Piece Preview - Centered */}
      <div className="flex flex-col items-center shrink-0 my-1 md:my-2">
        <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-center">다음 조각:</h3>
        <NextPieceDisplay piece={nextPiecePreview} />
      </div>

      {/* Container for Game and Sidebar */}
      <div className="flex flex-col md:flex-row w-full flex-grow items-stretch gap-4 min-h-0">

        {/* Game Area Wrapper */}
        <div className="flex-grow relative w-full md:w-3/4 min-h-0 order-1">
          {gameState === GameState.GameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-red-500">게임 종료</h2>
              <p className="text-lg md:text-xl mt-2">점수: {score}</p>
              <button
                onClick={startGame}
                className="mt-6 md:mt-8 px-5 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg md:text-xl font-semibold transition-colors"
              >
                다시 시작
              </button>
            </div>
          )}
          {gameState === GameState.Initial && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10">
              <button
                onClick={startGame}
                className="px-6 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl md:text-2xl font-semibold transition-colors"
              >
                게임 시작
              </button>
            </div>
          )}
          <TetrisGame
              gameState={gameState}
              setGameState={setGameState}
              score={score}
              setScore={setScore}
              linesCleared={linesCleared}
              setLinesCleared={setLinesCleared}
              level={level}
              setLevel={setLevel}
              nextPiecePreview={nextPiecePreview}
              setNextPiecePreview={setNextPiecePreview}
              onGameOver={handleGameOver}
              isAiActive={isAiActive}
            />
        </div>

        {/* Sidebar Wrapper */}
        <div className="w-full md:w-1/4 p-3 md:p-4 bg-gray-800 rounded-lg shadow-xl flex flex-col gap-3 items-stretch overflow-y-auto order-2 min-h-0">
          <div className="flex flex-row gap-2 justify-start items-center mb-1 md:mb-2 w-full">
            {gameState === GameState.Playing && (
              <button onClick={pauseGame} className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold transition-colors">일시정지</button>
            )}
            {gameState === GameState.Paused && (
              <button onClick={resumeGame} className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-green-500 hover:bg-green-600 rounded text-white font-semibold transition-colors">계속하기</button>
            )}
            {(gameState === GameState.Playing || gameState === GameState.Paused || gameState === GameState.GameOver) && (
               <button onClick={startGame} className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition-colors">게임 재시작</button>
            )}
          </div>

          <div className="flex items-center justify-start gap-3 mt-2 md:mt-1"> {/* Changed justify-between to justify-start and added gap-3 */}
            <label htmlFor="ai-toggle" className="text-sm md:text-base text-gray-300">AI 위임:</label>
            <button
              id="ai-toggle"
              onClick={() => setIsAiActive(prev => !prev)}
              disabled={gameState !== GameState.Playing && gameState !== GameState.Paused}
              className={`w-20 px-3 py-1 rounded text-white font-semibold text-sm transition-colors text-center ${ // Removed text-left, added text-center
                isAiActive ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
              } ${ (gameState !== GameState.Playing && gameState !== GameState.Paused) ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-pressed={isAiActive}
            >
              {isAiActive ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className="w-full text-sm md:text-lg mt-2 md:mt-1">
            <p><span className="font-semibold">점수:</span> {score}</p>
            <p><span className="font-semibold">줄 수:</span> {linesCleared}</p>
            <p><span className="font-semibold">레벨:</span> {level}</p>
          </div>

          <div className="text-xs md:text-sm text-gray-400 w-full mt-2 md:mt-3">
              <h3 className="font-semibold text-gray-300 md:text-gray-200">조작법:</h3>
              <p>화살표: 이동</p>
              <p>위 화살표 / X: 회전</p>
              <p>스페이스바: 빠른 내림</p>
              <p>마우스: 카메라 회전</p>
              {isAiActive && <p className="text-yellow-400 mt-1">AI 위임 활성됨 (수동 조작 비활성화)</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
