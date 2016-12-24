function Target(allTargets, id) {

	this.id = id;
	this.allTargets = allTargets;

	this.x = random(0, width - _scale);
	this.y = random(0, height - _scale);
	this.dead = false;

	this.update = function() {
		if(this.dead) {
			this.allTargets.splice(this.id, 1);
		}
	}

	this.render = function() {
		fill('red');
		rect(this.x, this.y, _scale, _scale);
	}

	this.die = function() {
		this.dead = true;
	}
}