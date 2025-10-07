/*
 * Title: Homework 2 - Random Dots
 * Author: Joshua Bohn
 * Date: AU2025 09/15/2025
 * Simple Description: When ran, the code creates a canvas of random dots with varying colors, sizes, and transparencies within a set parameter. Clicking the mouse redraws the canvas, adds a set random amount of dots, and expands the area where dots can be created
 * Instructions: Click mouse
 */

//n is number of dots
let n = 1;
//dotX1,X2,Y1,Y2 are x values and y values for random dot locations
let dotX1 = 200;
let dotX2 = 300;
let dotY1 = 200;
let dotY2 = 300;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(120, 255, 255);

  //code for randomizing dot colors, size, location, and transparency within range
  for (let i = 0; i < n; i++) {
    noStroke();
    let c = color(random(0, 255), 0, random(0, 255));
    c.setAlpha(random(150, 255));
    fill(c);
    circle(random(dotX1, dotX2), random(dotY1, dotY2), random(9, 50));
  }
}

//refreshes canvas, adds 1-4 dots and increases random X and Y dot location variables till upper limit
function mouseClicked() {
  n += int(random(1, 4));
  dotX1 -= 2;
  dotX2 += 2;
  dotY1 -= 2;
  dotY2 += 2;
  redraw();
  if (n > 300) {
    n = 1;
  }
  if (dotX1 === 0) {
    dotX1 = 200;
    dotX2 = 300;
  }
  if (dotY1 === 0) {
    dotY1 = 200;
    dotY2 = 300;
  }
}
