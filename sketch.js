const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone1, stone2, stone3,stone4;
var ironman,venom,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ironman = new Ironman(400,800,250);

  rope = new Rope(ironman.body, { x: 500, y: 50 });
  venom = new Venom(1100,550,300);

  stone1 = new Stone(900, 100, 70, 70);
  stone2 = new Stone(900, 100, 70, 70);
  stone3 = new Stone(900, 100, 70, 70);
  stone4 = new Stone(900, 100, 70, 70);
  stone5 = new Stone(900, 100, 70, 70);
  stone6 = new Stone(900, 100, 70, 70);
  stone7 = new Stone(900, 100, 70, 70);
  stone8 = new Stone(900, 100, 70, 70);
  stone9 = new Stone(900, 100, 70, 70);
  stone10 = new Stone(800, 100, 70, 70);
  stone11 = new Stone(800, 100, 70, 70);
  stone12 = new Stone(800, 100, 70, 70);
  stone13 = new Stone(800, 100, 70, 70);
  stone14 = new Stone(800, 100, 70, 70);
  stone15 = new Stone(800, 100, 70, 70);
  stone16 = new Stone(800, 100, 70, 70);


}

function draw() {
  background(bg);

  Engine.update(engine);
  
  ground.display();
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display()
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display()
  stone9.display();
  stone10.display();
  stone11.display();
  stone12.display()
  stone13.display();
  stone14.display();
  stone15.display();
  stone16.display()

  ironman.display();
  rope.display();
  venom.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ironman.body, {x: mouseX , y: mouseY});
}



