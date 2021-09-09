var form;
var app;
var bgImg
var gameState=4

function preload(){
  bgImg = loadImage("bg.png")
  yogaImg = loadImage("yoga.jpg")
  ykImg = loadImage("Yk.png")
  yg1 = loadImage("butterflyP.png") 
  yg2 = loadImage("cobra.png")
  yg1S = loadSound("butterP.mp3")
  yg2S = loadSound("cobP.mp3")
  bg2 = loadImage("bg2.png")
  bg3 = loadImage("bg3.png")
  bg4 = loadImage("bg4.png")
  yg3 = loadImage("treePose.png")
  yg3S = loadSound("treeP.mp3")
  yg4 = loadImage("lotusPose.png")
  yg4S = loadSound("lotP.mp3")
  yg5 = loadImage("sittingPose.png")
  yg5S = loadSound("sitP.mp3")
  ykA = loadImage("ygA.png")
  mountP = loadImage("mP.png")
  mountPS = loadSound("mountainp.mp3")
  heroP = loadImage("heroP.png")
  heroPS = loadSound("heroS.mp3")
  triP = loadImage("yga1.png")
  triPS = loadSound("TriP.mp3")
  cP = loadImage("chidlP.png")
  cPS = loadSound("childS.mp3")
  title = loadImage("title.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  app = new App();
  //game.getState();
  app.start();
}


function draw(){
  if(gameState===1){
    background(bg2);
     app.yoga();
     app.yog
  }
 if(gameState===2){
    
   background(bg3);
 app.yogaKids();
 app.yogaAdults();
 }
 if (gameState===3){
   background(bg4)
   app.yoga1();
 }
 if (gameState===4){
   background(bg4)
   app.yoga2();
 }
}
