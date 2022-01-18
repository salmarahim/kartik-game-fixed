var Adam,Chrono,Jota,Kartik,Shafer

var Kelly,Ellina

var AWM,Deagle,Buster

var Player

var levelUp,levelImg

var bulletR,bulletRImg,bulletL,bulletLImg

var bg,bgImg,wall,wallImg

function preload(){
Adam =loadImage("Adam.png")
Chrono =loadImage("Chrono.png")
Jota=loadImage("Jota.png")
Kartik =loadImage("Kartik.png")
Shafer =loadImage("Shafer.png")

Kelly =loadImage("Kelly.png")
Ellina =loadImage("Ellina.png")

AWM =loadImage("Sks.png")
Deagle =loadImage("Deagle.png")
Buster =loadImage("Buster.png")

levelImg =loadImage("levelUp.png")

bulletRImg =loadImage("bulletRight.png")
bulletLImg =loadImage("bulletLeft.png")

bgImg =loadImage("bg.jpeg")

wallImg =loadImage("wall.jpeg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  Player =createSprite(400, 200, 50, 50);
Player.addImage("adam",Adam)
Player.addImage("Chrono",Chrono)
Player.addImage("Jota",Jota)
Player.addImage("Kartik",Kartik)

Player.scale =0.7

levelUp =createSprite()
levelUp.addImage("levelImg",levelImg)
levelUp.visible =false;

bulletR =createSprite();
bulletL =createSprite();
bulletR.visible =false
bulletL.visible =false
bulletR.addImage("bulletRImg",bulletRImg)
bulletL.addImage("bulletLImg",bulletLImg)

bg =createSprite(width/2,height/2)
bg.addImage("bgImg",bgImg)
bg.scale =4

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown(UP_ARROW)){
   Player.y =Player.y -2
  }
  if(keyDown(DOWN_ARROW)){
    Player.y =Player.y +2
   }
 
   if(keyDown(LEFT_ARROW)){
    Player.x =Player.x -2
   }
 
   if(keyDown(RIGHT_ARROW)){
    Player.x =Player.x +2
   }
 

}