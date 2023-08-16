import { Game } from "./Game";
import { GameMap } from "./GameMap";
import { Unit } from "./Unit";
// import Grid from 'pathfinding/src/core/Grid';
// import AStarFinder from 'pathfinding/src/finders/AStarFinder';
import { astar, Graph } from "./lib/AStar";

const W = 1000;
const canvas = document.getElementById('canvas');
canvas.width = canvas.height = W * 2;
canvas.style.width = canvas.style.height = W;
canvas.style.border="1px solid red";

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.scale(2, 2);

const game = new Game(ctx);
const gameMap = new GameMap(100);
game.add(gameMap);

gameMap.addObstacle(0, 2);
gameMap.addObstacle(1, 2);
gameMap.addObstacle(2, 2);
gameMap.addObstacle(3, 2);
gameMap.addObstacle(4, 2);
gameMap.addObstacle(5, 2);
console.log(gameMap.grid);

/* const pfGrid = new Grid(gameMap.grid);
const finder = new AStarFinder();
const t0 = performance.now();
const path = finder.findPath(1, 1, 1, 3, pfGrid);
const t1 = performance.now();
console.log('Path', t1 - t0, path); */
const t0 = performance.now();
const graph = new Graph(gameMap.grid, { diagonal: true });
const res = astar.search(graph, graph.getNode(0, 0), graph.getNode(0, 5), {
  heuristic: astar.heuristics.manhattan,
});
const t1 = performance.now();
console.log('Path', t1 - t0, res);

// Draw path
ctx.fillStyle = '#FF0000';
ctx.fillRect(0, 0, 10, 10);
for (const r of res) {
  console.log(r);
  ctx.fillRect(r.x*10, r.y*10, 10, 10);
}

const unit = new Unit(10, 10);
game.add(unit);

game.loop();