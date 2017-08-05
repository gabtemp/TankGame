function Player() {
	
	this.x = 0;
	this.y = 0;
	this.speed = 3;

	this.xSpeed = 0;
	this.ySpeed = 0;
	this.dir = 0;

	this.cannon = new Cannon(1000);

	this.dead = false;

	this.points = 0;

	this.update = function() {
		if(this.dead) {
			this.dead = false;

			this.x = 0;
			this.y = 0;
			this.bullets = [];
			this.dir = 0;
		}

		this.xSpeed = 0;
		this.ySpeed = 0;

		if (keyIsDown(UP_ARROW)) {
			this.xSpeed = 0;
			this.ySpeed = -1;
			this.dir = 0;
		} else if (keyIsDown(DOWN_ARROW)) {
			this.xSpeed = 0;
			this.ySpeed = 1;
			this.dir = 1;
		} else if (keyIsDown(RIGHT_ARROW)) {
			this.xSpeed = 1;
			this.ySpeed = 0;
			this.dir = 2;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.xSpeed = -1;
			this.ySpeed = 0;
			this.dir = 3;
		}

		this.cannon.update();

		// SPACE = 32
		if(keyIsDown(32)) {
			this.cannon.fire(this.x, this.y, this.dir);
		}

		x = this.x + this.xSpeed * this.speed;
		y = this.y + this.ySpeed * this.speed;
		this.x = constrain(x, 0, width - _scale - 1);
		this.y = constrain(y, 0, height - _scale - 1);
	}

	this.checkColision = function(target) {
		this.cannon.checkColision(target);
		hit = collideRectRect(target.x, target.y , _scale, _scale, this.x, this.y, _scale, _scale);
		if(hit) {
			this.die();
		}
	}

	this.render = function() {
		this.cannon.render();
		fill('green');
		rect(this.x, this.y, _scale, _scale);

	}

	this.die = function() {
		this.dead = true;
	}

	this.addPoints = function(points){
		this.points += points;
	}
}