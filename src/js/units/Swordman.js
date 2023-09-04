import { Unit } from "../Unit";
import { SPRITE_WIDTH } from "../constants";
import { createCanvasContext } from '../lib/Canvas';

export class Swordman extends Unit {
  #sprite = {
    idle: [
      [
        [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 4, 1, 1, 1, 4, 0, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 0, 4, 3, 3, 3, 4, 0, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 0, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 4, 0, 4, 7, 4, 0],
        [0, 4, 4, 4, 4, 4, 3, 2, 3, 3, 3, 4, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 3, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 6, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 1, 1, 1, 4, 4, 2, 5, 5, 4],
        [4, 5, 6, 5, 6, 5, 4, 1, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 4, 5, 6, 5, 4, 1, 4, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 0, 4, 4, 4, 1, 1, 4, 1, 1, 4, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 4, 2, 2, 4, 1, 1, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 4, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 0, 4, 1, 1, 1, 4, 0, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 3, 3, 3, 4, 0, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 0, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 4, 0, 4, 7, 4, 0],
        [0, 4, 4, 4, 4, 4, 3, 2, 3, 3, 3, 4, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 3, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 2, 5, 5, 4],
        [4, 6, 5, 6, 5, 6, 4, 1, 1, 1, 4, 4, 4, 6, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 1, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 4, 5, 6, 5, 4, 1, 4, 1, 1, 4, 0, 0, 4, 0, 0],
        [0, 0, 4, 4, 4, 1, 1, 4, 1, 1, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 1, 1, 4, 2, 2, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    ],
  };

  get #colors() {
    return {
      0: 'rgba(0,0,0,0)',
      1: '#5e5c57',
      2: '#f7d180',
      3: '#b1b1b1',
      4: '#171717',
      5: this.type === 'ally' ? '#d3a061' : '#bc4e4e',
      6: this.type === 'ally' ? '#99703b' : '#a43434',
      7: '#f4f4f4',
    }
  }

  #step = 0;
  #cached = [];
  /**
   * Draw on game world
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    this.#step++;
    const state = Math.floor(this.#step/40)%2;
    if (this.#step >= 80) this.#step = 0;

    if (this.#cached[state]) {
      ctx.drawImage(this.#cached[state], 0, 0, SPRITE_WIDTH * 2, SPRITE_WIDTH * 2, this.x * SPRITE_WIDTH, this.y * SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH);
      return;
    }
    
    const { canvas, context } = createCanvasContext(SPRITE_WIDTH, SPRITE_WIDTH);
    const len = this.#sprite.idle[state].length;
    for (let y=0; y<len; y++) {
      for (let x=0; x<len; x++) {
        context.fillStyle = this.#colors[this.#sprite.idle[state][y][x]];
        context.fillRect(x, y, 1, 1);
      }
    }

    this.#cached[state] = canvas;    
  }

  clearCache() {
    this.#cached = [];
  }
}