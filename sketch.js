const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;

var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
block1=new Block()
   

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    
}
