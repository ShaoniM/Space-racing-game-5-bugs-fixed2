var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

//var cars, car1, car2, car3, car4;

//var track, car1_img, car2_img, car3_img, car4_img;
var spaceships, spaceship1, spaceship2, gAliensGroup, bAliensGroup;
var gAlien, bAlien;
var spaceship1Img, spaceship2Img, bgImg, goodAlienImg, badAlienImg, asteroidImg;

var asteroid, asteroidGroup;
var score = 0;

function preload(){
  bgImg = loadImage("images/background.jpg");
  spaceship1Img = loadImage("images/Ship1final.png");
  spaceship2Img = loadImage("images/ship2final.png");
 goodAlienImg = loadImage("images/goodAlien.png");
 badAlienImg= loadImage("images/badAlien.png");
 asteroidImg = loadImage("images/asteroid.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  gAliensGroup = new Group();
  bAliensGroup = new Group();
  asteroidGroup = new Group();

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   // goodAliens();
   // badAliens();
  //asteroids();
  }
  if(gameState === 2){
    game.end();
  }
}
