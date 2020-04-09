  var Ko;
  var Ki = 120;
  var No;
  var Ni = 15;
  var alfa = .05;
  var vm = [];

  function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    let graph = createCanvas((windowWidth * .4), (windowHeight * .4));
    graph.mouseClicked(actionPotential);

    graph.parent('#chart');
  }

  function draw() {
    ion_update();
    vm.push(vm_update());

    translate(0, 130);
    $('#vm-display').html((vm[vm.length - 1]).toFixed(2));

    background(240);
    noFill();

    beginShape();
    stroke(0);
    for(var i = 0; i < width; i++){
      vertex( i, vm[i]);
    }

    endShape();

    if (vm.length > width){
      vm.splice(0,1);
    }

    drawGrid();
    fill(0);
  }

  function vm_update() {
    return (61.5 * Math.log10((Ko + (alfa * No)) / (Ki + (alfa *Ni))));
  }

  function ion_update(){
    Ko = $('#ko-ranger').val();
    $('#ko-val').html(Ko);

    No = $('#no-ranger').val();
    $('#no-val').html(No);
  }

  function actionPotential(){
    if (alfa < 0.9) {
      for (x = 0.01; x < 4; x = x + 0.001){
        alfa = 1 / (1 + Math.exp(-x));
      }
    }
    else {
      alfa = 0.05;
    }
  }

  //Draws graph background
  function drawGrid() {
  	stroke(200);
  	fill(120);
  	for (var x=-width; x < width; x+=40) {
  		line(x+1, -height, x, height);
  		//text(x, x+1, 12);
  	}
  	for (var y=-height; y < height; y+=40) {
  		line(-width, y, width, y);
  		text((y).toFixed(0), 1, y+12);
  	}
  }
