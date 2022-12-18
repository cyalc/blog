// TODO: Refactor this class to a lazier structure.
export class GolManager {
  private getAliveNeighbors(grid: number[][], row: number, col: number) {
    let aliveNeighbors = 0;

    // array of possible neighbors
    const neighbors = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    // iterate over possible neighbors
    for (const [r, c] of neighbors) {
      // check if the neighbor exists and is alive
      if (grid[row + r] && grid[row + r][col + c] === 1) {
        aliveNeighbors += 1;
      }
    }

    return aliveNeighbors;
  }

  update(grid: number[][]) {
    console.log("Input grid:", grid);

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
    console.log("Next grid:", nextGrid);
    return nextGrid;
  }
}
