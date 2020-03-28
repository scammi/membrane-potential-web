
var Ko = 4;
var Ki = 120;
var No = 145;
var Ni = 15;
var alfa = .05;
var vm = [];
var play = false ;
var globalID;

// setInterval(function() {
//   vm.push(vm_update());
// }, 1000/120);

function vm_update() {
  return (61.5 * Math.log10((Ko + (alfa * No)) / (Ki + (alfa *Ni))));
}

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  // Set the background to black and turn off the fill color
  vm.push(vm_update());

  background(0);
  noFill();

  beginShape();

  stroke(255);
  for(var i = 0; i < width; i++){
    vertex( i, -1*vm[i])
  }

  endShape();

  if (vm.length > width){
    vm.splice(0,1);
  }
}

$('button').on('click', function(){
  Ko = Ko +3;
  console.log('a')
})
