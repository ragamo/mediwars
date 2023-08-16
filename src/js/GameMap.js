export class GameMap {
  /** @type {number[][]} */
  #grid = [];

  constructor(size = 100) {
    this.#grid = Array.from(Array(size), () => new Array(size).fill(1));
  }

  get grid() {
    return this.#grid;
  }

  addObstacle(x, y) {
    this.#grid[y][x] = 0;
  }

  /**
   * Draw game world
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    this.#drawGrid(ctx);
    this.#drawCollisions(ctx);
  }

  /**
   * Draw game grid
   * @param {CanvasRenderingContext2D} ctx 
   */
  #drawGrid(ctx) {
    const gridLen = this.#grid.length * this.#grid.length;
    for(let x=0; x<gridLen; x++) {
      ctx.moveTo(x*10, 0);
      ctx.lineTo(x*10, gridLen);
    }
    for(let y=0; y<gridLen; y++) {
      ctx.moveTo(0, y*10);
      ctx.lineTo(gridLen, y*10);
    }
    ctx.strokeStyle = 'rgba(0, 0, 0, .05)';
    ctx.stroke();
  }

  /**
   * Draw game walls
   * @param {CanvasRenderingContext2D} ctx 
   */
  #drawCollisions(ctx) {
    ctx.fillStyle = '#000000';
    const gridLen = this.#grid.length;
    for (let y=0; y<gridLen; y++) {
      for (let x=0; x<gridLen; x++) {
        if (this.#grid[y][x] === 0) {
          ctx.fillRect(x*10, y*10, 10, 10);
        }
      }
    }
  }

}