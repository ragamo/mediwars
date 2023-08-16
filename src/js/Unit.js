export class Unit {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Draw on game world
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    ctx.fillRect(this.x, this.y, 10, 10);
  }
}