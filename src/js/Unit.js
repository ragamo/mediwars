import { TILE_WIDTH } from "./constants";
import { astar } from "./lib/AStar";

export class Unit {
  #path = [];
  #stepCount = 1;
  #shiftEvery = 6;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(graph, x, y) {
    this.#path = astar.search(graph, graph.getNode(Math.ceil(this.x), Math.ceil(this.y)), graph.getNode(x, y));
  }

  step() {
    if (this.#path.length) {
      this.x = this.x + ((this.#path[0].x - this.x) / this.#shiftEvery) * this.#stepCount;
      this.y = this.y + ((this.#path[0].y - this.y) / this.#shiftEvery) * this.#stepCount;

      this.#stepCount++;
      if (this.#stepCount % this.#shiftEvery === 0) {
        this.#path.shift();
      }
      if (this.#stepCount >= this.#shiftEvery) {
        this.#stepCount = 1;
      }
    }
  }

  /**
   * Draw unit
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x * TILE_WIDTH, this.y * TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
  }
}