const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof, roofSprite;
var rope1, rope2, rope3, rope4;
var ball1, ball2, ball3, ball4;
// var blSp1;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ellipseMode(RADIUS);

	roofSprite = createSprite(425, 200, 200, 10, {isStatic: true});
	roof = Bodies.rectangle(352, 200, 400, 10, {isStatic: true});
	World.add(world, roof);

	roof1 = Bodies.rectangle(401, 200, 400, 10, {isStatic: true});
	World.add(world, roof1);

	roof2 = Bodies.rectangle(450, 200, 400, 10, {isStatic: true});
	World.add(world, roof2);
	
	roof3 = Bodies.rectangle(499, 200, 400, 10, {isStatic: true});
	World.add(world, roof3);

	ball1 = Bodies.circle(100, 400, 25, 25);
	World.add(world, ball1);

	ball2 = Bodies.circle(300, 400, 25, 25);
	World.add(world, ball2);

	ball3 = Bodies.circle(500, 400, 25, 25);
	World.add(world, ball3);

	ball4 = Bodies.circle(700, 400, 25, 25);
	World.add(world, ball4);

	rope1 = new rope(roof, ball1, 0, 0);
	rope2 = new rope(roof1, ball2, 0, 0);
	rope3 = new rope(roof2, ball3, 0, 0);
	rope4 = new rope(roof3, ball4, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(200, 200, 200);
  
  ellipse(ball1.position.x, ball1.position.y, 50,50);
  ellipse(ball2.position.x, ball2.position.y, 50,50);
  ellipse(ball3.position.x, ball3.position.y, 50,50);
  ellipse(ball4.position.x, ball4.position.y, 50,50);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball1, ball1.position, {x: -0.05 ,y: -0.02});
	}
}