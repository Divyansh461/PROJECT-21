var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  
 thickness = random(22,83);

 speed = random(20,30);
 weight = random(400,1500);

 bullet = createSprite(50,200,20,20);
 bullet.velocityX = speed;
 bullet.shapeColor = color("white");
 
 wall  = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
}

function draw() {
  background(25);  

  wall.depth = bullet.depth;
 

  if(hasCollided(bullet,wall))  {

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage < 10) {
      bullet.shapeColor = color(0,255,0); 
    }

    if(damage > 10) {
      bullet.shapeColor = color(255,0,0);
    }    


  }
 
  drawSprites();
}


function hasCollided(bullet,wall) {

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge) 
{
  return true;
}

return false;

}

