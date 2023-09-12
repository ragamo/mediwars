import { Game } from "./Game";
import { King } from "./units/King";
import { Swordman } from "./units/Swordman";

const game = new Game(document.getElementById('canvas'));

const basic = new King(5, 3);
game.add(basic);

const patrol = new Swordman(3, 10, 'enemy');
patrol.patrol([3, 15], [15, 15], [15, 10]);
game.add(patrol);

for(let i=3; i<7; i++) {
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
