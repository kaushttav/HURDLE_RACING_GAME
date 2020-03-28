var runner;
var runner_animation;
// var invisible_runner_object;
// var invisible_hurdle_object;
var ground;
var ground_image;
var invisibleGround;
var backgroundImg;
var hurdle;
var hurdle_image;
var button;
var count = 0;
function preload(){
  runner_animation = loadAnimation("runner1.png","runner2.png","runner3.png");
  backgroundImg = loadImage("stadium.jpg");
  ground_image = loadImage("bg.png");
  hurdle_image = loadImage("hurdle.png");
}
function setup() {
  var canvas = createCanvas(800,400);
  runner = createSprite(250, 315, 50, 50);
  runner.addAnimation("running",runner_animation);

  // invisible_runner_object = createSprite(200,145,40,80);
  // invisible_runner_object.visible = false;

  ground = createSprite(200, 400, 2000, 35);
  ground.addImage(ground_image);
  ground_image.resize(2000,50);
  ground.x = ground.width/2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,385,800,5);
  invisibleGround.visible = false;

  button = createButton("PAUSE");
  button.position(20,20);
  button.mouseClicked(pause);   

  button = createButton("RESET");
  button.position(740,20);
  button.mouseClicked(reset);
}

function draw() {
  background(backgroundImg);  
  textSize(15);
  textStyle(BOLD);
  text("Reach 250 score to win the game!",250,30)
  text("Score: "+ count, 360, 155);
  count = Math.round(frameCount/4);
 
  // invisible_runner_object.x = runner.x;
  // invisible_runner_object.y= runner.y;

  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("SPACE")&& runner.y >=310){
    runner.velocityY = runner.velocityY - 4;
    
  }

  runner.velocityY = runner.velocityY+0.8;

  runner.collide(invisibleGround);

  if(frameCount % 150 === 0) {
    hurdle = createSprite(800,365,10,40);
    hurdle.addImage(hurdle_image);
    hurdle.velocityX = -15;         
    hurdle.scale = 0.5;
    hurdle.collide(invisibleGround);
  }
  /*if(frameCount % 150 === 0) {
    invisible_hurdle_object = createSprite(830,365,40,125);
    invisible_hurdle_object.velocityX = -15;     
    invisible_hurdle_object.visible = false;
  }*/

  drawSprites();
  if(count >=250){
    background("black");
    textSize(40);
    text("YOU WON!",310,200);
  }
}
function pause(){

}    
function reset(){

}     