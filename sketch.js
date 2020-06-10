


function preload(){
  bgImg = loadImage('images/bg.png');
  hurdlesImg = loadImage('images/hurdles.png');
}


function setup(){
  var canvas = createCanvas(window.innerWidth,window.innerHeight);
  

} 



function draw() {
  background(bgImg); 

  for(var i = 200; i<=1100; i+=200){
    p1_hurdles = image(hurdlesImg,i,560,70,65);
  }

  for(var i = 200; i<=1100; i+=200){
    p2_hurdles = image(hurdlesImg,i,510,60,55);
  }


  for(var i = 200; i<=1100; i+=200){
    p2_hurdles = image(hurdlesImg,i,460,50,45);
  }

  for(var i = 200; i<=1100; i+=200){
    p2_hurdles = image(hurdlesImg,i,420,40,35);
  }

}