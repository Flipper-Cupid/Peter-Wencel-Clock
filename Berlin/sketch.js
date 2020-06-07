// Made by Flipper Cupid
let hr = 0;
let mn = 0;
let sec = 0;

var datetime;

// Any work of copy is prohibited
//////////////////////////Do not copy these lines of code
const canvasSize = 250;
 function preload(){
  berlin();
  
}
function drawClock() {
  noFill();

  // Seconds display
  strokeWeight(8);
  stroke(255, 0, 0);
  let secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, canvasSize*19/20, canvasSize*19/20, 0, secAngle);
  push();
  strokeWeight(4);
  rotate(secAngle);
  line(0, 0, canvasSize/3, 0);
  pop();
  
  // Minute display  
  strokeWeight(8);
  stroke(0, 100, 255);
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, canvasSize*17/20, canvasSize*17/20, 0, minAngle);
  push();
  strokeWeight(4);
  rotate(minAngle);
  line(0, 0, canvasSize/4, 0);
  pop();
  
  // Hours display
  strokeWeight(8);
  stroke(0, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, canvasSize*15/20, canvasSize*15/20, 0, hourAngle);
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, canvasSize/5, 0);
  pop();
  
  push();
  stroke(200);
  point(0, 0);
  pop();
}

async function setup() {
  canvas = createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);

  //Setting up Global Timeline
  
text("hr", 500,500);



///////////////////////////////////////////////Please buy this code suitably
//Serious allegations maybe applied if above laws are violated


}



 async function draw() {
  background(50);
setup();
berlin();

 hr = datetime.slice(11,13);
mn = datetime.slice(14,16);
sec =  datetime.slice(17,19);

console.log(hr);
console.log(mn);

fill("green");

translate(canvasSize/2, canvasSize/2);
rotate(-90);

drawClock();

}

async function berlin(){
 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/berlin");
 

  var responseJSON = await response.json();
  
  datetime = responseJSON.datetime;
   hr = datetime.slice(11,13);
   mn = datetime.slice(14,16);
   sec = datetime.slice(17,19);
  /* 
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }  */
  
  console.log(datetime);
}

function home(){
  window.location.replace("Peter Wancel-2/index.html");
}
function londonpath(){
  window.location.replace("London/index.html");
}
/////////////Buy a fresh copy.
