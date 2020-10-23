var bullet,wall;

var speed,weight,thickness;

var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  speed=random(30,52);
  weight=random(223,321);

  bullet = createSprite(50, 200, 30, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
}

function draw() {
  background(0);
  
  bullet.collide(wall);

  
  wall.depth=bullet.depth;
  bullet.depth+=1;

  if(hasCollided(bullet,wall)){
   if(bullet.x-wall.x<(bullet.width+wall.width)/2&&
   wall.x-bullet.x<(bullet.width+wall.width/2)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage)
 
    if(damage<10){
     wall.shapeColor=color(0,255,0);
    }
 
    if(damage>10){
     wall.shapeColor=color(255,0,0);
    }
   }
    
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lwall.x;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  return false;
  
  }

}