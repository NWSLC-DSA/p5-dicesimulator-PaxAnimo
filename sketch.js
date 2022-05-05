let playerRoll;
let NPCRoll;
let button;
let playerScore;
let NPCScore;
let rollCounter;
//
function setup() {
  console.log("Sean's Dice v:1.0\n-----------------------\nClicky Clicky to start!");
  createCanvas(400, 400);
  button = createButton('Clicky Clicky');
  button.position(75,150)
  button.mousePressed(buttonPressed)
  textSize(32);
  //Scores
  playerScore = 0;
  NPCScore = 0;
  rollCounter = 0;
}

function buttonPressed() {
  if (button.mousePressed && rollCounter <10) {
    NPCRoll = floor(random(1, 7))
    playerRoll = floor(random(1, 7));
    rollCounter++
    addScores(); //here i'm calling a function (line 53)
    console.log(`NPC rolled a ${NPCRoll}`)
    console.log(`Player rolled a ${playerRoll}`);
    redraw() //this is very important
    updateScore();
    text(`Player`,10 ,100)
    text(`NPC`,150 ,100)
  }
  else if (rollCounter ==10 && playerScore >NPCScore) { //this checks if the player score is greater than the NPC score
    console.log(`-----------------------\nGame Over! you won. ${playerScore}-${NPCScore}`);
  }
  else if (rollCounter ==10 && playerScore <NPCScore) { //this checks if the players score is lesser than the NPC score
    console.log(`-----------------------\nGame Over! you lose. ${playerScore}-${NPCScore}`);
  }
  else { //this checks if the player score is == to the NPC score
    console.log(`-----------------------\nGame Over! It's a tie. ${playerScore}-${NPCScore}`);
  }
}

function updateScore() {
  fill(0, 102, 153);
  text(`Rolls: ${rollCounter}/10`,10,260)
  text(`Score:`, 10 ,300)
  text(`Player: ${playerScore}`, 10, 340)
  text(`NPC: ${NPCScore}`, 10, 380)
}

function addScores() {
  if (playerRoll >NPCRoll) {
    console.log(`---------------------------\nYou Win!`)
    playerScore++
  }
  else if (playerRoll == NPCRoll) {
    console.log(`---------------------------\nDraw!`)
  }
  else {
    console.log(`---------------------------\nYou Lose!`)
    NPCScore++
  }
}

function draw() {
  background(150);
  noLoop()
  //Mini Game
  if (playerRoll ==1) {
    diceValueOne(40, 35, 20);
  }
  
  if (playerRoll ==2) {
    diceValueTwo(40, 35, 20);
  }
  
  if (playerRoll ==3) {
    diceValueThree(40, 35, 20);
  }
    
  if (playerRoll ==4) {
    diceValueFour(40, 35, 20);
  }
    
  if (playerRoll ==5) {
      diceValueFive(40, 35, 20);
  }    
  if (playerRoll ==6) {
      diceValueSix(40, 35, 20);
  }
  //NPC Roll
  if (NPCRoll ==1) {
    NPCdiceValueOne(40, 160, 20);
  }
  
  if (NPCRoll ==2) {
    NPCdiceValueTwo(40, 160, 20);
  }
  
  if (NPCRoll ==3) {
    NPCdiceValueThree(40, 160, 20);
  }
    
  if (NPCRoll ==4) {
    NPCdiceValueFour(40, 160, 20);
  }
    
  if (NPCRoll ==5) {
      NPCdiceValueFive(40, 160, 20);
  }    
  if (NPCRoll ==6) {
      NPCdiceValueSix(40, 160, 20);
  }
}

function diceValueOne(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('purple');
  point(x+(size/2), y+(size/2));
}

function diceValueTwo(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('orange');
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
}

function diceValueThree(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('blue');
  point(x+(size/2), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
}

function diceValueFour(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('green');
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}

function diceValueFive(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('yellow');
  point(x+(size/2), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}

function diceValueSix(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('red');
  point(x+(size/4), y+(size/2));
  point(x+(size*0.75), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}

//NPC Dice
function NPCdiceValueOne(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('purple');
  point(x+(size/2), y+(size/2));
}

function NPCdiceValueTwo(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('orange');
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
}

function NPCdiceValueThree(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('blue');
  point(x+(size/2), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
}

function NPCdiceValueFour(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('green');
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}

function NPCdiceValueFive(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('yellow');
  point(x+(size/2), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}

function NPCdiceValueSix(size, x, y){
  strokeWeight(1);
  stroke('black');
  fill(196,202,183);
  square(x, y, size, 5);
  strokeWeight(5);
  //stroke('red');
  point(x+(size/4), y+(size/2));
  point(x+(size*0.75), y+(size/2));
  point(x+(size/4), y+(size/4));
  point(x+(size*0.75), y+(size*0.75));
  point(x+(size*0.75), y+(size/4));
  point(x+(size/4), y+(size*0.75));
}
