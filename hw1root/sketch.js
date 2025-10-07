/* 
Title: Homework 1 - Landscape of Code
Author: Joshua Bohn
Date: AU2025 09/08/2025
Simple Description: When ran, the code draws a landscape containing a mountain range, plains, small lakes with variable lilypads, blue sky, and sun. 
Instrutions: Run code
*/

function setup() {
  createCanvas(400, 400);
}

let emoji = ("🦅")

//Function for making mountains
function customMountain(x, y) {
  stroke(0);
  fill(170, 78, 9); //brown base
  triangle(x - 40, y, x, y - 120, x + 40, y);
  fill(255, 255, 255); //white peak
  triangle(x - 15, y - 75, x, y - 120, x + 15, y - 75);
}

//Function for making Lakes
function customLake(x, y) {
  stroke(0);
  fill(0, 70, 180); //blue water
  ellipse(x, y, 190, 70);

  //Variables for random Lilypad placement
  let LilyX1 = random(x - 80, x + 80);
  let LilyY1 = random(y - 10, y + 10);
  let LilyX2 = random(x - 80, x + 80);
  let LilyY2 = random(y - 10, y + 10);
  let LilyX3 = random(x - 80, x + 80);
  let LilyY3 = random(y - 10, y + 10);

  fill(0, 67, 0); //green lilypads
  ellipse(LilyX1, LilyY1, 15, 5);
  ellipse(LilyX2, LilyY2, 15, 5);
  ellipse(LilyX3, LilyY3, 15, 5);
}

function draw() {
  //noLoop();
  frameRate(3)
  background(220);

  //Sky
  noStroke();
  fill(115, 208, 245); //blue sky
  rect(0, 0, 400, 400);
  fill(245, 230, 0); //yellow sun
  ellipse(200, -25, 130, 130);

  //Mountain range
  noStroke();
  fill(150, 110, 20); //beige ground
  rect(0, 230, 400, 30);
  customMountain(0, 200);
  customMountain(100, 200);
  customMountain(200, 200);
  customMountain(300, 200);
  customMountain(400, 200);
  customMountain(50, 230);
  customMountain(150, 230);
  customMountain(250, 230);
  customMountain(350, 230);
  customMountain(0, 260);
  customMountain(100, 260);
  customMountain(200, 260);
  customMountain(300, 260);
  customMountain(400, 260);

  //Plains w/ lakes
  noStroke();
  fill(0, 170, 0); //green grass
  rect(0, 250, 400, 400);
  customLake(20, 300);
  customLake(220, 360);
  customLake(340, 290);
  
  //eagle explode
  if (mouseIsPressed){
    textSize(70)
    emoji = ("💥");
    text(emoji, mouseX, mouseY);
  } else {
    textSize(30)
    emoji = ("🦅")
    text(emoji, mouseX, mouseY)
  }
}
