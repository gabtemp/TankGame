function Tank() {
	
	this.x = 0;
	this.y = 0;
	this.velocity = 5;

	this.xSpeed = 0;
	this.ySpeed = 0;

	this.update = function() {
		this.updateKeyPress();
		this.move();
	}

	this.render = function() {
		fill(255);
		rect(this.x, this.y, 10, 10);
	}

	this.updateKeyPress = function() {
		this.xSpeed = 0;
		this.ySpeed = 0;

		if (keyIsDown(UP_ARROW)) {
			this.ySpeed =+ -1;
		}
		if (keyIsDown(DOWN_ARROW)) {
			this.ySpeed =+ 1;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.xSpeed =+ 1;
		}
		if (keyIsDown(LEFT_ARROW)) {
			this.xSpeed =+ -1;
		}
	}

	this.move = function() {
		vel = this.velocity;
		if(this.x === this.y === 1) {
			vel = this.velocity / 2;
		}
		this.x = this.x + this.xSpeed * vel;
		this.y = this.y + this.ySpeed * vel;
	}

}