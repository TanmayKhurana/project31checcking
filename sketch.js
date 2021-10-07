const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;


function setup() {
  createCanvas(900,1000);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 975, 1000, 30)

  division1 = new Division(5, 810, 10, 300)
  division2 = new Division(100, 810, 10, 300)
  division3 = new Division(200, 810, 10, 300)
  division4 = new Division(300, 810, 10, 300)
  division5 = new Division(400, 810, 10, 300)
  division6 = new Division(500, 810, 10, 300)
  division7 = new Division(600, 810, 10, 300)
  division8 = new Division(700, 810, 10, 300)
  division9 = new Division(800, 810, 10, 300)
  division10 = new Division(900, 810, 10, 300)

  p1top = new Plinko(50, 100, 15)
  p2top = new Plinko(150, 100, 15)
  p3top = new Plinko(250, 100, 15)
  p4top = new Plinko(350, 100, 15)
  p5top = new Plinko(450, 100, 15)
  p6top = new Plinko(550, 100, 15)
  p7top = new Plinko(650, 100, 15)
  p8top = new Plinko(750, 100, 15)
  p9top = new Plinko(850, 100, 15)

  p1mid = new Plinko(10, 200, 15)
  p2mid = new Plinko(110, 200, 15)
  p3mid = new Plinko(210, 200, 15)
  p4mid = new Plinko(310, 200, 15)
  p5mid = new Plinko(410, 200, 15)
  p6mid = new Plinko(510, 200, 15)
  p7mid = new Plinko(610, 200, 15)
  p8mid = new Plinko(710, 200, 15)
  p9mid = new Plinko(810, 200, 15)
  p10mid = new Plinko(910, 200, 15)

  p1mid2 = new Plinko(50, 300, 15)
  p2mid2 = new Plinko(150, 300, 15)
  p3mid2 = new Plinko(250, 300, 15)
  p4mid2 = new Plinko(350, 300, 15)
  p5mid2 = new Plinko(450, 300, 15)
  p6mid2 = new Plinko(550, 300, 15)
  p7mid2 = new Plinko(650, 300, 15)
  p8mid2 = new Plinko(750, 300, 15)

  p1btm = new Plinko(10, 400, 15)
  p2btm = new Plinko(110, 400, 15)
  p3btm = new Plinko(210, 400, 15)
  p4btm = new Plinko(310, 400, 15)
  p5btm = new Plinko(410, 400, 15)
  p6btm = new Plinko(510, 400, 15)
  p7btm = new Plinko(610, 400, 15)
  p8btm = new Plinko(710, 400, 15)
  p9btm = new Plinko(810, 400, 15)
  p10btm = new Plinko(910, 400, 15)

  particle = new Particle(random(width/2-10, width/2+10), 10, 10)

}

function draw() {
  background("black");

  ground.display()

  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  division8.display()
  division9.display()
  division10.display()

  p1top.display()
  p2top.display()
  p3top.display()
  p4top.display()
  p5top.display()
  p6top.display()
  p7top.display()
  p8top.display()

  p1mid.display()  
  p2mid.display()  
  p3mid.display()  
  p4mid.display()  
  p5mid.display()  
  p6mid.display()  
  p7mid.display()  
  p8mid.display()  
  p9mid.display()  
  p10mid.display()

  p1mid2.display()
  p2mid2.display()
  p3mid2.display()
  p4mid2.display()
  p5mid2.display()
  p6mid2.display()
  p7mid2.display()
  p8mid2.display()

  p1btm.display()
  p2btm.display()
  p3btm.display()
  p4btm.display()
  p5btm.display()
  p6btm.display()
  p7btm.display()
  p8btm.display()
  p9btm.display()
  p10btm.display()

  if(frameCount%10===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for (var h = 0;h<particles.length;h++) {
    particles[h].display()
  }
 

  Engine.update(engine);
  drawSprites();
 
}

 