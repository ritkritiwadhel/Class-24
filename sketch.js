
const World = Matter.World;//to create physical world and add objects to it
const Engine = Matter.Engine;//used to create physics engine
const Bodies = Matter.Bodies;//to create physcial objects in the world

var engine,world;
var box1;
var box2;
var ground;
var pig;
var log;
var pig2;
var log2;
var box3;
var box4;
var log3;
var log4;
var box5;
var bird;

function setup() {
  createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 box1 = new Box(700,320,70,70);
box2 = new Box (920,320,70,70);
ground = new Ground (600,height,1200,20);
pig = new Pig (810,350)
pig2 = new Pig (810,220)
log2 = new Log (810,180,300,PI/2)
log = new Log (810,260,300,PI/2)
box3 = new Box (700,240,70,70)
box4 = new Box (920,240,70,70)
log3 = new Log (760,120,150,PI/7)
log4 = new Log (870,120,150,-PI/7)
box5= new Box (810,160,70,70)
bird= new Bird (100,100)
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground.display();
  pig.display();
  log.display();
  log2.display();
  pig2.display();
  box3.display();
  box4.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}

