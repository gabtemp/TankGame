function Cannon() {

    this.cooldown = 1000;
	this.lastShot = 0;

    this.bullets = [];
	this.bulletSize = 7;
	this.bulletSpeed = 10 ;

    this.fire = function(x, y, dir) {
		if(millis() - this.lastShot > this.cooldown) {
			this.lastShot = millis();
			// Bullet has to start in the center of the tank
			this.bullets.push(createVector(x + _scale / 2, y + _scale / 2, dir));
		}

    }
    
    this.update = function() {
        var deleteIndexes = []
		for (var i = 0; i < this.bullets.length; i++) {
			bullet = this.bullets[i];
			x = bullet.x + xDirection[bullet.z] * this.bulletSpeed;
			y = bullet.y + yDirection[bullet.z] * this.bulletSpeed;

			if(x > width + 100 || y > height + 100 || x < -100 || y < -100) {
				deleteIndexes.push(i);
			} else {
				this.bullets[i] = createVector(x, y, bullet.z);
			}
		}

		for (var i = deleteIndexes.length - 1; i >= 0; i--) {
			this.bullets.splice(i, 1);
		}
    }

    this.render = function() {
        fill(255);
		for (var i = this.bullets.length - 1; i >= 0; i--) {
			ellipse(this.bullets[i].x, this.bullets[i].y, this.bulletSize);
		}
    }
}