Shooter.playState = {
	create: function(){
		this.createWorld();
		Shooter.player.createPlayer1();
		Shooter.player.createPlayer2();
		this.createHealthBar();
		this.createShields();

	},

	update: function(){
		// Check the player input
		Shooter.controls.updateControls();
		Shooter.controls.updateControls2();

		// Update the direction the player is facing
		Shooter.player.isFacing(Shooter.player2);
		Shooter.player.isFacing(Shooter.player1);

		// Bring both players to top so that bullets are shown under
		Shooter.player1.bringToTop();
		Shooter.player2.bringToTop();

		// Check the collisions between the players and the map
		game.physics.arcade.collide(Shooter.player1, this.layer);
		game.physics.arcade.collide(Shooter.player2, this.layer);

		// Check the collision between the two players
		game.physics.arcade.collide(Shooter.player1, Shooter.player2);

		// Check collisions between the bullets and walls
		game.physics.arcade.collide(Shooter.player1.weapon.bullets, this.layer, Shooter.weapon.bulletWallCollision, null, this);
		game.physics.arcade.collide(Shooter.player2.weapon.bullets, this.layer, Shooter.weapon.bulletWallCollision, null, this);

		// Check collisions between the bullets and other player
		game.physics.arcade.overlap(Shooter.player1.weapon.bullets, Shooter.player2, Shooter.weapon.bulletPlayerCollision, null, this);
		game.physics.arcade.overlap(Shooter.player2.weapon.bullets, Shooter.player1, Shooter.weapon.bulletPlayerCollision, null, this);

		// Check collisions between the bullets and other player's shield
		game.physics.arcade.overlap(Shooter.player1.weapon.bullets, this.player2Shield, Shooter.weapon.bulletShieldCollision, null, this);
		game.physics.arcade.overlap(Shooter.player2.weapon.bullets, this.player1Shield, Shooter.weapon.bulletShieldCollision, null, this);

		this.updateHealthBars();

		// Check if a player has died and if so the other wins
		if (!Shooter.player1.alive){
			Shooter.gameProperties.gameWinner = 2;
			game.state.start(Shooter.states.winner);
		} else if (!Shooter.player2.alive){
			Shooter.gameProperties.gameWinner = 1;
			game.state.start(Shooter.states.winner);
		}
	},

	// Function creates the game world tile map
	createWorld: function(){
		game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
		this.map = game.add.tilemap('tileMap');
		this.map.addTilesetImage('blackTile');
		this.layer = this.map.createLayer('Tile Layer 1');
		this.layer.resizeWorld();
		this.map.setCollision(1);
	},

	// Create Health bars on the players
	createHealthBar: function(){
		this.player1HealthBar = Shooter.player1.addChild(game.make.sprite(0,-3,'bullet'));
		this.player1HealthBar.anchor.setTo(0.5,0.5);
		this.player1HealthBar.height = 6 ;

		this.player2HealthBar = Shooter.player2.addChild(game.make.sprite(0,-3,'bullet'));
		this.player2HealthBar.anchor.setTo(0.5,0.5);
		this.player2HealthBar.height = 6 ;
	},

	// Update healthbar size based on health remaining
	updateHealthBars: function(){
		this.player1HealthBar.width = 6 * Shooter.player1.health;
		this.player2HealthBar.width = 6 * Shooter.player2.health;
	},

	createShields: function(){
		this.player1Shield = Shooter.player1.addChild(game.make.sprite(0,15,'shield'));
		this.player1Shield.anchor.setTo(0.5,0.5);
		this.player1Shield.angle = 180;
		this.player1Shield.enableBody = true;
		game.physics.arcade.enable(this.player1Shield);
		this.player1Shield.body.setSize(38,38);

		this.player2Shield = Shooter.player2.addChild(game.make.sprite(0,15,'shield'));
		this.player2Shield.anchor.setTo(0.5,0.5);
		this.player2Shield.angle = 180;
		this.player2Shield.enableBody = true;
		game.physics.arcade.enable(this.player2Shield);
		this.player2Shield.body.setSize(38,38);
	},
};
