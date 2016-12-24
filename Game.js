function Game() {

	MIN_TARGETS = 1

	this.player = new Player();
	this.targets = [];

	this.update = function() {
		this.player.update();
		for (var i = 0; i < this.targets.length; i++) {
			this.targets[i].update();
		}

		MIN_TARGETS = 1 + floor(this.player.points / 10000)
		while(this.targets.length < MIN_TARGETS) {
			this.targets[this.targets.length] = new Target(this.targets, this.targets.length);
		}

		this.checkColision();
	}

	this.render = function() {
		this.player.render();
		for (var i = 0; i < this.targets.length; i++) {
			this.targets[i].render();
		}

		fill(0)
		textSize(32);
		text("Points: " + this.player.points, 10, 30);
	}

	this.checkColision = function() {
		bulletSize = this.player.bulletSize;
		for (var i = this.targets.length - 1; i >= 0; i--) {
			target = this.targets[i];

			// Cheking bullet collision
			for (var i = this.player.bullets.length - 1; i >= 0; i--) {
				bullet = this.player.bullets[i];

				hit = collideRectCircle(target.x, target.y , _scale, _scale, bullet.x, bullet.y, bulletSize);
				if(hit) {
					this.player.addPoints(target.points);
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
}