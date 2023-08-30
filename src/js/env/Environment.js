import { SPRITE_WIDTH } from "../constants";
import { createCanvasContext } from '../lib/Canvas';

export class Environment {
  sprite = [];
  colors = {};
  cached = null;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Draw on game world
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    if (this.cached) {
      ctx.drawImage(this.cached, 0, 0, SPRITE_WIDTH * 2, SPRITE_WIDTH * 2, this.x * SPRITE_WIDTH, this.y * SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH);
      return;
    }
    
    const { canvas, context } = createCanvasContext(SPRITE_WIDTH, SPRITE_WIDTH);
    const len = this.sprite.length;
    for (let y=0; y<len; y++) {
      for (let x=0; x<len; x++) {
        context.fillStyle = this.colors[this.sprite[y][x]];
        context.fillRect(x, y, 1, 1);
      }
    }

    this.cached = canvas;  
    ctx.drawImage(this.cached, 0, 0, SPRITE_WIDTH * 2, SPRITE_WIDTH * 2, this.x * SPRITE_WIDTH, this.y * SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH);
  }
}
