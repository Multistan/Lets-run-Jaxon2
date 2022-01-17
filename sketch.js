var track, trackImage
var boy, boyImage

var invisiblebarrier1
var invisiblebarrier2

var edges


function preload(){
  //pre-load images
trackImage = loadImage("path.png");
boyImage = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,0,400,400);
  track.addImage("track", trackImage);
track.velocityY=-4;
track.scale=1.5;

boy = createSprite(200,320,20,20)
boy.addAnimation("boy",boyImage)
boy.velocityY=0
boy.scale=0.07

invisiblebarrier1 = createSprite(300,200,40,400)
invisiblebarrier1.visible=false

invisiblebarrier2 = createSprite(100,200,40,400)
invisiblebarrier2.visible=false
}






function draw() {
  background("gray");
  
  boy.x = World.mouseX;
edges = createEdgeSprites();
boy.collide(edges[2])
boy.collide(edges[3])


  drawSprites()

if(boy.isTouching(invisiblebarrier1)||boy.isTouching(invisiblebarrier2)){
  boy.x=200
  boy.y=200
}

  

  
  if (track.y < 0){
    track.y = track.height/2;



 
 
 
 
 

}
}
