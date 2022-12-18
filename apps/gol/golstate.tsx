export function generateRandomState(
  numRows: number,
  numCols: number,
  numCells: number
): number[][] {
  // Create a two-dimensional array to represent the grid, with all cells initialized to be dead (0).
  const grid: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j < numCols; j++) {
      row.push(0);
    }
    grid.push(row);
  }

  // Use a for loop to iterate over the number of cells to be alive in the initial state.
  for (let i = 0; i < numCells; i++) {
    // Generate two random numbers to represent the row and column of the cell to be alive.
    const row = Math.floor(Math.random() * numRows);
    const col = Math.floor(Math.random() * numCols);

    // Use these random numbers to set the corresponding cell in the grid to be alive (1).
    grid[row][col] = 1;
  }

  // Return the grid as the output of the function.
  return grid;
}
