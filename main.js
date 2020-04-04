  var Ko = 4;
  var Ki = 120;
  var No = 145;
  var Ni = 15;
  var alfa = .5;
  var vm = [];

  // setInterval(function() {
  //   vm.push(vm_update());
  // }, 1000/120);
  function vm_update() {
    return (61.5 * Math.log10((Ko + (alfa * No)) / (Ki + (alfa *Ni))));
  }

  function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    let graph = createCanvas((windowWidth * .8), (windowHeight * .3));
    graph.parent('#chart');
  }

  function draw() {
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

    ion_update();
  }

  function ion_update(){
    Ko = $('#ko-ranger').val();
    $('#ko-val').html(Ko);

    Ki = $('#ki-ranger').val();
    $('#ki-val').html(Ki);

    No = $('#no-ranger').val();
    $('#no-val').html(No);

    Ni = $('#ni-ranger').val()
    $('#ni-val').html(Ni);
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

  // function resize_canvas(){
  //   canvas = document.getElementById("canvas");
  //   if (canvas.width  < window.innerWidth)
  //   {
  //       canvas.width  = window.innerWidth;
  //   }
  //
  //   if (canvas.height < window.innerHeight)
  //   {
  //       canvas.height = window.innerHeight;
  //   }
  // }
