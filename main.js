
  var Ko;
  var No;
  var Ki = 120;
  var Ni = 15;
  var alfa = 0.05;
  var vm = [];

  function setup() {
    let graph = createCanvas(($('#chart').width()), (windowHeight * .4));
    graph.mouseClicked(actionPotential);

    graph.parent('#chart');
  }

  function draw() {
    ion_update();
    vm.push( -1* (vm_update()));

    //Tranlates graph down allowing to view negative numbers
    translate(0, 170);

    background(240);
    noFill();

    beginShape();
    stroke(0);
    for(var i = 0; i < width; i++){
      vertex( i, vm[i]);
    }

    endShape();

    //removes the last item in the vm array, gives the sentation of passing time.
    if (vm.length > width){
      vm.splice(0,1);
    }

    drawGrid();
    fill(0);

    //Display vm on chart header
    $('#vm-display').html(-1*(vm[vm.length - 1]).toFixed(2));

  }

  function vm_update() {
    return 61.5 * Math.log10((parseInt(Ko) + alfa * parseInt(No, 10)) / (Ki + alfa * Ni));
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
  		line(x, -height, x, height);
  	}
  	for (var y=-height; y < height; y+=40) {
  		line(-width, y, width, y);

      //*-1 inverts the y corditanes on p5 graph
  		text((-y).toFixed(0), 1, y);
  	}
  }
