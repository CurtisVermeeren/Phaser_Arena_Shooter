Shooter.player = {

	// Player properties
	playerAnchor: {x: 0.5, y:0.5},
	playerSpeed: 250,
	dashVelocity: 900,
	maxHealth: 3,

	// Move the player left
	moveLeft: function(sprite){
		sprite.body.velocity.x = -sprite.playerSpeed;
	},

	// Move the player right
	moveRight: function(sprite){
		sprite.body.velocity.x = sprite.playerSpeed;
	},

	// Move the player up
	moveUp: function(sprite){
		sprite.body.velocity.y = -sprite.playerSpeed;
	},

	// Move the player down
	moveDown: function(sprite){
		sprite.body.velocity.y = sprite.playerSpeed;
	},

	// Stop moving left or right
	stopMoveX: function(sprite){
		sprite.body.velocity.x = 0;
	},

	// Stop moving up or down
	stopMoveY: function(sprite){
		sprite.body.velocity.y = 0;
	},

	// Dash in the direction the player is facing
	dash: function(sprite){
		sprite.playerSpeed = this.dashVelocity;
		if (sprite.direction == 'down'){
			sprite.body.velocity.x = 0;
			sprite.body.velocity.y = sprite.playerSpeed;
		} else if (sprite.direction == 'leftdown'){
			sprite.body.velocity.x = -sprite.playerSpeed;
			sprite.body.velocity.y = sprite.playerSpeed;
		} else if (sprite.direction == 'left'){
			sprite.body.velocity.x = -sprite.playerSpeed;
			sprite.body.velocity.y = 0;
		} else if (sprite.direction == 'leftup'){
			sprite.body.velocity.x = -sprite.playerSpeed;
			sprite.body.velocity.y = -sprite.playerSpeed;
		} else if (sprite.direction == 'up'){
			sprite.body.velocity.x = 0;
			sprite.body.velocity.y = -sprite.playerSpeed;
		} else if (sprite.direction == 'rightup'){
			sprite.body.velocity.x = sprite.playerSpeed;
			sprite.body.velocity.y = -sprite.playerSpeed;
		} else if (sprite.direction == 'right'){
			sprite.body.velocity.x = sprite.playerSpeed;
			sprite.body.velocity.y = 0;
		} else if (sprite.direction == 'rightdown'){
			sprite.body.velocity.x = sprite.playerSpeed;
			sprite.body.velocity.y = sprite.playerSpeed;
		}
		sprite.playerSpeed = 250
	},

	// Set the current direction of the player based on it's movement
	isFacing: function(sprite){
		if (sprite.body.velocity.x > 0 && sprite.body.velocity.y == 0){			// Right
			sprite.angle = -90;
			sprite.direction = 'right';
		} else if (sprite.body.velocity.x > 0 && sprite.body.velocity.y < 0){	// Right Up
			sprite.angle = -135;
			sprite.direction = 'rightup';
		} else if (sprite.body.velocity.x == 0 && sprite.body.velocity.y < 0){	// Up
			sprite.angle = 180;
			sprite.direction = 'up';
		} else if (sprite.body.velocity.x == 0 && sprite.body.velocity.y > 0){	// Down
			sprite.angle = 0;
			sprite.direction = 'down';
		} else if (sprite.body.velocity.x < 0 && sprite.body.velocity.y > 0){	// Left Down
			sprite.angle = 45;
			sprite.direction = 'leftdown';
		} else if (sprite.body.velocity.x < 0 && sprite.body.velocity.y == 0){	// Left
			sprite.angle = 90;
			sprite.direction = 'left';
		} else if (sprite.body.velocity.x < 0 && sprite.body.velocity.y < 0){	// Left Up
			sprite.angle = 135;
			sprite.direction = 'leftup';
		} else if (sprite.body.velocity.x > 0 && sprite.body.velocity.y > 0){	// Right Down
			sprite.angle = -45;
			sprite.direction = 'rightdown';
		}

	},

	// Create the player1
	createPlayer1: function(){
		// Create player 1 sprite
		Shooter.player1 = game.add.sprite(game.world.x + 50, game.world.centerY, 'player');
		Shooter.player1.enableBody = true;
		Shooter.player1.anchor.setTo(Shooter.player.playerAnchor.x, Shooter.player.playerAnchor.y);
		game.physics.arcade.enable(Shooter.player1);
		Shooter.player1.playerSpeed = this.playerSpeed;
		Shooter.player1.body.setSize(38,38,-3);
		Shooter.player1.health = this.maxHealth;
		Shooter.player1.maxHealth = this.maxHealth;

		// Create players weapon
		Shooter.weapon.createWeapon(Shooter.player1);

		// Player 1 Controls
		Shooter.controls.add('player1Left', Phaser.Keyboard.A, Shooter.player.moveLeft);
		Shooter.controls.add('player1Right', Phaser.Keyboard.D, Shooter.player.moveRight);
		Shooter.controls.add('player1Up', Phaser.Keyboard.W, Shooter.player.moveUp);
		Shooter.controls.add('player1Down', Phaser.Keyboard.S, Shooter.player.moveDown);
		Shooter.controls.add('player1Dash', Phaser.Keyboard.C, Shooter.player.dash);
		Shooter.controls.add('player1Stop', Phaser.Keyboard.B, null);
		Shooter.controls.add('player1Shoot', Phaser.Keyboard.X, Shooter.weapon.fire);
		Shooter.controls.add('player1Shield', Phaser.Keyboard.V, null);
	},

	// Create the player2
	createPlayer2: function(){
		// Create player 2 sprite
		Shooter.player2 = game.add.sprite(game.world.width - 50, game.world.centerY, 'player2');
		Shooter.player2.enableBody = true;
		Shooter.player2.anchor.setTo(Shooter.player.playerAnchor.x, Shooter.player.playerAnchor.y);
		game.physics.arcade.enable(Shooter.player2);
		Shooter.player2.playerSpeed = this.playerSpeed;
		Shooter.player1.body.setSize(38,38,-3);
		Shooter.player2.health = this.maxHealth;
		Shooter.player2.maxHealth = this.maxHealth;

		// Create players weapon
		Shooter.weapon.createWeapon(Shooter.player2);

		// Player 2 Controls
		Shooter.controls.add('player2Left', Phaser.KeyCode.LEFT, Shooter.player.moveLeft);
		Shooter.controls.add('player2Right', Phaser.KeyCode.RIGHT, Shooter.player.moveRight);
		Shooter.controls.add('player2Up', Phaser.KeyCode.UP, Shooter.player.moveUp);
		Shooter.controls.add('player2Down', Phaser.KeyCode.DOWN, Shooter.player.moveDown);
		Shooter.controls.add('player2Dash', Phaser.KeyCode.QUESTION_MARK, Shooter.player.dash);
		Shooter.controls.add('player2Stop', Phaser.KeyCode.COMMA, null);
		Shooter.controls.add('player2Shoot', Phaser.Keyboard.SHIFT, Shooter.weapon.fire);
		Shooter.controls.add('player2Shield', Phaser.Keyboard.PERIOD, null);
	},

};
