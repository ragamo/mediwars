export class GameMap {
  #grid = [];

  constructor(size = 100) {
    this.#grid = Array.from(Array(size), () => new Array(size).fill(0));
  }

  getGrid() {
    return this.#grid;
  }

}