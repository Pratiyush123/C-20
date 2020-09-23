var mr,fr;

function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 80);
  fr.shapeColor = "red";
  fr.debug = true;
  mr = createSprite(100,200,80,30);
  mr.shapeColor = "red";
  mr.debug = true;
}

function draw() {
  background(255,255,255);
  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x-fr.x < fr.width/2 + mr.width/2 
    && fr.x - mr.x < fr.width/2 + mr.width/2 
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2) {
      mr.shapeColor = "blue";
      fr.shapeColor = "blue";
    
  } else {
      mr.shapeColor = "red";
      fr.shapeColor = "red"; 
  }
  
  drawSprites();
}