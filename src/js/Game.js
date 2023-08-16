export class Game {
  #entities = [];

  /**
   * 
   * @param {CanvasRenderingContext2D} renderer
   */
  constructor(renderer) {
    this.renderer = renderer;
  }

  loop() {
    this.renderer.clearRect(0, 0, this.renderer.canvas.clientWidth, this.renderer.canvas.clientHeight);
    for(const entity of this.#entities) {
      entity.draw(this.renderer);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }

  add(entity) {
    this.#entities.push(entity);    
  }
}