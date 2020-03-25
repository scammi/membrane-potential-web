
var Ko = 4;
var Ki = 120;
var No = 145;
var Ni = 15;
var alfa = .05;
var vm = [];
var play = false ;
var globalID;

// setInterval(function() {
//   vm.push(update());
// }, 1000/120);


function update() {
  return (61.5 * Math.log10((Ko + (alfa * No)) / (Ki + (alfa *Ni))));
}

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  vm.push(update());
  stroke(255);
  console.log(vm)
  for(var i = 0; 1< vm.lenght; i++){
    var y = map(vm[i],0,1,height,0);
    point(i,y);
  }
}
