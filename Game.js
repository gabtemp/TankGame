function Game() {

	MIN_TARGETS = 1

	this.player = new Player();
	this.targets = [];

	this.update = function() {
		this.player.update();
		for (var i = 0; i < this.targets.length; i++) {
			this.targets[i].update();
		}

		new_targets=[]

		for (var targetId = 0; targetId < this.targets.length; targetId++) {
			target = this.targets[targetId];
			this.checkColision(target);

			if(!target.dead) {
				new_targets.push(target);
			}
		}

		this.targets = new_targets;

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

	this.checkColision = function(target) {
		// Cheking bullet collision
		for (var bulletId = this.player.cannon.bullets.length - 1; bulletId >= 0; bulletId--) {
			bullet = this.player.cannon.bullets[bulletId];

			hit = collideRectCircle(target.x, target.y , _scale, _scale, bullet.x, bullet.y, this.player.cannon.bulletSize);
			if(hit && !target.dead) {
				this.player.addPoints(target.points);
				this.player.cannon.bullets.splice(bulletId, 1);
				target.die();
			}
		}

		// Cheking player collision
		hit = collideRectRect(target.x, target.y , _scale, _scale, this.player.x, this.player.y, _scale, _scale);
		if(hit) {
			this.player.die();
		}
	}
}
