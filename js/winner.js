Shooter.winnerState = {
	create: function(){

		// Add background image
		game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

		// Display the name of the game
		var nameLabel = game.add.text(game.world.centerX, game.world.height * 0.4,
		 	'Player ' + Shooter.gameProperties.gameWinner + " has won!", {font: '70px Press Start 2P', fill: '#ffffff'});
		nameLabel.anchor.setTo(0.5,0.5);

		// Display start game instructions
		var startLabel = game.add.text(game.world.centerX, game.world.height * 0.55,
			'Press the up arrow to play again', {font: '30px Press Start 2P', fill: '#ffffff'});
		startLabel.anchor.setTo(0.5,0.5);
		var startTween = game.add.tween(startLabel)
			.to({alpha: 0}, 2000).to({alpha: 1}, 2000).loop().start();

		// Create a phaser keyboard variable
		this.menuControls();
	},

	// Add a listener to start the game
	menuControls: function(){
		Shooter.controls.addListener('menu', Phaser.Keyboard.UP, this.startGame, true);
	},

	// Start the play state
	startGame: function(){
		game.state.start('play');
	}
};
