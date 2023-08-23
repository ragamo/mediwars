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
    // this.#grid = Array.from(Array(gridSize), () => new Array(gridSize).fill(1));

    const grid = Array.from(Array(gridSize), () => new Array(gridSize).fill(0));
    const weights = grid.flatMap((xVector, y) => xVector.map((elem, x) => this.#getPerlinValue(x, y)));
    const min = Math.abs(Math.min(...weights));
    this.#grid = grid.map((yVector, y) => {
      return yVector.map((xVector, x) => {
        const perlinValue = this.#getPerlinValue(x, y) + min;
        if (perlinValue < 40) return 0;
        return perlinValue;
      });
    });

    // Canvas
    canvas.width = WORLD_WIDTH * 2;
    canvas.height = WORLD_HEIGHT * 2;
    canvas.style.width = WORLD_WIDTH;
    canvas.style.height = WORLD_HEIGHT;
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
    const [x, y] = [Math.floor(e.pageX / TILE_WIDTH), Math.floor(e.pageY / TILE_WIDTH)];
    const targets = this.#findTargetRegion(x, y, this.#entities.length, this.#grid);

    for (const entity of this.#entities) {
      const pos = targets.shift();
      entity.move(this.#grid, pos[0], pos[1]);
    }
  }

  /**
   * Main loop
   * @param {number} timestamp 
   */
  loop(timestamp) {
    this.renderer.clearRect(0, 0, this.renderer.canvas.clientWidth, this.renderer.canvas.clientHeight);
    this.#drawWorld(this.renderer);
    this.#drawCollisions(this.renderer);
    for(const entity of this.#entities) {
      if (entity.step) entity.step(timestamp);
      if (entity.draw) entity.draw(this.renderer);
    }
    window.requestAnimationFrame(this.loop.bind(this));
  }

  add(entity) {
    this.#entities.push(entity);
  }

  #getPerlinValue(x, y) {
    return (perlin2(x / 8, y / 8) * 100) + 10;
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
    ctx.fillStyle = 'rgba(0,0,0,.35)';
    const gridLen = this.#grid.length;
    for (let y=0; y<gridLen; y++) {
      for (let x=0; x<gridLen; x++) {
        if (this.#grid[y][x] === 0) {
          ctx.fillRect(x*TILE_WIDTH, y*TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
        }
      }
    }
  }

  #findTargetRegion(x, y, entitiesLength, grid) {
    const spiralDirections = [
      [0, 1],  // right
      [1, 0],  // down
      [0, -1], // left
      [-1, 0]  // up
    ];
  
    let currentRow = y;
    let currentCol = x;
    let directionIndex = 0;
    let stepsCount = 1;
    let stepsTaken = 0;
    
    const selectedNodes = [];
  
    while (selectedNodes.length < entitiesLength) {
      if (currentRow >= 0 && currentCol >= 0 && grid[currentRow][currentCol] > 0) {
        selectedNodes.push([currentCol, currentRow]);
      }
  
      currentRow += spiralDirections[directionIndex][0];
      currentCol += spiralDirections[directionIndex][1];
      stepsTaken++;
  
      if (stepsTaken === stepsCount) {
        stepsTaken = 0;
        directionIndex = (directionIndex + 1) % 4;
        if (directionIndex % 2 === 0) {
          stepsCount++;
        }
      }
    }
  
    return selectedNodes;    
  }
}