
import { TetrominoShape } from './types';

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const BLOCK_SIZE = 1; // For Three.js rendering

export const COLORS: number[] = [
  0x000000,    // 0: Empty (not used for pieces)
  0xFF0000,    // 1: I (Red) - Adjusted for better visuals
  0x00FF00,    // 2: L (Green)
  0x0000FF,    // 3: J (Blue)
  0xFFFF00,    // 4: O (Yellow)
  0xFF00FF,    // 5: S (Magenta)
  0x00FFFF,    // 6: Z (Cyan)
  0xFFA500,    // 7: T (Orange)
];

// Tetromino shapes defined by their 0-rotation matrix and color index
// colorIndex corresponds to an index in COLORS array (1-7)
const I_SHAPE: TetrominoShape = {
  id: 'I',
  matrix: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
  colorIndex: 1
};
const L_SHAPE: TetrominoShape = {
  id: 'L',
  matrix: [[0,2,0],[0,2,0],[0,2,2]],
  colorIndex: 2
};
const J_SHAPE: TetrominoShape = {
  id: 'J',
  matrix: [[0,3,0],[0,3,0],[3,3,0]],
  colorIndex: 3
};
const O_SHAPE: TetrominoShape = {
  id: 'O',
  matrix: [[4,4],[4,4]],
  colorIndex: 4
};
const S_SHAPE: TetrominoShape = {
  id: 'S',
  matrix: [[0,5,5],[5,5,0],[0,0,0]],
  colorIndex: 5
};
const Z_SHAPE: TetrominoShape = {
  id: 'Z',
  matrix: [[6,6,0],[0,6,6],[0,0,0]],
  colorIndex: 6
};
const T_SHAPE: TetrominoShape = {
  id: 'T',
  matrix: [[0,7,0],[7,7,7],[0,0,0]],
  colorIndex: 7
};

export const TETROMINOES: TetrominoShape[] = [I_SHAPE, L_SHAPE, J_SHAPE, O_SHAPE, S_SHAPE, Z_SHAPE, T_SHAPE];

export const INITIAL_FALL_INTERVAL = 1000; // ms
export const LEVEL_INTERVAL_DECREMENT = 50; // ms reduction per level
export const LINES_PER_LEVEL = 10;

// Helper to generate all rotations for a tetromino matrix
export const getRotations = (matrix: number[][]): number[][][] => {
  const rotations: number[][][] = [matrix];
  let currentMatrix = matrix;
  for (let i = 0; i < 3; i++) {
    const N = currentMatrix.length;
    const newMatrix: number[][] = Array(N).fill(null).map(() => Array(N).fill(0));
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        newMatrix[c][N - 1 - r] = currentMatrix[r][c];
      }
    }
    rotations.push(newMatrix);
    currentMatrix = newMatrix;
  }
  return rotations;
};
