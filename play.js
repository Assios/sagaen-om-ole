var play = {

	create: function() {
		this.sky = game.add.sprite(0, 0, 'sky');
		this.ah = this.game.add.audio('ah');
        this.bgmusic = this.game.add.audio('bgmusic');
        this.mhm = this.game.add.audio('mhm');
        this.mhm.volume = 0.05;
        this.ah.volume = 0.05;
        this.bgmusic.volume = 2.5;

        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	    this.powerade = game.add.group();
		this.powerade.createMultiple(5, 'powerade');
		this.powerade.setAll('checkWorldBounds', true);
		this.powerade.setAll('outOfBoundsKill', true);
		this.powerade.enableBody = true;
		this.powerade.scale.setTo(1.27, 1.27);

	    this.poweradef = game.add.group();
		this.poweradef.createMultiple(5, 'poweradef');
		this.poweradef.setAll('checkWorldBounds', true);
		this.poweradef.setAll('outOfBoundsKill', true);
		this.poweradef.enableBody = true;
		this.poweradef.scale.setTo(1.27, 1.27);

		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player = this.game.add.sprite(W/2, H/2-100, 'bird');
		this.player.scale.setTo(0.3, 0.3);
		game.physics.arcade.enable(this.player);
		game.physics.arcade.enable(this.powerade);
		game.physics.arcade.enable(this.poweradef);
		this.player.anchor.setTo(0.5, 0.5);

		this.score = 0;
		this.scoretext = this.game.add.text(20, 20, "FAVS: 0", { font: "35px Arial", fill: "#000", align: "center" });

		this.besttext = this.game.add.text(20, 120, "BEST: " + BEST, { font: "35px Arial", fill: "#fff", align: "center" });

		this.player.body.setSize(420, 420, 25, 25);

		this.player.body.gravity.y = 1600;

		this.timer = this.game.time.events.loop(1800, this.add_p, this);

		this.game.time.events.loop(1800, this.updateScore, this);
		this.bgmusic.play();

	},

	update: function() {

		if (this.player.angle < 20)  
    		this.player.angle += 1;

		game.input.onDown.add(this.jump, this);
		this.space.onDown.add(this.jump, this);

		if (this.player.inWorld == false)
		        this.restart();

		game.physics.arcade.collide(this.player, this.powerade, 0, this.restart, this);
		game.physics.arcade.collide(this.player, this.poweradef, 0, this.restart, this);

	},

	bgmuz: function() {
		this.bgmusic.play();
	},

	render: function() {
		game.debug.body(this.powerade);
	},

	jump: function() {
		this.player.body.velocity.y = -600;
		tweenz = this.game.add.tween(this.player);
		tweenz.to({angle: -20}, 100);

		tweenz.start();
                if ((Math.floor(Math.random() * 2) + 1) == 1) {
		    this.ah.play();
                }
                else {
                    this.mhm.play();
                }
	},

	restart: function() {
		this.bgmusic.stop();
		game.state.start('menu');
	},

	add_p: function() {
		var power = this.powerade.getFirstDead();
		var power2 = this.poweradef.getFirstDead();


		power.body.setSize(169, 581, 50, 90);
		power2.body.setSize(169, 581, 50, 40);

		var random = Math.floor(Math.random() * 400) - 200;

		power.reset(W, -275 + random);
		power2.reset(W, 550 + random);

		power.body.velocity.x = -250;
		power2.body.velocity.x = -250;
	},

	updateScore: function() {
		this.score += 1;

		if (this.score > BEST) {
			BEST = this.score
		}

		this.scoretext.text = "FAVS: " + this.score;
		this.besttext.text = "BEST: " + BEST;

	},

/*	add_two_powers: function() {
		var random = Math.floor(Math.random() * 400) - 200;

		this.add_powerade(W, 1500 + random, 1);
		this.add_powerade(W, -250 + random, 0);
		
	},

	add_powerade: function(x, y, rotate) {
		var power = this.powerade.getFirstDead();
		power.immovable = true;
		power.reset(x, y);
		power.scale.setTo(1.27, 1.27);
		power.body.setSize(169, 581, 50, -20);


		if (rotate == 1) {
			power.anchor.setTo(0.95, 0);
			power.angle = 180;
		}

		power.body.velocity.x = -300;
	}
*/
}