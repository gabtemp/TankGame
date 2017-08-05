function Target() {

	this.x = random(0, width - _scale);
	this.y = random(0, height - _scale);
	this.dead = false;

	this.points = 1000;
	this.min_points = 100;
	this.points_rate = 1/10;

	this.update = function() {
		if(this.points > this.min_points) {
			this.points = floor(this.points - this.points_rate);
		}
	}

	this.render = function() {
		fill('red');
		rect(this.x, this.y, _scale, _scale);

		textSize(18);
		text("Points: " + this.points, this.x - _scale, this.y);
	}

	this.die = function() {
		this.dead = true;
		console.log("DEAD!")
	}
}