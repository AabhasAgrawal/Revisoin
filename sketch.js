const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1,box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-50);
    engine = Engine.create();
    world = engine.world;

 

    ground = new Ground(displayWidth/2,390,displayWidth,20);

  box1=new Box(200,100,50,50);
  box2=new Box(220,10,50,100);

}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}

function keyPressed(){

if(keyCode===37){}
Matter.Body.setPosition(box2.body,{x:32,y:37})
}