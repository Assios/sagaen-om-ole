var load = {
	preload: function() {
	    game.stage.backgroundColor = '#1d1a4f';
            game.load.image('sky', 'assets/sky.jpg');
            game.load.image('bird', 'assets/bird.png');
	    game.load.image('ground', 'assets/ground.png');
            game.load.image('powerade', 'assets/powerade.png');
            game.load.image('poweradef', 'assets/powerade_f.png');
            game.load.image('menu', 'assets/menysky.jpg');
            game.load.audio('ah', 'assets/ah.wav');
            game.load.audio('bgmusic', 'assets/bgmusic.wav');
            game.load.audio('mhm', 'assets/mhm.wav');  
	},

	create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 260;
        this.scale.minHeight = 480;
        this.scale.maxWidth = 640;
        this.scale.maxHeight = 1136;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.game.state.start('menu');
	}
}
