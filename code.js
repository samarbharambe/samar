var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eb137373-3f2b-417b-8d41-40b1dfb4554c"],"propsByKey":{"eb137373-3f2b-417b-8d41-40b1dfb4554c":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":4,"version":"RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,15,15);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "orange";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "blue";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "yellow";
  
  car1.setAnimation("car1")
  car1.scale=0.1
   car2.setAnimation("car1")
  car2.scale=0.1
   car3.setAnimation("car1")
  car3.scale=0.1
   car4.setAnimation("car1")
  car4.scale=0.1
 
//add the velocity to make the car move.

car1.velocityY=8;
car2.velocityY=-8;
car3.velocityY=8;
car4.velocityY=-8;

function draw() {
   background("white");
   textSize(20)
   fill("black")
  text("Lives: " + life,170,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  
  
// create bounceoff function to make the car bounceoff the boundaries

car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);

//Add the condition to make the sam move left and right

if(keyDown(RIGHT_ARROW)){
  sam.x+=1
}
if(keyDown(LEFT_ARROW)){
  sam.x-=1
}


//Add the condition to reduce the life of sam if it touches the car.

if(sam.isTouching(car1)||
   sam.isTouching(car2)||
   sam.isTouching(car3)||
   sam.isTouching(car4))
   {
     sam.y=190;
     sam.x=20
     life+=1
   }
  
  
  
 drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};