var fixedRect, movingRect;
var gameObject1, gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1=createSprite(200,100,50,50);
  gameObject2=createSprite(500,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject1.velocityX=2;
  gameObject2.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  bounceOff(gameObject1,gameObject2);
  drawSprites();
}
function isTouching(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2
    &&object2.y-object1.y<object1.height/2+object2.height/2&&object1.y-object2.y<object1.height/2+object2.height/2){
    return true;
  }
  else{  
    return false;
  }
}
function bounceOff(object1, object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
  &&object2.x-object1.x<object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
  if(object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
  }
}




