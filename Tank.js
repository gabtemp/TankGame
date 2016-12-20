function Tank() {
	
	this.x = 0;
	this.y = 0;
	this.speed = 3;

	this.xSpeed = 0;
	this.ySpeed = 0;
	this.xDirection = {0:0, 1:0, 2:1, 3:-1};
	this.yDirection = {0:-1, 1:1, 2:0, 3:0};

	this.cooldown = 1000;
	this.lastShot = -1000;

	this.bullets = [];
	this.bulletSize = 7;
	this.bulletSpeed = 10 ;
	this.dir = 0;

	this.update = function() {
		this.move();
	}

	this.render = function() {
		fill(255);

		for (var i = this.bullets.length - 1; i >= 0; i--) {
			ellipse(this.bullets[i].x + _scale, this.bullets[i].y, this.bulletSize);
		}

		rect(this.x, this.y, _scale, _scale);

	}

	this.move = function() {
		this.xSpeed = 0;
		this.ySpeed = 0;

		if (keyIsDown(UP_ARROW)) {
			this.ySpeed =+ -1;
			this.dir = 0;
		} else if (keyIsDown(DOWN_ARROW)) {
			this.ySpeed =+ 1;
			this.dir = 1;
		} else if (keyIsDown(RIGHT_ARROW)) {
			this.xSpeed =+ 1;
			this.dir = 2;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.xSpeed =+ -1;
			this.dir = 3;
		}

		var deleteIndexes = []
		for (var i = this.bullets.length - 1; i >= 0; i--) {
			bullet = this.bullets[i];
			x = bullet.x + this.xDirection[bullet.z] * this.bulletSpeed;
			y = bullet.y + this.yDirection[bullet.z] * this.bulletSpeed;

			if(x > width + 100 || y > height + 100 || x < -100 || y < -100) {
				deleteIndexes.push(i);
			} else {
				this.bullets[i] = createVector(x, y, bullet.z);
			}
		}

		for (var i = deleteIndexes.length - 1; i >= 0; i--) {
			this.bullets.splice(i, 1);
		}

		// SPACE = 32
		if(keyIsDown(32)) {
			this.fire();
		}

		this.x = this.x + this.xSpeed * this.speed;
		this.y = this.y + this.ySpeed * this.speed;

		this.x = constrain(this.x, 0, width - _scale -1);
		this.y = constrain(this.y, 0, height - _scale -1);
	}

	this.fire = function() {
		if(millis() - this.lastShot > this.cooldown) {
			this.lastShot = millis();
			this.bullets[this.bullets.length] = createVector(this.x - _scale / 2, this.y + _scale / 2, this.dir)
		}

	}
}