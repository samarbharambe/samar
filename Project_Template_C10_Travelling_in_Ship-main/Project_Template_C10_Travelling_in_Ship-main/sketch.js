var shipImg
var seaImg


function preload(){
  shipImg=loadAnimation("ship-1.png","ship-2.png")       
  seaImg=loadImage("sea.png.")

}

  function setup(){
  createcanvas(400,200)
shipImg=createSprite(50,350,50,50)
shipImg.addAnimation(shipImg)
//shipImg1.scale=0.5

seaImg=createSprite(800,400,800,400)
seaImg.addImage(seaImg)

}

function draw() {
  background("blue");

  if(seaImg.x<0){
    seaImg.x=sea.width/2;
  }

drawSprite()
}