class App {
    constructor(){}
    
    
  
    start(){
      if(gameState === 0){
       
        form = new Form()
        form.display();
      }
    }
    yoga(){
      var title1 = createElement('h2')
      title1.html('YOGA')
      title1.position(displayWidth-1200,100)
      image(yogaImg,displayWidth-1330,150,320,300)
      var buttton1 = createButton('START')
      buttton1.position(displayWidth-1200,470)
      buttton1.mousePressed(()=>{
        gameState=2
        removeElements();
      })
}
yogaKids(){
  var title2 = createElement('h1')
  title2.html('YOGA FOR KIDS')
  title2.position(displayWidth-1000,150)
  image(ykImg,displayWidth-1050,220,320,300)
  var buttton1 = createButton('START')
  buttton1.position(displayWidth-900,530)
  buttton1.mousePressed(()=>{
    gameState=3
    removeElements();
  })
}
yogaAdults(){
  var title = createElement('h1')
  title.html('YOGA FOR ADULTS')
  title.position(displayWidth-500,150)
  image(ykA,displayWidth-500,220,320,300)
  var buttton1 = createButton('START')
  buttton1.position(displayWidth-350,530)
  buttton1.mousePressed(()=>{
    gameState=4
    removeElements();
  })
}
   yoga1() {
    var title2 = createElement('h2')
    title2.html('1. BUTTERFLY POSE')
    title2.position(displayWidth-1300,30)
    image(yg1,displayWidth-1370,50,320,300)
    var buttton1 = createButton('STEPS')
  buttton1.position(displayWidth-1250,350)
  buttton1.mousePressed(()=>{
    yg1S.play();
  })
  //benifits
  var title3 = createElement('h3')
  title3.html('Benifits- Flexbilty and Weight Loss')
  title3.position(displayWidth-1150,150)
  //cobra
  var title4 = createElement('h2')
  title4.html('2. COBRA POSE')
  title4.position(displayWidth-800,30)
  image(yg2,displayWidth-850,70,320,300)
  var buttton3 = createButton('STEPS')
buttton3.position(displayWidth-730,370)
buttton3.mousePressed(()=>{
  yg2S.play();
   })
   var title5 = createElement("h3")
  title5.html("Benifits- Strengthens the Spine")
  title5.position(displayWidth-730,150)
  //treePose
  var title6 = createElement('h2')
  title6.html('3. TREE POSE')
  title6.position(displayWidth-400,30)
  image(yg3,displayWidth-450,70,320,300)
  var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-320,370)
buttton5.mousePressed(()=>{
  yg3S.play();
   })
   var title7 = createElement("h3")
  title7.html("Benifits- Strengthens the Spine")
  title7.position(displayWidth-270,150)
  //lotusPose
  var title8 = createElement('h2')
  title8.html("5. LOTUS POSE")
  title8.position(displayWidth-530,350)
  image(yg4,displayWidth-620,370,320,300)
  var buttton8 = createButton('STEPS')
buttton8.position(displayWidth-490,610)
buttton8.mousePressed(()=>{
  yg4S.play();
   })
   var title9 = createElement("h3")
   title9.html("Benifits- Calms the brains and opens the hips")
   title9.position(displayWidth-420,450)
   //sitting pose
   var title10 = createElement('h2')
   title10.html("4. SITING POSE")
   title10.position(displayWidth-1120,350)
   image(yg5,displayWidth-1200,370,320,300)
   var buttton9 = createButton('STEPS')
buttton9.position(displayWidth-1065,650)
buttton8.mousePressed(()=>{
  yg5S.play();
   })
   var title11= createElement("h3")
   title11.html("Benifits- Reduces back pain and increase energy levels")
   title11.position(displayWidth-990,450)
  }
  yoga2(){
    var title = createElement('h1');
    title.html("1. MOUNTAIN POSE")
    title.position(displayWidth-1300,30)
    image(mountP,displayWidth-1300,50,390,300)
  var  button = createButton('STEPS')
    button.position(displayWidth-1140,340)
    button.mousePressed(()=>{
      mountPS.play();
    })
    var title3 = createElement('h3')
    title3.html("Benifits- Improves good posture")
    title3.position(displayWidth-1080,150)
     var title2= createElement('h1')
     title2.html("2. HERO POSE")
     title2.position(displayWidth-800,30)
     image(heroP,displayWidth-850,60,320,300)
     var button2 = createButton('STEPS')
     button2.position(displayWidth-720,340)
     button2.mousePressed(()=>{
       heroPS.play();
     })
     var title8 = createElement('h3')
     title8.html("Benifits- Flexibility in hips and knees")
     title8.position(displayWidth-630,120)
     var title6 = createElement('h1')
  title6.html('3. TREE POSE')
  title6.position(displayWidth-400,30)
  image(yg3,displayWidth-450,70,320,300)
  var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-320,370)
buttton5.mousePressed(()=>{
  yg3S.play();
   })
   var title7 = createElement("h3")
  title7.html("Benifits- Strengthens the Spine")
  title7.position(displayWidth-270,150)
  //triPose
  var title0 = createElement('h1')
title0.html('4. TRIANGLE POSE')
title0.position(displayWidth-1000,350)
image(triP,displayWidth-1050,350,320,300)
var buttton5 = createButton('STEPS')
buttton5.position(displayWidth-900,650)
buttton5.mousePressed(()=>{
triPS.play();
})
title = createElement('h3')
title.html("Benifits- Increases stability and balance")
title.position(displayWidth-1300,500)
//child pose
var title1 = createElement('h1')
title1.html("5. CHILD'S POSE")
title1.position(displayWidth-500,400)
image(cP,displayWidth-550,380,320,300)
var button6 = createButton('STEPS')
button6.position(displayWidth-400,650)
button6.mousePressed(()=>{
  cPS.play();
})
title2 = createElement('h3')
title2.html("Benifts- Relieves Stress")
title2.position(1150,520)
    }
 }
