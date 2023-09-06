import { Unit } from "../Unit";

export class Swordman extends Unit {
  sprite = {
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

  constructor(x, y, type) {
    super(x, y, type);
    this.colors = {
      0: 'rgba(0,0,0,0)',
      1: '#5e5c57',
      2: '#f7d180',
      3: '#b1b1b1',
      4: '#171717',
      5: this.type === 'ally' ? '#d3a061' : '#bc4e4e',
      6: this.type === 'ally' ? '#99703b' : '#a43434',
      7: '#f4f4f4',
    };
  }
}