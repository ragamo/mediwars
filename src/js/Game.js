import { TILE_WIDTH, WORLD_TILES, WORLD_WIDTH, WORLD_HEIGHT } from './constants';
import { perlin2 } from "./lib/Perlin";
export class Game {
  #entities = [];
  #grid = [];

  /**
   * Main game class
   * @param {HTMLCanvasElement} canvas
   * @param {number} gridSize
   */
  constructor(canvas, gridSize = 100) {
    // EventEmitter
    this.emitter = new EventTarget();
    // this.#grid = Array.from(Array(gridSize), () => new Array(gridSize).fill(1));

    const grid = Array.from(Array(gridSize), () => new Array(gridSize).fill(0));
    const weights = grid.flatMap((xVector, y) => xVector.map((elem, x) => this.#getPerlinValue(x, y)));
    const min = Math.abs(Math.min(...weights));
    this.#grid = grid.map((yVector, y) => {
      return yVector.map((xVector, x) => {
        const perlinValue = this.#getPerlinValue(x, y) + min;
        if (perlinValue < 20) return 0;
        return perlinValue;
      });
    });

    // Canvas
    canvas.width = WORLD_WIDTH * 2;
    canvas.height = WORLD_HEIGHT * 2;
    canvas.style.width = WORLD_WIDTH;
    canvas.style.height = WORLD_HEIGHT;
    canvas.style.border="1px solid red";
    canvas.addEventListener('click', this.rendererClickEvent.bind(this));

    // Renderer
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    this.renderer = context;
  }

  get grid() {
    return this.#grid;
  }

  addObstacle(x, y) {
    this.#grid[y][x] = 0;
  }

  /**
   * Handle user click
   * @param {MouseEvent} e 
   */
  rendererClickEvent(e) {
    this.emitter.dispatchEvent(new CustomEvent('world:click', {
      detail: {
        x: Math.floor(e.pageX / TILE_WIDTH) - 1,
        y: Math.floor(e.pageY / TILE_WIDTH) - 1,
      },
    }));
  }

  /**
   * Main loop
   * @param {number} timestamp 
   */
  loop(timestamp) {
    this.renderer.clearRect(0, 0, this.renderer.canvas.clientWidth, this.renderer.canvas.clientHeight);
    this.#drawWorld(this.renderer);
    // this.#drawCollisions(this.renderer);
    for(const entity of this.#entities) {
      if (entity.step) entity.step(timestamp);
      if (entity.draw) entity.draw(this.renderer);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }

  add(entity) {
    if (entity.setup) {
      entity.setup(this.#grid, this.emitter);
    }
    this.#entities.push(entity);
  }

  #getPerlinValue(x, y) {
    return (perlin2(x / 15, y / 15) * 100) + 10;
  }

  /**
   * Draw world noise
   * @param {CanvasRenderingContext2D} ctx 
   */
  #drawWorld(ctx) {
    const gridLen = this.#grid.length;
    const color = (value) => {
      if (value <= -60) return '#0b1660';
      if (value > -60 && value <= -50) return '#16247f';
      if (value > -50 && value <= -40) return '#2e40b2';
      if (value > -40 && value <= -25) return '#0b753e';
      if (value >- 25 && value <= 0) return '#15913c';
      if (value > 0 && value <= 30) return '#7b9b36';
      if (value > 30 && value <= 50) return '#9ca092';
      if (value > 50 && value <= 60) return '#c0c9ad';
      if (value > 60 && value <= 70) return '#FFFFFF';
      return '#FFFFFF';
    }
    for (let y=0; y<gridLen; y++) {
      for (let x=0; x<gridLen; x++) {
        ctx.fillStyle = color(this.#getPerlinValue(x, y));
        ctx.fillRect(x*TILE_WIDTH, y*TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
      }
    }
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
          ctx.fillRect(x*TILE_WIDTH, y*TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
        }
      }
    }
  }
}