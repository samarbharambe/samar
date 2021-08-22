var ship,ship_Img,edges;
var seaImg;


function preload(){
  ship_Img=loadAnimation("ship-1.png","ship-2.png")       
  seaImage=loadImage("sea.png.")

}

  function setup(){
  createcanvas(400,200)
ship=createSprite(50,350,50,50)
ship.addAnimation("ship-1",ship_Image)
ship.scale=0.5

sea=createSprite(800,400,800,400)
sea.addImage("sea",seaImage)
sea.scale=0.50

}

function draw() {
  background("blue");

  if(seaImg.x<0){
    seaImg.x=sea.width/2;
  }

drawSprite()
}