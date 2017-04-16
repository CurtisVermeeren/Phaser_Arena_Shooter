var Shooter = {};

Shooter.gameProperties = {
	gameWidth:  1280,
	gameHeight: 720,
	gameWinner: 0,
};

Shooter.bootState = {
	preload: function(){
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function(){
		game.stage.backgroundColor = '#616366';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Refresh the scaling on a browser resize
		game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

		var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);

		game.scale.setUserScale(scale, scale, 0, 0);

		document.body.style.backgroundColor = '#000000';

		// Center the game on the screen
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;

		// Apply the scale changes
		game.scale.updateLayout(true);

		window.addEventListener('resize', function () {
			// Refresh the scaling on a browser resize
			game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

	    	var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);

	   		game.scale.setUserScale(scale, scale, 0, 0);

			document.body.style.backgroundColor = '#000000';

			// Center the game on the screen
			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;
		});

		// Start the load state
		game.state.start(Shooter.states.load);
	},
}
