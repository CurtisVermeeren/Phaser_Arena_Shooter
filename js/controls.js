Shooter.controls = (function controls(){
	var game,
		controlList = {};
	var nextDashTime = 0;
	var nextDashTime2 = 0;
	var player1LastDash = 0;
	var player2LastDash = 0;
	var dashCooldown = 1000;
	var dashDuration = 300;

	var keyObject = function (input, callback) {
		return {
			input: input,
			callback: callback,
		};
	};

	var publicApi = {

		// Attach the game to the controls
		registerGame: function (game) {
            controls.game = game;
        },

		// Add a listener control
		// name - The name of the listener
		// keyCode - The phaser key
		// callback - Function to attatch to the listener
		// once - boolean true or false. If true listener will only run once
		addListener: function(name, keyCode, callback, once){
			if (once){
				var input = controls.game.input.keyboard.addKey(keyCode);
				input.onDown.addOnce(callback, this);
			}
		},

		// Add a control
		// name - The name of the key
		// keyCode - The phaser key
		// callback - The function attatched to the key
		add: function (name, keyCode, callback) {
            var input = controls.game.input.keyboard.addKey(keyCode);
            controlList[name] = keyObject(input, callback);
        },


		updateControls: function(){
			Shooter.player1.body.moves = true;

			// Check if dashing
			if (controls.game.time.now < player1LastDash + dashDuration){
				// Make the player dash
				Shooter.player.dash(Shooter.player1);
				// Prevent other movement during dash
				return;
			}

			// Moving left and right
			if (controlList['player1Left'].input.isDown){
				Shooter.player.moveLeft(Shooter.player1);
			} else if (controlList['player1Right'].input.isDown){
				Shooter.player.moveRight(Shooter.player1);
			} else{
				Shooter.player.stopMoveX(Shooter.player1);
			}
			// Moving up and down
			if (controlList['player1Up'].input.isDown){
				Shooter.player.moveUp(Shooter.player1);
			} else if (controlList['player1Down'].input.isDown){
				Shooter.player.moveDown(Shooter.player1);
			} else {
				Shooter.player.stopMoveY(Shooter.player1);
			}

			// Hold to stop moving and turn
			if (controlList['player1Stop'].input.isDown){
				Shooter.player1.body.moves = false;
			}

			// Shielding
			if (controlList['player1Shield'].input.isDown){
				Shooter.player1.children[1].visible = true;
				Shooter.player1.children[1].body.enable = true;
			} else {
				Shooter.player1.children[1].visible = false;
				Shooter.player1.children[1].body.enable = false;
			}

			// Shooting
			if (controlList['player1Shoot'].input.isDown && !(controlList['player1Shield'].input.isDown)){
				Shooter.weapon.shootWeapon(Shooter.player1);
			}

			// Press to dash
			if (controlList['player1Dash'].input.isDown && (nextDashTime < controls.game.time.now)){
				player1LastDash = controls.game.time.now;
				nextDashTime = controls.game.time.now + dashCooldown;
			}
		},

		updateControls2: function(){
			Shooter.player2.body.moves = true;

			// Check if dashing
			if (controls.game.time.now < player2LastDash + dashDuration){
				// Make the player dash
				Shooter.player.dash(Shooter.player2);
				// Prevent other movement during dash
				return;
			}

			// Moving left and right
			if (controlList['player2Left'].input.isDown){
				Shooter.player.moveLeft(Shooter.player2);
			} else if (controlList['player2Right'].input.isDown){
				Shooter.player.moveRight(Shooter.player2);
			} else{
				Shooter.player.stopMoveX(Shooter.player2);
			}
			// Moving up and down
			if (controlList['player2Up'].input.isDown){
				Shooter.player.moveUp(Shooter.player2);
			} else if (controlList['player2Down'].input.isDown){
				Shooter.player.moveDown(Shooter.player2);
			} else {
				Shooter.player.stopMoveY(Shooter.player2);
			}

			// Hold to stop moving and turn
			if (controlList['player2Stop'].input.isDown){
				Shooter.player2.body.moves = false;
			}

			// Shielding
			if (controlList['player2Shield'].input.isDown){
				Shooter.player2.children[1].visible = true;
				Shooter.player2.children[1].body.enable = true;
			} else {
				Shooter.player2.children[1].visible = false;
				Shooter.player2.children[1].body.enable = false;
			}

			// Shooting
			if (controlList['player2Shoot'].input.isDown && !(controlList['player2Shield'].input.isDown)){
				Shooter.weapon.shootWeapon(Shooter.player2);
			}

			// Press to dash
			if (controlList['player2Dash'].input.isDown && (nextDashTime2 < controls.game.time.now)){
				player2LastDash = controls.game.time.now;
				nextDashTime2 = controls.game.time.now + dashCooldown;
			}
		},

	};
	return publicApi
}());
