//declairing variables
var monkey , monkey_running;
var bananaImage,  obstacleImage;
var foodGroup, obstacleGroup;
var score;

var PLAY = 1;
var END = 0;
var gameState =PLAY;

function preload(){
  
  //loaded images
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,450);
  
  //ground
  ground = createSprite(300,400,600,25);
  ground.shapeColor = "black";
  ground.x = ground.width/2;
  
  //monkey
  monkey = createSprite(25,400,0,0);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //groups
 foodGroup = createGroup();
 obstacleGroup = createGroup();
  
score = 0;
  
}


function draw() {
  background("lightgreen");
  fill("black");
  textSize(20);
  text("SCORE = "+score,400,30);
  
  
  //gamestates
  if(gameState === PLAY)
  { ground.velocityX = -4;
  if(ground.x<300){
    ground.x = ground.width/2;
  }  
    food();
  stones();
  //score 
   score = score + Math.round(getFrameRate()/60);
   
   
   
   
}
  //using if so when space is pressed it jumps
   if(keyDown("space") && monkey.y>350){
      monkey.velocityY = -30; 
    }  
  
   //adding gravity
   monkey.velocityY = monkey.velocityY +2;
   monkey.collide(ground);
  
  
   
  drawSprites();
  
}

function food(){
  if(frameCount%80===0)
  { var banana = createSprite(490,300,20,20);
   banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.2;
  banana.velocityX = -5;
  banana.lifetime = 200;
    foodGroup.add(banana);
   
  monkey.depth = banana.depth+1; 
  }
 
 
}

function stones(){
  if(frameCount%300===0)
  {var obstacle = createSprite(580,370,202,20);
   obstacle.addImage(obstaceImage);
 
      obstacle.scale = 0.1;
   obstacle.velocityX = -7;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
  }
  
}

