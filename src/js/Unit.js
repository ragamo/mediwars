import { SPRITE_WIDTH } from "./constants";
import { astar } from "./lib/AStar";

/**
 * @typedef { 'ally' | 'enemy' } UnitType
 */

export class Unit {
  /** @type {UnitType} */
  type = null;
  #path = [];
  #stepCount = 1;
  #shiftEvery = 6;

  /**
   * 
   * @param {number} x initial X position 
   * @param {number} y initial Y postion
   * @param {UnitType} type initial unit type
   */
  constructor(x, y, type = 'ally') {
    this.x = x;
    this.y = y;
    this.type = type;
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
    ctx.fillRect(this.x * SPRITE_WIDTH, this.y * SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH);
  }
}