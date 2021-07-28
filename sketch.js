var canvas;
var block1,block2,block3,block4;
var ball, edges;
//var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "darkorange";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "lightgreen";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "black";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "lightblue";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=8;
    ball.velocityY=8;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "darkorange";
       // music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "lightgreen";
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "black";
       
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "lightblue";
    }
    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
