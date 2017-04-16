Shooter.weapon = {

	bulletSpeed: 600,
	fireRate: 400,
	numBullets: 5,

	// Create a weapon for a sprite
	createWeapon : function(sprite){
		weapon = game.add.weapon(this.numBullets, 'bullet');
		weapon.bulletSpeed = this.bulletSpeed;
		weapon.fireRate = this.fireRate;
		weapon.bulletAngleOffset = sprite.angle;
		weapon.trackSprite(sprite, 0,0,false);
		weapon.bullets.forEach(function(bullet) {  bullet.body.setSize(1, 1);});
		sprite.weapon = weapon;
	},

	shootWeapon: function(sprite){
		// Get the direction to fire bullets
		sprite.weapon.fireAngle = sprite.angle + 90;
		sprite.weapon.fire();
	},

	// Function kills bullet when it collides with a wall
	bulletWallCollision: function(bullet){
		bullet.kill();
	},

	bulletPlayerCollision: function(sprite, bullet){
		bullet.kill();
		sprite.damage(1);
	},

	bulletShieldCollision: function(shiled, bullet){
		bullet.kill();
	}
};
