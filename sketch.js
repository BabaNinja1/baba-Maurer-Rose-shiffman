let n = 4;
let d = 31;
let dSlider;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  //dSlider = createSlider(1,180,1)
  
}

function draw() {
  background(0);
  translate(width/2,height/2);
  stroke(0, 0, 225);
 // d = dSlider.value();
  
  noFill();
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < 361; i++){
    
    
    let k = i*d;
    let r = 150 * sin(n*k);
    let x = r*cos(k);
    let y = r*sin(k);
    vertex(x,y);
  } 
  endShape();
  
  
  noFill();
  stroke(178,34,34);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 361; i++){
    
    
    let k = i;
    let r = 150 * sin(n*k);
    let x = r*cos(k);
    let y = r*sin(k);
    vertex(x,y);
  } 
  endShape();
 
}