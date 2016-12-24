function Target(allTargets, id) {

	this.id = id;
	this.allTargets = allTargets;

	this.x = random(0, width - _scale);
	this.y = random(0, height - _scale);
	this.dead = false;

	this.points = 1000;

	this.update = function() {
		if(this.dead) {
			this.allTargets.splice(this.id, 1);
		}

		if(this.points > 100) {
			this.points = floor(this.points - 1/10);
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
	}
}