import { SPRITE_WIDTH } from "./constants";
import { astar } from "./lib/AStar";

/**
 * @typedef { 'ally' | 'enemy' } UnitType
 * @typedef { 'idle' | 'fighting' } UnitState
 */

export class Unit {
  id = null;
  /** @type {UnitType} */
  type = null;
  /** @type {UnitState} */
  state = 'idle';

  #path = [];
  #stepCount = 0;
  #shiftEvery = 8;

  #patrol = [];
  #patrolIndex = 0;

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

  bind(graph, enemies) {
    this.graph = graph;
    this.enemies = enemies;
  }

  move(x, y) {
    this.#stepCount = 0;
    this.#path = astar.search(this.graph, this.graph.getNode(Math.ceil(this.x), Math.ceil(this.y)), this.graph.getNode(x, y));
  }

  /**
   * Frame update
   */
  step() {
    // Collisions
    const enemyHit = this.collideWithEnemy(Math.round(this.x), Math.round(this.y));
    if (enemyHit) {
      enemyHit.stop();
      this.stop();
    }

    // Move
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

      return;
    }

    // Patrol
    if (this.#patrol.length) {
      const [x, y] = this.#patrol[this.#patrolIndex];
      this.move(x, y);
      this.#patrolIndex++;

      if (this.#patrolIndex >= this.#patrol.length) {
        this.#patrolIndex = 0;
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

  patrol(...positions) {
    this.#shiftEvery = 16;
    this.#patrol = [[this.x, this.y], ...positions];
  }
  
  stop() {
    this.#patrol = [];
    if (this.#path.length) {
      this.#stepCount = 7;
      this.#path = [this.#path[0]];
    }
  }

  collideWithEnemy(x, y) {
    return this.enemies.find((enemy) => {
      const enemyX = Math.round(enemy.x);
      const enemyY = Math.round(enemy.y)
      return this.type !== enemy.type && (
        (x + 1 === enemyX && y === enemyY) ||
        (x - 1 === enemyX && y === enemyY) ||
        (x === enemyX && y + 1 === enemyY) ||
        (x === enemyX && y - 1 === enemyY)
      );
    });
  }
}