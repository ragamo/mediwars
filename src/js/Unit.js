import { TILE_WIDTH } from "./constants";
import { astar } from "./lib/AStar";

export class Unit {
  #path = [];

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(graph, x, y) {
    this.#path = astar.search(graph, graph.getNode(this.x, this.y), graph.getNode(x, y));
  }

  step() {
    if (this.#path.length) {
      this.x = this.#path[0].x;
      this.y = this.#path[0].y;
      this.#path.shift();
    }
  }

  /**
   * Draw on game world
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x * TILE_WIDTH, this.y * TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
  }
}