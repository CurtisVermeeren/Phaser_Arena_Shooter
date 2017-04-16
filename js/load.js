Shooter.loadState = {
	preload: function(){


		// Add a 'loading...' label on the screen
		var loadingLabel = game.add.text(game.world.centerX, game.world.height * 0.4, 'loading...',
			{ font: '20px Press Start 2P', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Display the progress bar
		var progressBar = game.add.sprite(game.world.centerX, game.world.height * 0.6, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		// Load background image
		game.load.image('background', 'assets/background.png');

		// Load game tile
		game.load.image('blackTile', 'assets/blackTile.png');
		game.load.tilemap('tileMap', 'assets/game.json', null, Phaser.Tilemap.TILED_JSON);

		// Load the player
		game.load.image('player', 'assets/player.png');
		game.load.image('player2','assets/player2.png');

		// Load the bullet
		game.load.image('bullet','assets/bullet.png');

		// Load the shield
		game.load.image('shield', 'assets/shield.png');

	},

	create: function(){
		game.state.start('menu');
	}
};
