const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world;
var sling1,pendulum1;


function setup(){
   canvas= createCanvas(windowWidth/2,windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    let canvasmouse= Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse: canvasmouse
    }
    mConstraint= MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
}
function draw(){
    background("white");
    Engine.update(engine);
    pendulum1=new Pendulum(200,200,50,50);
    pendulum2=new Pendulum(220,200,50,50);
    pendulum3=new Pendulum(240,200,50,50);
    pendulum4=new Pendulum(260,200,50,50);
    pendulum5=new Pendulum(280,200,50,50);

    sling1=new Sling(200,80,50,50);
    sling2=new Sling(220,80,50,50);
    sling3=new Sling(240,80,50,50);
    sling4=new Sling(260,80,50,50);
    sling5=new Sling(280,80,50,50);
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum2.body,{x:mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum3.body,{x:mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum4.body,{x:mouseX, y:mouseY});
    Matter.Body.setPosition(pendulum5.body,{x:mouseX, y:mouseY});
}