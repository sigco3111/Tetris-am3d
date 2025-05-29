
export type CellValue = number; // 0 for empty, 1-7 for tetromino types/colors
export type BoardMatrix = CellValue[][];

export interface Position {
  row: number;
  col: number;
}

export interface TetrominoShape {
  matrix: number[][];
  colorIndex: number; // Index into COLORS array
  id: string;
}

export interface ActivePiece {
  shape: TetrominoShape;
  position: Position;
  rotation: number; // Index of current rotation matrix
  matrices: number[][][]; // All rotation matrices for this shape
}

export enum GameState {
  Playing,
  Paused,
  GameOver,
  Initial
}
