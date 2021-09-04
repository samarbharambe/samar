var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf

function preload(){
  appleImg=loadImage("apple.png")
  leafImg=loadImage("leaf.png")
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

spwanapple();
spwanleaf();

rabbit.x=world.mouseX

  var select_balloon = Math.round(random(1,2));
  
  if (World.frameCount%80===0) {
    if (select_sprites == 1) {
      apple();
    } else if (select_sprites == 2) {
     leaf();
    }
  }

function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
}

function createapples(){
  apple=createSprite(random(50,350),40,10,10,)
  apple.addImage(appleImg)
  apple.scale=0.4
  apple.velocityY=-2
  apple.lifetime=340
}

function createleaf(){
  leaf=createSprite(random(50,350),40,10,10,)
  leaf.addImage(leafImg)
  leaf.scale=0.4
  leaf.velocityY=-2
  leaf.lifetime=340      
 }
  
/*
var select_sprites=math.round(random(1,2))
  if(frameCount%80===0){
    if(select_sprites===1){
      function createapples(){
        apple=createSprite(random(50,350),40,10,10,)
        apple.addImage(appleImg)
        apple.scale=0.4
        apple.velocityY=-2
        apple.lifetime=340
    }
    
  if (frameCount%80===0){
      function createleaf(){
        leaf=createSprite(random(50,350),40,10,10,)
        leaf.addImage(leafImg)
        leaf.scale=0.4
        leaf.velocityY=-2
        leaf.lifetime=340      
       }
     }
   }
  }





*/