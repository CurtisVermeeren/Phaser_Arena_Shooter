var game = new Phaser.Game(Shooter.gameProperties.gameWidth , Shooter.gameProperties.gameHeight, Phaser.AUTO, 'game-div');
Shooter.controls.registerGame(game);

Shooter.states = {
	boot: 'boot',
	load: 'load',
	menu: 'menu',
	play: 'play',
	winner: 'winner',
};

// Add all the states
game.state.add(Shooter.states.boot, Shooter.bootState);
game.state.add(Shooter.states.load, Shooter.loadState);
game.state.add(Shooter.states.menu, Shooter.menuState);
game.state.add(Shooter.states.play, Shooter.playState);
game.state.add(Shooter.states.winner, Shooter.winnerState);

// Start the boot state
game.state.start(Shooter.states.boot);
