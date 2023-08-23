import { Game } from "./Game";
import { Unit } from "./Unit";
import { WORLD_TILES } from './constants';
import { Basic } from "./units/Basic";

const game = new Game(document.getElementById('canvas'), WORLD_TILES);

game.addObstacle(39, 40);
game.addObstacle(40, 40);
game.addObstacle(41, 40);
game.addObstacle(42, 40);
game.addObstacle(43, 40);
game.addObstacle(44, 40);

game.addObstacle(44, 41);
game.addObstacle(44, 42);
game.addObstacle(44, 43);
game.addObstacle(44, 44);
game.addObstacle(44, 45);

game.addObstacle(39, 41);
game.addObstacle(39, 42);
game.addObstacle(39, 43);
game.addObstacle(39, 44);
game.addObstacle(39, 45);

for(let i=5; i<10; i++) {
  for (let j=5; j<10; j++) {
    const unit = new Basic(i, j);
    game.add(unit);
  }
}

const basic = new Basic(20, 20);
game.add(basic);

game.loop();
