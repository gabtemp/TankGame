function Game() {

	this.player = new Tank();

	this.update = function() {
		this.player.update();
	}

	this.render = function() {
		this.player.render();
	}
}