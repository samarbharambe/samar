
function preload(){
  //pre-load images
  Runner = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
Runner=createSprite(200,300)
Runner.addAnimation("Running",runner_running)
Runner.scale=0.5


  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2
}

function draw() {
  background("white");
 if(path.y>400){
   path.y=hight/2;
 }
}
