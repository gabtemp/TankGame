function setup() {
	createCanvas(800, 800);
	
	this.timer = millis();
	this.lastTime = millis();
	this.ns = 1000.0 / 60.0;
	this.delta = 0;
	this.frames = 0;
	this.updates = 0;
	this.game = new Game();
	_scale = 30;
	frameRate(100);
}

function draw() {

	background(52)

	now = millis()
	this.delta += (now - this.lastTime) / this.ns;
	this.lastTime = now;
	while (delta >= 1) {
		this.game.update();
		this.updates++;
		this.delta--;
	}

	this.game.render();
	this.frames++;

	if (millis() - this.timer > 1000) {
		this.timer += 1000;
		console.log(this.updates + " ups, " + this.frames + " fps");
		this.updates = 0;
		this.frames = 0;
	}
}