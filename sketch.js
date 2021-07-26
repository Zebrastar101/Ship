var ship,ship_moving, edges;
var sea_image,sea,invisible_sea;

function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");
}

function setup(){
  createCanvas(800,600);
  //create sea
sea=createSprite(400,300,800,600);
sea.addImage(sea_image);
sea.scale=0.4


  //create ship
ship=createSprite(400,500,80,60);
ship.addAnimation("moving",ship_moving);
ship.scale=0.2 ;
edges=createEdgeSprites();


//invisible sea
invisible_sea=createSprite(400,500,800,10);
invisible_sea.visible=false;
}

function draw() {
  //set background color 
  background("white");
  
  //logging the y position of the sea
  console.log(ship.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -4;
   
  }
  
  ship.velocityY = ship.velocityY + 0.5;

  if(sea.x<0){
    sea.x=sea.width/2;
  }
  
  //stop ship from falling down
  ship.collide(invisible_sea);

  drawSprites();
}