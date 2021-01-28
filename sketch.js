const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup(){
    createCanvas(800,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,590,800,20);
    stand = new Ground(250,460,180,12);

    block1 = new Box(262,258,16,26);
}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    stand.display();
    block1.display();
}
