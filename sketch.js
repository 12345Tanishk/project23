const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
//Create multiple bobs, mulitple ropes varibale here
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
function setup() {
	createCanvas(800,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true
	

	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var ball_options={
		restitution: 0.95,
	}
    ball1 = Bodies.circle(300,400,20,ball_options);
	ball2 = Bodies.circle(350,400,20,ball_options);
	ball3 = Bodies.circle(400,400,20,ball_options);
	ball4 = Bodies.circle(450,400,20,ball_options);
	ball5 = Bodies.circle(500,400,20,ball_options);
	World.add(world,ball1);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);
	rope1 = new rope(ball1,roof,300,0);
	rope2 = new rope(ball2,roof,350,0);
	rope3 = new rope(ball3,roof,400,0);
	rope4 = new rope(ball4,roof,450,0);
	rope5 = new rope(ball5,roof,500,0);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
