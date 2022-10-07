var menu = {
    create: function() {
        BEST = parseInt(this.readCookie("bestcookie"));

        this.bgsky = game.add.sprite(0, 0, 'menu');
        this.game.add.text(20, 20, "SCORE: " + SCORE, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
        SCORE = 0
    },
    update: function() {
        if (game.input.activePointer.isDown) {
            this.game.state.start('play')
        }
    }
};
