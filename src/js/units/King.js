import { Unit } from "../Unit";

export class King extends Unit {
  health = 15;

  sprite = {
    idle: [
      [
        [0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 2, 1, 2, 2, 1, 2, 1, 0, 0, 0, 0],
        [1, 7, 7, 1, 1, 2, 1, 2, 2, 1, 2, 1, 0, 0, 0, 0],
        [1, 7, 7, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 0, 0, 0],
        [1, 7, 7, 1, 4, 4, 3, 3, 3, 3, 4, 4, 1, 0, 0, 0],
        [1, 7, 7, 1, 4, 4, 3, 3, 3, 3, 4, 4, 1, 1, 1, 0],
        [1, 7, 7, 1, 1, 4, 1, 3, 3, 1, 4, 1, 10, 4, 10, 1],
        [1, 7, 7, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 10, 4, 1],
        [1, 7, 7, 1, 5, 5, 5, 1, 1, 5, 5, 1, 10, 4, 10, 1],
        [1, 7, 7, 1, 1, 5, 5, 1, 1, 5, 5, 1, 4, 10, 4, 1],
        [9, 9, 9, 9, 1, 5, 5, 5, 5, 5, 5, 1, 10, 4, 10, 1],
        [9, 9, 9, 9, 1, 6, 6, 6, 6, 6, 6, 1, 4, 10, 4, 1],
        [1, 8, 8, 1, 1, 8, 8, 8, 8, 8, 8, 1, 10, 4, 10, 1],
        [1, 8, 8, 1, 1, 6, 6, 6, 6, 6, 6, 1, 4, 10, 4, 1],
        [1, 8, 8, 1, 1, 6, 6, 1, 1, 6, 6, 1, 10, 4, 10, 1],
        [0, 1, 1, 0, 1, 6, 6, 1, 1, 6, 6, 1, 1, 1, 1, 0],
      ],
      [
        [0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0],
        [1, 7, 7, 1, 1, 2, 1, 2, 2, 1, 2, 1, 0, 0, 0, 0],
        [1, 7, 7, 1, 1, 2, 1, 2, 2, 1, 2, 1, 0, 0, 0, 0],
        [1, 7, 7, 1, 2, 2, 2, 3, 3, 2, 2, 2, 1, 0, 0, 0],
        [1, 7, 7, 1, 4, 4, 3, 3, 3, 3, 4, 4, 1, 0, 0, 0],
        [1, 7, 7, 1, 4, 4, 3, 3, 3, 3, 4, 4, 1, 1, 1, 0],
        [1, 7, 7, 1, 1, 4, 1, 3, 3, 1, 4, 1, 10, 4, 10, 1],
        [1, 7, 7, 1, 1, 4, 1, 1, 1, 1, 4, 1, 4, 10, 4, 1],
        [1, 7, 7, 1, 5, 5, 5, 1, 1, 5, 5, 1, 10, 4, 10, 1],
        [9, 9, 9, 9, 1, 5, 5, 1, 1, 5, 5, 1, 4, 10, 4, 1],
        [9, 9, 9, 9, 1, 5, 5, 5, 5, 5, 5, 1, 10, 4, 10, 1],
        [1, 8, 8, 1, 1, 6, 6, 6, 6, 6, 6, 1, 4, 10, 4, 1],
        [1, 8, 8, 1, 1, 8, 8, 8, 8, 8, 8, 1, 10, 4, 10, 1],
        [1, 8, 8, 1, 1, 6, 6, 6, 6, 6, 6, 1, 4, 10, 4, 1],
        [0, 1, 1, 0, 1, 6, 6, 1, 1, 6, 6, 1, 10, 4, 10, 1],
        [0, 0, 0, 0, 1, 6, 6, 1, 1, 6, 6, 1, 1, 1, 1, 0],
      ],
    ],
  };

  colors = {
    0: 'rgba(0,0,0,0)',
    1: '#171717',
    2: '#fffc4c',
    3: '#f7d180',
    4: '#477def',
    5: '#d3a061',
    6: '#5e5c57',
    7: '#f4f4f4',
    8: '#b1b1b1',
    9: '#99703b',
    10: '#002577',
  };
}