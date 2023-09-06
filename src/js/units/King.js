import { Unit } from "../Unit";

export class King extends Unit {
  sprite = {
    idle: [
      [
        [0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 5, 4, 5, 4, 5, 4, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 4, 5, 6, 6, 6, 5, 4, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 4, 5, 2, 2, 2, 5, 4, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 4, 0, 4, 7, 4, 0],
        [0, 0, 4, 4, 4, 4, 3, 2, 3, 3, 3, 4, 4, 7, 4, 0],
        [0, 4, 5, 6, 5, 4, 3, 3, 3, 3, 3, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 6, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 1, 1, 1, 4, 4, 2, 5, 5, 4],
        [0, 4, 6, 5, 6, 4, 1, 1, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 0, 4, 4, 4, 1, 1, 4, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 0, 0, 0, 4, 1, 1, 4, 1, 1, 4, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 4, 5, 5, 4, 1, 1, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 4, 0, 0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 4, 5, 4, 5, 4, 5, 4, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 4, 5, 6, 6, 6, 5, 4, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 4, 5, 2, 2, 2, 5, 4, 0, 4, 7, 4, 0],
        [0, 0, 0, 0, 0, 4, 2, 2, 2, 4, 4, 0, 4, 7, 4, 0],
        [0, 0, 4, 4, 4, 4, 3, 2, 3, 3, 3, 4, 4, 7, 4, 0],
        [0, 4, 5, 6, 5, 4, 3, 3, 3, 3, 3, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 6, 5, 6, 5, 6, 4, 3, 3, 3, 4, 3, 4, 7, 4, 0],
        [4, 5, 6, 5, 6, 5, 4, 3, 3, 3, 4, 3, 2, 5, 5, 4],
        [4, 6, 5, 6, 5, 6, 4, 1, 1, 1, 4, 4, 4, 6, 4, 0],
        [0, 4, 6, 5, 6, 4, 1, 1, 1, 1, 4, 0, 4, 6, 4, 0],
        [0, 0, 4, 4, 4, 1, 1, 4, 1, 1, 4, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 4, 1, 1, 4, 1, 1, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 1, 1, 4, 5, 5, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    ],
  };

  colors = {
    0: 'rgba(0,0,0,0)',
    1: '#b1b1b1',
    2: '#f7d180',
    3: '#574b77',
    4: '#171717',
    5: '#f2cf3a',
    6: '#e2931d',
    7: '#f4f4f4',
  };
}