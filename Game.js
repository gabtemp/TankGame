function Game() {

	MIN_TARGETS = 1

	this.player = new Player();
	this.targets = [];

	this.update = function() {
		this.player.update();
		for (var i = 0; i < this.targets.length; i++) {
			target = this.targets[i];
			target.update();

			this.player.checkColision(target);
			target.checkColision(this.player);

			if(target.dead) {
				this.player.addPoints(target.points);
				this.targets.splice(i, 1);
			}
		}

		while(this.targets.length < MIN_TARGETS) {
			this.targets.push(new Target());
		}
		MIN_TARGETS = 1 + floor(this.player.points / 1000);
	}

	this.render = function() {
		this.player.render();
		for (var targetId = 0; targetId < this.targets.length; targetId++) {
			this.targets[targetId].render();
		}

		fill(0)
		textSize(32);
		text("Points: " + this.player.points, 10, 30);
	}
}
