import { Game } from "./Game";
import { Basic } from "./units/Basic";
import { Swordman } from "./units/Swordman";

const game = new Game(document.getElementById('canvas'));

/* 
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
*/

const basic = new Basic(4, 9);
game.add(basic);

for(let i=5; i<7; i++) {
  for (let j=5; j<7; j++) {
    const unit = new Swordman(i, j);
    game.add(unit);
  }
}
for(let i=10; i<12; i++) {
  for (let j=7; j<10; j++) {
    const unit = new Swordman(i, j, 'enemy');
    game.add(unit);
  }
}

game.loop();
