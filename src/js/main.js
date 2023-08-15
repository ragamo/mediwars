import { GameMap } from "./GameMap";

const W = 1000;
const canvas = document.getElementById('canvas');
canvas.width = canvas.height = W * 2;
canvas.style.width = canvas.style.height = W;
canvas.style.border="1px solid red";

const gameMap = new GameMap(100);
const grid = gameMap.getGrid();

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.scale(2,2);

const t0 = performance.now();
ctx.lineWidth = 0;
for(let i=0; i<grid.length; i++) {
  ctx.moveTo(i*10, 0);
  ctx.lineTo(i*10, W);
  ctx.stroke();
}
for(let i=0; i<grid.length; i++) {
  ctx.moveTo(0, i*10);
  ctx.lineTo(W, i*10);
  ctx.stroke();
}
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

/*const t0 = performance.now();
grid.forEach((row, i) => {
  row.forEach((col, j) => {
    ctx.rect(i*10-10, j*10-10, 10, 10);
  })
})
ctx.stroke();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);*/