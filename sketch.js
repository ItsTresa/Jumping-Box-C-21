var canvas;
var music;
var surface1 , surface2 , surface3 , surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(60,600,120,50);
   surface2=createSprite(240,600,120,50);
   surface3=createSprite(400,600,120,50);
   surface4=createSprite(560,600,120,50);
   
   surface1.shapeColor="lightblue";
   surface2.shapeColor="lightpink";
   surface3.shapeColor="lightgreen";
   surface4.shapeColor="yellow";

    //create box sprite and give velocity
   box=createSprite(random(20,750),10,20,20);
   box.velocityY=4;
   box.velocityX=4;
   box.shapeColor="white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    edges=createEdgeSprites();

    box.bounceOff(edges);



    if(box.isTouching(surface1) && box.bounceOff(surface1))
    {
        box.shapeColor="lightblue";
        music.play();
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2))
    {
        box.shapeColor="lightpink";
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3))
    {
        box.shapeColor="lightgreen";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if(box.isTouching(surface4) && box.bounceOff(surface4))
    {
        box.shapeColor="yellow";
    }

    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
