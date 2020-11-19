
var bullet,wall;
var thickness;
var speed, weight; 


function setup() {
  createCanvas(1350, 400);
	thickness=random(22,83);
 	speed=random(223,321);
	weight=random(30,52);

	bullet=createSprite(50, 200, 50,18);   
	bullet.velocityX = speed;
	bullet.shapeColor=color("grey");

	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
if(hasCollided(bullet,wall))
{
	bullet.velocityX=0;
	var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		textSize(30);
		fill("cyan");
		text("This wall is not reliable",500,200);
	}

 if (damage<10)
 {
	textSize(30);
	fill("yellow");
	text("You can rely on this wall",500,200);
	 wall.shapeColor=color(0,255,0);
 }

}
  
  
  drawSprites();
 
}

function hasCollided(lbullet,lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
