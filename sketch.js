const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var  player
var Base
var compBase



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player = new Player(150, 350, 160, 310);
   Base = new PlayerBase(150,640,200,310)
   compBase = new ComputerBase(1750,640,200,310)

   
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


   //Display Playerbase and computer base 
player.display()
Base.display()
compBase.display()

   //display Player and computerplayer

   


}
