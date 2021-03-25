
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, Dustbin1, Dustbin2, Dustbin3, paper, dustbinIMG, DustbinMAIN ;

function preload (){

dustbinIMG = loadImage ("./dustbin.png") ;
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600,700,1200,20)
	Dustbin1= new Dustbin(600,680,210,20);
	Dustbin2=new Dustbin(500,615,20,150);
    Dustbin3=new Dustbin(700,615,20,150);

   
	paper= new Paper (100,600,70);
 
	DustbinMAIN = createSprite (600, 615, 150,150);
	DustbinMAIN.addImage (dustbinIMG) ;


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("cyan");

  
  
  drawSprites();
 paper.display();
 ground.display();
 Dustbin1.display();
 Dustbin2.display();
 Dustbin3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-300});

	}



}

