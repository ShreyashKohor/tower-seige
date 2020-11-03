const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,380,800,20)
  ground2 = new Ground(500,362.5,150,15)
  //floor1
  block1 = new Block(440,335,20,40)
  block2 = new Block(460,335,20,40)
  block3 = new Block(480,335,20,40)
  block4 = new Block(500,335,20,40)
  block5 = new Block(520,335,20,40)
  block6 = new Block(540,335,20,40)
  block7 = new Block(560,335,20,40)
  //floor 2
  block8 = new Block(450,295,20,40)
  block9 = new Block(470,295,20,40)
  block10 = new Block(490,295,20,40)
  block11 = new Block(510,295,20,40)
  block12 = new Block(530,295,20,40)
  block13 = new Block(550,295,20,40)
  //floor3
  block14 = new Block(460,255,20,40)
  block15 = new Block(480,255,20,40)
  block16 = new Block(500,255,20,40)
  block17 = new Block(520,255,20,40)
  block18 = new Block(540,255,20,40) 
  //floor4
  block19 = new Block(470,215,20,40)
  block20 = new Block(490,215,20,40)
  block21 = new Block(510,215,20,40)
  block22 = new Block(530,215,20,40)
  //floor5
  block23 = new Block(480,175,20,40)
  block24 = new Block(500,175,20,40)
  block25 = new Block(520,175,20,40)
  //floor6
  block26 = new Block(490,135,20,40)
  block27 = new Block(510,135,20,40)
  //floor7
  block28 = new Block(500,95,20,40)
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground1.display()
  ground2.display()
  //floor1
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  //floor2
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  //floor3 
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  //floor4
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  //floor5
  block23.display()
  block24.display()
  block25.display()
  //floor6
  block26.display()
  block27.display()
  //floor7
  block28.display()
}