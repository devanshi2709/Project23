var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1,partBody1;
var part2,partBody2;
var part3,partBody3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	part1= createSprite(400,600,20,100);
	part1.shapeColor="red";
	part2= createSprite(220,220,200,20);
	part2.shapeColor="red";
	part3= createSprite(220,600,20,100);
	part3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;


	/*part1= new part(200,210,10,10);
	part2= new part(240,210,20,20);
	part3= new part(260,200,10,20);*/

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	partBody1= Bodies.rectangle(490,10,20,100,{isStatic:true});
	World.add(world,partBody1);
	partBody2= Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,partBody2);
	partBody3= Bodies.rectangle(310,640,20,100,{isStatic:true});
	World.add(world,partBody3);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  part1.x= partBody1.position.x;
  part2.y= partBody2.position.y;

  part2.x= partBody2.position.x;
  part2.y= partBody2.position.y;

  part3.x= partBody3.position.x;
  part2.y= partBody2.position.y;

  /*part1.display();
  part2.display();
  part3.display();*/

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(( packageBody) , false);
  }
}



