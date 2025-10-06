/*
 * Title: Homework 3 - Form Generator
 * Author: Joshua Bohn
 * Date: AU2025 09/22/2025
 * Simple Description: When ran, a field of flowers is created. The length of the flowers grow and shrink dependent on the mouseY location when clicking and dragging. The colors of the flowers can also be changed by pressing different number keys.
 * Instructions: Click and drag the mouse, press number keys
 */

function setup() {
  createCanvas(400, 400);
}

// Variable for flower color
let flowerColor = "pink";

// Variables for stem length, where the stem starts, and Y location of petals
let stemLength1 = 240;
let stemStart1 = 240;
let petalsY1 = 240;

let stemLength2 = 275;
let stemStart2 = 275;
let petalsY2 = 275;

let stemLength3 = 200;
let stemStart3 = 200;
let petalsY3 = 200;

// Creates preset flower with inputs x y location, start and end for stem, and color
function createFlower(x, y, l1, l2, c) {
  stroke("green");
  strokeWeight(5);
  line(x, l1, x, l2 + 60);
  stroke("black");
  strokeWeight(1);
  fill(255, 255, 50);
  ellipse(x, y, 40, 40);
  fill(0, 0, 0);
  fill(c);
  arc(x, y - 15, 30, 30, PI, 0);
  arc(x, y + 15, 30, 30, 0, PI);
  arc(x + 15, y, 30, 30, HALF_PI + PI, HALF_PI);
  arc(x - 15, y, 30, 30, HALF_PI, HALF_PI - PI);
  arc(x + 10, y - 10, 30, 30, PI + QUARTER_PI, TWO_PI + QUARTER_PI);
  arc(x - 10, y - 10, 30, 30, PI - QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(x - 10, y + 10, 30, 30, HALF_PI - QUARTER_PI, PI + QUARTER_PI);
  arc(x + 10, y + 10, 30, 30, TWO_PI - QUARTER_PI, HALF_PI + QUARTER_PI);
}

function draw() {
  background(0, 230, 255);
  noStroke();
  fill(0, 200, 0);
  rect(0, 250, 400, 100);
  fill(0, 100, 0);
  rect(0, 350, 400, 100);

  //Flowers given inputs for petal x y location, stem length, stem start, and flower color
  createFlower(390, petalsY3, stemLength3, stemStart3, flowerColor);
  createFlower(290, petalsY3, stemLength3, stemStart3, flowerColor);
  createFlower(190, petalsY3, stemLength3, stemStart3, flowerColor);
  createFlower(90, petalsY3, stemLength3, stemStart3, flowerColor);
  createFlower(-10, petalsY3, stemLength3, stemStart3, flowerColor);
  createFlower(340, petalsY1, stemLength1, stemStart1, flowerColor);
  createFlower(240, petalsY1, stemLength1, stemStart1, flowerColor);
  createFlower(140, petalsY1, stemLength1, stemStart1, flowerColor);
  createFlower(40, petalsY1, stemLength1, stemStart1, flowerColor);
  createFlower(390, petalsY2, stemLength2, stemStart2, flowerColor);
  createFlower(290, petalsY2, stemLength2, stemStart2, flowerColor);
  createFlower(190, petalsY2, stemLength2, stemStart2, flowerColor);
  createFlower(90, petalsY2, stemLength2, stemStart2, flowerColor);
  createFlower(-10, petalsY2, stemLength2, stemStart2, flowerColor);
}

// When the mouse is dragged, the stems "grow" and "shrink" and petal location moves based on mouseY
function mouseDragged() {
  if (mouseY < 310) {
    stemLength1 = mouseY;
    petalsY1 = mouseY;
    stemLength2 = mouseY + 35;
    petalsY2 = mouseY + 35;
    stemLength3 = mouseY - 40;
    petalsY3 = mouseY - 40;
  }
}

// When specific number keys are pressed, the flower petals change colors
function keyTyped() {
  if (key === "1") {
    flowerColor = "red";
  } else if (key === "2") {
    flowerColor = "blue";
  } else if (key === "3") {
    flowerColor = "green";
  } else if (key === "4") {
    flowerColor = "gold";
  } else if (key === "5") {
    flowerColor = "cyan";
  } else if (key === "6") {
    flowerColor = "magenta";
  } else if (key === "7") {
    flowerColor = "orange";
  } else if (key === "8") {
    flowerColor = "teal";
  } else if (key === "9") {
    flowerColor = "purple";
  } else if (key === "0") {
    flowerColor = "pink";
  }
}
