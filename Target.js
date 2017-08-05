function Target() {

	this.x = random(0, width - _scale);
	this.y = random(0, height - _scale);
	this.dir = 0;
	this.dead = false;

	this.cannon = new Cannon(2500 + (random() * 1000));

	this.points = 1000;
	this.min_points = 100;
	this.points_rate = 1/(60 * 100000);

	this.update = function() {
		if(this.points > this.min_points) {
			this.points = floor(this.points - this.points_rate);
		}

		this.cannon.fire(this.x, this.y, this.dir);
		this.cannon.update();
	}

	this.checkColision = function(target) {
		this.cannon.checkColision(target);
	}

	this.render = function() {
		fill('red');
		rect(this.x, this.y, _scale, _scale);

		textSize(18);
		text("Points: " + this.points, this.x - _scale, this.y);
		this.cannon.render()
	}

	this.die = function() {
		this.dead = true;
		console.log("DEAD!")
	}
}