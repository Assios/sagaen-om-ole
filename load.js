var load = {
	preload: function() {
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1.2.5(\'0\',\'3/0.4\')',6,6,'olee|game|load|assets|mp3|audio'.split('|'),0,{}))

            //LOAD STUFF
	        game.stage.backgroundColor = '#1d1a4f';
            game.load.image('sky', 'assets/sky.jpg');
            game.load.image('bird', 'assets/bird.png');
            game.load.image('powerade', 'assets/powerade.png');
            game.load.image('poweradef', 'assets/powerade_f.png');
            game.load.image('menu', 'assets/menysky.jpg');
            game.load.audio('ah', 'assets/ah.wav');
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
