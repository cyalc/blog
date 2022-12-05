export class GolManager {
  // create a new function to calculate the number of alive neighbors for a given cell
  getAliveNeighbors(grid: number[][], row: number, col: number) {
    let aliveNeighbors = 0;

    // check the top left neighbor
    if (row > 0 && col > 0 && grid[row - 1][col - 1] === 1) {
      aliveNeighbors += 1;
    }

    // check the top neighbor
    if (row > 0 && grid[row - 1][col] === 1) {
      aliveNeighbors += 1;
    }

    // check the top right neighbor
    if (row > 0 && col < grid[row].length - 1 && grid[row - 1][col + 1] === 1) {
      aliveNeighbors += 1;
    }

    // check the left neighbor
    if (col > 0 && grid[row][col - 1] === 1) {
      aliveNeighbors += 1;
    }

    // check the right neighbor
    if (col < grid[row].length - 1 && grid[row][col + 1] === 1) {
      aliveNeighbors += 1;
    }

    // check the bottom left neighbor
    if (row < grid.length - 1 && col > 0 && grid[row + 1][col - 1] === 1) {
      aliveNeighbors += 1;
    }

    // check the bottom neighbor
    if (row < grid.length - 1 && grid[row + 1][col] === 1) {
      aliveNeighbors += 1;
    }

    // check the bottom right neighbor
    if (
      row < grid.length - 1 &&
      col < grid[row].length - 1 &&
      grid[row + 1][col + 1] === 1
    ) {
      aliveNeighbors += 1;
    }

    // return the number of alive neighbors
    return aliveNeighbors;
  }

  update(grid: number[][]) {
    const nextGrid: number[][] = [];

    for (let row = 0; row < grid.length; row++) {
      const nextRow: number[] = [];

      for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col];
        const aliveNeighbors = this.getAliveNeighbors(grid, row, col);

        if (cell === 1 && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
          nextRow.push(1);
        } else if (cell === 0 && aliveNeighbors === 3) {
          nextRow.push(1);
        } else {
          nextRow.push(0);
        }
      }

      nextGrid.push(nextRow);
    }

    return nextGrid;
  }
}
