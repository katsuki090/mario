function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('juego');
	instializeInSetup(mario);
	camara = createCapture(VIDEO);
	camara.size(800, 400);
	camara.parent('camara');
	jju= ml5.poseNet(camara, ol);
  	jju.on('pose',gg);
}

function draw() {
	game()
}

function ol() {
	console.log("El modelo a cargado");
  }
  function gg(resultados) {
	if (resultados.length > 0) {
	console.log(resultados);
	  noseX= resultados[0].pose.nose.x;
	  noseY= resultados[0].pose.nose.y;
  }
}






