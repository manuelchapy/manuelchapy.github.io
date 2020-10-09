function initializeGame() {

// Gameplay Global variables
var __reward = [],
    __collision = 0,
    __tokensToPlay = 0,
    __peg = [],
    __crowdSound = null,
    __fallSound = null,

    __tickSound = null,
    __winningSound = null,
    __epxplosionSound = null

    var width = 720
    var height = 720

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'gameplay-container');

//Preload 'loading' images
var bootState = {

    preload: function(){

        this.load.image('background', './assets/bg.png');

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // // // Have the game centered horizontally
        game.scale.pageAlignHorizontally = true;

        // // // And vertically
        game.scale.pageAlignVertically = true;

    },
    create: function(){
        //moving to the loaderState
        game.state.start('loaderState');

    }

};

var loaderState = {

    preload: function(){

        //loaging images
        this.load.image('points','./assets/img/points.png');
        this.load.image('tokens','./assets/img/tokens.png');
        this.load.image('panel_points','./assets/panel_points.png');
        this.load.image('panel_points','./assets/panel_points.png');
        this.load.image('panel_ball', './assets/panel_ball.png');
        this.load.image('peg', './assets/peg.png');
        this.load.image('big_board','./assets/board.png');
        this.load.image('cash','./assets/sprites/Cash/cash.png');
        this.load.image('crown','./assets/sprites/Crown/crown.png');
        this.load.image('sound_on', './assets/sound_on.png');
        this.load.image('sound_off', './assets/sound_off.png');
        this.load.image('box', './assets/box.png');
        this.load.image('chains', './assets/chains.png');
        this.load.image('points_icon','./assets/points_icon.png');
        this.load.image('tokens_icon','./assets/tokens_icon.png');
        this.load.image('panel_points','./assets/panel_points.png');
        this.load.image('peg1', './assets/pegs/p1.png');
        this.load.image('peg2', './assets/pegs/p2.png');
        this.load.image('peg3', './assets/pegs/p3.png');
        this.load.image('peg4', './assets/pegs/p4.png');
        this.load.image('peg5', './assets/pegs/p5.png');
        this.load.image('peg6', './assets/pegs/p6.png');
        this.load.image('peg7', './assets/pegs/p7.png');
        this.load.image('peg8', './assets/pegs/p8.png');
        this.load.image('peg9', './assets/pegs/p9.png');
        this.load.image('peg10', './assets/pegs/p10.png');
        this.load.image('peg11', './assets/pegs/p11.png');
        this.load.image('peg12', './assets/pegs/p12.png');
        this.load.image('peg13', './assets/pegs/p13.png');
        this.load.image('peg14', './assets/pegs/p14.png');
        this.load.image('peg15', './assets/pegs/p15.png');
        this.load.image('peg16', './assets/pegs/p16.png');
        this.load.image('peg17', './assets/pegs/p17.png');
        this.load.image('peg18', './assets/pegs/p18.png');

        this.load.spritesheet('price1', './assets/miniprices/p1.png', 100, 100, 8);
        this.load.spritesheet('price2', './assets/miniprices/p2.png', 100, 100, 8);
        this.load.spritesheet('price3', './assets/miniprices/p3.png', 100, 100, 8);
        this.load.spritesheet('price4', './assets/miniprices/p4.png', 100, 100, 8);
        this.load.spritesheet('price5', './assets/miniprices/p5.png', 100, 100, 8);
        this.load.spritesheet('price6', './assets/miniprices/p6.png', 100, 100, 8);
        this.load.spritesheet('price7', './assets/miniprices/p7.png', 100, 100, 8);
        this.load.spritesheet('price8', './assets/miniprices/p8.png', 100, 100, 8);
        this.load.spritesheet('price9', './assets/miniprices/p9.png', 100, 100, 8);
        this.load.spritesheet('price10', './assets/miniprices/p10.png', 100, 100, 8);
        this.load.spritesheet('selector','./assets/bomb/ball.png', 69, 69, 60);
        this.load.spritesheet('spirals','./assets/spirals.png', 720, 720, 50);
        this.load.spritesheet('colors_explosion','./assets/color_explode.png', 720, 720, 50);
        
        

        //loading sprites
        this.load.spritesheet('arrow', './assets/arrow.png', 14, 26, 10);
        this.load.spritesheet('explosion', './assets/sprites/Explosion/explosion.png', 139, 73, 49);


        //loading physics
        this.load.physics('boardPhysics', './assets/board.json');

        //loading sounds
        this.load.audio('crowd', './assets/audios/crowd.mp3');
        this.load.audio('fall', './assets/audios/fall.mp3');
        this.load.audio('tick', './assets/audios/tick.mp3');
        this.load.audio('winning', './assets/audios/winning.mp3');
        this.load.audio('explosion', './assets/audios/explosion.mp3');
        this.load.audio('bomb-stick', './assets/audios/bomb-stick.mp3');
        this.load.audio('color_exploding', './assets/audios/color_exploding.mp3');
        this.load.audio('roll', './assets/audios/roll.mp3');
        

    },
    create: function(){
        //moving to the first gameplay state
        game.state.start('gamePlayState');
    },
}

var gamePlayState = {
    
    map:[ //position of all pegs
        [0,1,0,1,0,1,0,1,0,1,0,1,0],
        [0,0,1,0,1,0,1,0,1,0,1,0,1],
        [0,1,0,1,0,1,0,1,0,1,0,1,0],
        [0,0,1,0,1,0,1,0,1,0,1,0,1],
        [0,1,0,1,0,1,0,1,0,1,0,1,0],
        [0,0,1,0,1,0,1,0,1,0,1,0,0]
        ],

    prizesTable: [0, 2, 4, 8, 10, 25, 100, 250, 500, 2500, 5000],

    create: function(){

        //initializing variables
        __collision = 0;

        //creating the sound objects 
        __crowdSound = game.add.audio('crowd')
        __fallSound = game.add.audio('fall')
        __tickSound = game.add.audio('tick')
        __winningSound = game.add.audio('winning')
        __epxplosionSound = game.add.audio('explosion')
        __bombStick = game.add.audio('bomb-stick')
        __color_exploding = game.add.audio('color_exploding')
        __roll = game.add.audio('roll')

        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.setImpactEvents(true);

        var bg = this.add.image(0, 0, 'background');
        bg.scale.x *= 1.2;


        //putting the UI elements on the stage
        var uiElements = this.add.group();


        uiElements.create(5 + 100, 10 + 26, 'tokens_icon');
        uiElements.create(45 + 100, 18 + 26, 'panel_points');
        uiElements.create(115 + 110, 10 + 26, 'points_icon');
        uiElements.create(155 + 110, 18 + 26, 'panel_points');

        uiElements.width = 360;
        uiElements.height = 68;

        var interval = setInterval(function(){
            if (__startButtonPressed) {
                clearInterval(interval);
                addGameplayTexts()            
            }
        }, 1000);

        // putting the pointing arrow on the stage
        var arrow = this.add.sprite(658, 130, 'arrow');
        arrow.scale.y *= -1.2;
        arrow.scale.x *= -1.2;
        arrow.animations.add('animate');
        arrow.animations.play('animate', 15, true);

        //gravity for the gameplayState
        this.physics.p2.gravity.y = 900;
        this.physics.p2.restitution = .8;

        //Putting and setting the rewards on the stage
        var rewards = this.add.physicsGroup(Phaser.Physics.P2JS);
        var boxes = this.add.group();
        for(var i = 0; i < 5; i++){
            __reward[i] = rewards.create(parseInt(i+1) * 123, 650, 'box');
            this.physics.p2.enable(__reward[i], Phaser.Physics.p2);
            __reward[i].alpha = 0
            __reward[i].animations.add('animate');
            __reward[i].body.static = true;
            __reward[i].animations.play('animate', 15, true);   
        }

        var spirals = this.add.sprite(0, 0, "spirals");
        spirals.animations.add('spinning')
        spirals.animations.play('spinning', 15, true)

        //Putting all the pegs around the stage
        var pegs = this.add.physicsGroup(Phaser.Physics.P2JS);
        var k  = 0;
        for(var i = 0; i < this.map.length; i++)
            for(var j = 0; j < this.map[0].length; j++)
                if(this.map[i][j]){
                    var pegIndex = getRandomIndex()
                    var offsetX = getRandomIndex()
                    var offsetY = getRandomIndex()
                    
                    var x = parseInt(j * 60) - 40 + (offsetX * 1.5)
                    var y = parseInt(i * 70) + 150 + (offsetY * 1.5)
                    
                    __peg[k] = pegs.create(x, y, 'peg' + pegIndex);  
                    
                    __peg[k].scale.x = 0.6
                    __peg[k].scale.y = 0.6
                    this.physics.p2.enable(__peg[k], Phaser.Physics.p2);
                    __peg[k].body.static = true;
                    __peg[k].body.setCircle(8);
                    k++;
                }

        ballKey = 'selector';

        //putting and setting the ball 
        var ball = this.add.sprite(620, 20, ballKey);
        ball.inputEnabled = true;
        ball.input.enableDrag(true);
        ball.input.allowVerticalDrag = false;
        ball.events.onDragStop.add(function(body){
            //__roll.play()
            if(!isMuted) __bombStick.play()
            
            ball.animations.add('pin_pong')
            ball.animations.play('pin_pong', 15, true)
            
            if(!isMuted) __fallSound.play();
            
            this.physics.p2.enable(body, Phaser.Physics.p2);
            ball.body.collideWorldBounds = true;
            body.body.setCircle(30);
            ball.inputEnabled = false;

            ball.body.x += 20
            ball.body.y += 20
            
            for(var i = 0; i < __reward.length; i++){
                ball.body.createBodyCallback(__reward[i], this.hittingReward, this);    
            }
            for(var i = 0; i < __peg.length; i++){
                ball.body.createBodyCallback(__peg[i], this.hittingPeg, this);    
            }
        }, this);
    },



    //event for the collisions between ball and reward
    hittingReward: function(body, body2) { 
        if(!__collision){  
            __bombStick .stop()
            if(!isMuted)__epxplosionSound.play();
            __collision++;
            // body2.sprite.loadTexture('explosion');
            // body2.sprite.animations.add('explosion');
            // body2.sprite.animations.play('explosion', 15, false);
            var spirals = this.add.sprite(0, 0, "colors_explosion");
            spirals.animations.add('main_animation')
            spirals.animations.play('main_animation', 15, false)
            if(!isMuted)__color_exploding.play()
            if(!isMuted)__roll.play()

            body.sprite.alpha = 0;
            body.destroy();   
            var style = { font: "16px Montserrat", fill: "#fff"};
            var text = this.add.text(body.x, body.y, gamePlayState.prizesTable[__tokensResponse.playId], style);
            text.alpha = 0;
            game.add.tween(text).to({alpha: 1, top: body.y - 30}, 700, Phaser.Easing.Linear.None, true, 0, 0, false);
            setTimeout(function(){
                game.add.tween(text).to({top: body.y - 40, alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
            }, 700)

            setTimeout(function(){
                var price = gamePlayState.add.sprite(body2.x - 50, body2.y - 50, 'price' + __tokensResponse.playId);
                price.animations.add('animation');
                price.animations.play('animation', 15, false);

                setTimeout(function() {
                    setupFinalScreen()
                }, 2000)                
            }, 1500)

        }
    },

    //event for the collisions between ball and any peg
    hittingPeg: function(collision, body){
        if(!isMuted)__tickSound.play();
    }
};


function addGameplayTexts() {
    //putting needed the text on the stage
    var style = { font: "21px Montserrat", fill: "#fff"};
    gamePlayState.add.text(330 + 110, 54, 'POINTS', style);
    gamePlayState.add.text(130 + 110, 54, 'TOKENS', style);
    gamePlayState.add.text(158 + 110, 82, _userData.tokenBalance, style);
    gamePlayState.add.text(353 + 110, 82, _userData.pointBalance, style);

}


function getRandomIndex() {
    return  Math.floor((Math.random() * 12) + 6);
};

//setting all the game-states
game.state.add('loaderState', loaderState);
game.state.add('bootState', bootState);
game.state.add('gamePlayState', gamePlayState);
game.state.start('bootState');


}