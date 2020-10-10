// Global variables

var __gameId = 999;
var s3Path = 'https://s3-us-west-2.amazonaws.com/snowflyeverest/media/gameResources/magic_eight_ball';

var __userData,
    __tokensToPlayJSON,
    __tokensToPlay;


var dragButton,
    playButton,
    dynamicText,
    style,
    __playId,
    __shakeTypeValue;

var game = new Phaser.Game(560, 400, Phaser.CANVAS, 'eight-ball');

function getUserData() { 
   $.ajax({
        type: "POST", 
        url: "https://qa.staging.snowfly.com/gameapi/v1/getStartInfo", 
        dataType : "json",
        data: { gameId: __gameId },
        success: function( data ) {
            __userData =  data;

            //jsons.balance.layers[0].t.d.k[0].s.t = ""+_userData.pointBalance
            //jsons.balance.layers[1].t.d.k[0].s.t = ""+_userData.tokenBalance

            var balance = {
                container: document.getElementById("balances-container"),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                rendererSettings: {
                    progressiveLoad:false
                },

                //animationData: jsons.balance
            }
           /* var balanceAnim = bodymovin.loadAnimation(balance)
            balanceAnim.play()*/
            
            if(__userData.tokenBalance == 0){
                $('#no-tokens-screen').fadeIn()
            }
        }
    });
   return __userData; 
}


//Preload 'loading' images

var bootState = {

    preload: function(){
        //__userData = getStartData(__gameId);
       __userData = getUserData();
        this.stage.disableVisibilityChange = true;
        this.load.image('loading', s3Path+'/assets/loading.png');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // Have the game centered horizontally
        game.scale.pageAlignHorizontally = true;
        // And vertically
        game.scale.pageAlignVertically = true;
    },
    create: function(){
        //moving to the loaderState
        game.state.start('loaderState');
    }

};

var loaderState = {

    preload: function(){

        //showing loaging images
        this.stage.backgroundColor = "#fff";
        this.add.image(game.width/2 - 100, game.height/2 - 100, 'loading');

        //loading static images
        this.load.image('background', s3Path+'/assets/img/background.png');
        this.load.image('layer', s3Path+'/assets/img/opacity.png');
        this.load.image('token_ui', s3Path+'/assets/img/token-UI.png');
        this.load.image('drag_button', s3Path+'/assets/img/drag_button.png');
        this.load.image('panel_points',s3Path+'/assets/img/panel_points.png');
        this.load.image('tokens_icon', s3Path+'/assets/img/tokens_icon.png');
        this.load.image('points_icon', s3Path+'/assets/img/points_icon.png');
        this.load.image('sound_on', s3Path+'/assets/img/sound_on.png');
        this.load.image('sound_off', s3Path+'/assets/img/sound_off.png');
        this.load.image('icon-inst', './assets/img/icon-inst.png');
        this.load.image('m8b-inst', './assets/img/m8b-inst.png');
        this.load.image('start_screen', s3Path+'/assets/img/start_screen.png');
        this.load.image('bar', s3Path+'/assets/img/bar.png');
        this.load.image('nogametokens',s3Path+'/assets/nogametokens.png');

        //Loading sprites
        this.load.spritesheet('play_button', s3Path+'/assets/sprites/play_button/play_button.png', 52, 52, 11);
        this.load.spritesheet('number', s3Path+'/assets/sprites/final_animations/numbers/n.png', 51, 59, 10);
        this.load.spritesheet('start_button', s3Path+'/assets/sprites/start_button/start_button.png', 97, 33, 11);
        this.load.spritesheet('again_button', s3Path+'/assets/sprites/again_button/again_button.png', 147, 33, 10);
        this.load.spritesheet('form', s3Path+'/assets/sprites/arrow/arrow.png', 22, 34, 14);
        this.load.spritesheet('clean_button', s3Path+'/assets/sprites/clean_button/clean_button.png', 91, 35, 9);
        this.load.spritesheet('shakeit_button', s3Path+'/assets/sprites/shakeit_button/shakeit_button.png', 107, 35, 9);
        this.load.spritesheet('shake', s3Path+'/assets/sprites/shakes/shake/shake.png', 326, 308, 43);
        this.load.spritesheet('100-yes', s3Path+'/assets/sprites/answers/100-yes/100-yes.png', 326, 308, 43);
        this.load.spritesheet('absolutely', s3Path+'/assets/sprites/answers/absolutely/absolutely.png', 326, 308, 43);
        this.load.spritesheet('for-sure', s3Path+'/assets/sprites/answers/for-sure/for-sure.png', 326, 308, 43);
        this.load.spritesheet('maybe', s3Path+'/assets/sprites/answers/maybe/maybe.png', 326, 308, 43);
        this.load.spritesheet('no-way', s3Path+'/assets/sprites/answers/no-way/no-way.png', 326, 308, 43);
        this.load.spritesheet('no-chance', s3Path+'/assets/sprites/answers/no-chance/no-chance.png', 326, 308, 43);
        this.load.spritesheet('possibly', s3Path+'/assets/sprites/answers/possibly/possibly.png', 326, 308, 43);
        this.load.spritesheet('very-unlikely', s3Path+'/assets/sprites/answers/very-unlikely/very-unlikely.png', 326, 308, 43);
        this.load.spritesheet('rings', s3Path+'/assets/sprites/rings/rings.png', 560, 400, 26);
        this.load.spritesheet('hard', s3Path+'/assets/sprites/hard/hard.png', 33, 18, 10);
        this.load.spritesheet('light', s3Path+'/assets/sprites/light/light.png', 32, 18, 10);
        this.load.spritesheet('moderate', s3Path+'/assets/sprites/moderate/moderate.png', 60, 18, 10);
        this.load.spritesheet('vigorous', s3Path+'/assets/sprites/vigorous/vigorous.png', 57, 18, 10);

        //Loading sounds
        this.load.audio('cheer', s3Path+'/assets/sounds/cheer.mp3');
        this.load.audio('shaking', s3Path+'/assets/sounds/shaking.mp3');
        this.load.audio('sigh', s3Path+'/assets/sounds/sigh.mp3');

    },
    create: function(){

        //moving to the first gameplay state
        game.state.start('initState');

    },
}

var initState = {
    create: function(){

        game.add.image(0, 0, 'start_screen');

        var startButton = this.add.sprite(game.width / 2 - 50, 350, 'start_button');
        startButton.animations.add('click', [2, 3, 4, 5, 6, 7, 8, 9, 10]);

        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(function(){
            startButton.animations.play('click', 15, false);
            setTimeout(function(){
                game.state.start('tokensState');
            }, 500);
        }, this);

        startButton.events.onInputOver.add(function(){
            startButton.animations.add('hover', [1, 2]);
            startButton.animations.play('hover', 15, false);
        });

        startButton.events.onInputOut.add(function(){
            startButton.animations.add('no-hover', [2, 1, 0]);
            startButton.animations.play('no-hover', 15, false);
        });
    }
};

var tokensState = {
    create: function(){

        //__userData = getStartData(__gameId);
        __userData = getUserData();
        let notoken =  {status:0,message:'Users session has expired.'}
        if(!__userData.tokenBalance){
            game.add.image(0,0,'nogametokens');
            var goBack = game.add.text(470, 370,'Go back',{fontSize:'12px',fill:'#fff', fontFamily: 'Montserrat'});
            console.log(goBack);
            goBack.inputEnabled = true;
            goBack.events.onInputOver.add(function(){
                goBack.setStyle({fill: '#eee', fontSize: '12px'});
            });

            goBack.events.onInputOut.add(function(){
                goBack.setStyle({fill: '#fff', fontSize: '12px'});
            });

            goBack.events.onInputDown.add(function(){
                window.history.back();
            });
        }else{
            game.add.image(0, 0, 'background');
            game.add.image(0, 0, 'layer');
            game.add.image(game.width / 2 - 234, game.height / 2 - 102, 'token_ui');

            playButton = game.add.sprite(460, game.height/2 - 26, 'play_button');
            playButton.animations.add('disabled', [0]);
            playButton.animations.add('available', [1]);
            playButton.animations.add('clicked', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
            playButton.animations.play('available', 15);
            playButton.inputEnabled = true;

            playButton.events.onInputOver.add(function(){
                playButton.animations.add('hover', [1, 2]);
                playButton.animations.play('hover', 15, false);
            });

            playButton.events.onInputOut.add(function(){
                playButton.animations.add('no-hover', [2, 1]);
                playButton.animations.play('no-hover', 15, false);
            });

            playButton.events.onInputDown.add(function(){
                playButton.play('clicked');
                setTimeout(function(){
                    game.state.start('gamePlayState');
                },1000);
            });
            style = { font: "10px Montserrat", fill: "#fff"};
            var text = game.add.text(480, 5, 'TOKENS', style);
            text = game.add.text(480, 20, 'POINTS', style);
            text = game.add.text(535, 5, __userData.tokenBalance, style);
            text = game.add.text(535, 20, __userData.pointBalance, style);
            style = { font: "14px Montserrat", fill: "#000"};
            dynamicText = game.add.text(268, 122, '1', style);

            var sound_on = this.add.image(5, 5, 'sound_on');
            var sound_off = this.add.image(5, 20, 'sound_off');
            var icon_inst = this.add.image(40, 5, 'icon-inst');
            var m8b_inst = this.add.image(0, 0, 'm8b-inst');
            m8b_inst.alpha = 0;
            icon_inst.height = 25;
            icon_inst.width = 25;
            if(!game.sound.mute)sound_off.alpha = 0;
            else sound_on.alpha = 0;
            sound_on.inputEnabled = true;
            sound_on.events.onInputDown.add(function(target){
                game.sound.mute = true;
                sound_off.alpha = 1;
                target.alpha = 0;
            }, this);

            sound_off.inputEnabled = true;
            sound_off.events.onInputDown.add(function(target){
                game.sound.mute = false;
                sound_on.alpha = 1;
                target.alpha = 0;
            }, this);

            icon_inst.inputEnabled = true;
            icon_inst.events.onInputDown.add(function(target){
                if(m8b_inst.alpha == 0){ 
                    m8b_inst.alpha = 1;
                    m8b_inst.bringToTop();
                }
                else if(m8b_inst.alpha == 1) m8b_inst.alpha = 0;
            }, this)

            

            var bar = game.add.image(game.width / 2 - 192, game.height / 2 - 7, 'bar');
            dragButton = game.add.sprite(92, game.height / 2 - 8, 'drag_button');
            dragButton.inputEnabled = true;

            dragButton.input.enableDrag(true);
            dragButton.input.allowVerticalDrag = false;
            dragButton.events.onDragUpdate.add(updateDrag);

            bar.inputEnabled = true;
            bar.events.onInputDown.add(function(){
                dragButton.position.x = game.input.mousePointer.x - 10;
                updateDrag();
            });

            var light = game.add.sprite(85,220,'light');
            var moderate = game.add.sprite(172,220,'moderate');
            var vigorous = game.add.sprite(282,220,'vigorous');
            var hard = game.add.sprite(410,220,'hard');

            light.animations.add('static', [0]);
            light.animations.play('static', 15, false);
            moderate.animations.add('static', [0]);
            moderate.animations.play('static', 15, false);
            vigorous.animations.add('static', [0]);
            vigorous.animations.play('static', 15, false);
            hard.animations.add('static', [0]);
            hard.animations.play('static', 15, false);

            light.animations.add('moving', [1,2,3,4,5,6,7,8,9]);
            moderate.animations.add('moving', [1,2,3,4,5,6,7,8,9]);
            vigorous.animations.add('moving', [1,2,3,4,5,6,7,8,9]);
            hard.animations.add('moving', [1,2,3,4,5,6,7,8,9]);

            light.inputEnabled = true;
            moderate.inputEnabled = true;
            vigorous.inputEnabled = true;
            hard.inputEnabled = true;

            light.events.onInputOver.add(function(){
                light.animations.play('moving', 15, false);
            });
            moderate.events.onInputOver.add(function(){
                moderate.animations.play('moving', 15, false);
            });
            vigorous.events.onInputOver.add(function(){
                vigorous.animations.play('moving', 15, false);
            });
            hard.events.onInputOver.add(function(){
                hard.animations.play('moving', 15, false);
            });

            light.events.onInputDown.add(function(){dragButton.position.x = 92;updateDrag();});
            moderate.events.onInputDown.add(function(){dragButton.position.x = 182;updateDrag();});
            vigorous.events.onInputDown.add(function(){dragButton.position.x = 292;updateDrag();});
            hard.events.onInputDown.add(function(){dragButton.position.x = 433;updateDrag();});
        }
        if(__userData.status == 0){
                $('#about').fadeOut()
                sound_on.visible;
                sound_off.visible;
                $('canvas').fadeOut();
                $('#t-s').text(__userData.message)
                $('#no-server-request').fadeIn()
                }
    }
};

var gamePlayState = {

    numbersArray: [
        [1,2,3,4,5,6,7,8,9,0],
        [2,3,4,5,6,7,8,9,0,1],
        [3,4,5,6,7,8,9,0,1,2],
        [4,5,6,7,8,9,0,1,2,3],
        [5,6,7,8,9,0,1,2,3,4],
        [6,7,8,9,0,1,2,3,4,5],
        [7,8,9,0,1,2,3,4,5,6],
        [8,9,0,1,2,3,4,5,6,7],
        [9,0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8,9]
    ],

    shakeType: {
        fps: [20, 30, 35, 40],
        repeat: [0, 4, 8, 16]
        //[0-2] 250ms
        //[3-5] 666ms
        //[6-7] 1140ms
        //[8-9] 2000ms
    },

    prizesTable: [0, 2, 4, 8, 10, 25, 100, 250, 500, 2500, 5000],

    finalKeys: ['',"very-unlikely", "possibly", "no-chance", "no-way", "maybe", "for-sure", "absolutely", "100-yes"],

    create: function(){

        __tokensToPlayJSON = playGame(__gameId, parseInt(dynamicText._text));
        __playId = __tokensToPlayJSON.playId;

        if(__playId > 0 && __playId  < 2) __shakeTypeValue = 0
        else if(__playId >= 2 && __playId  < 5) __shakeTypeValue = 1
        else if(__playId >= 5 && __playId  < 8) __shakeTypeValue = 2
        else if(__playId >= 8 && __playId  <= 10 ) __shakeTypeValue = 3
        if(__playId > 8)__playId = 8;

        game.add.image(0, 0, 'background');

        // var style = { font: "10px Montserrat", fill: "#fff"};
        // var text = game.add.text(480, 5, 'TOKENS', style);
        //     text = game.add.text(480, 20, 'POINTS', style);
        //     text = game.add.text(535, 5, __userData.tokenBalance, style);
        //     text = game.add.text(535, 20, __userData.pointBalance, style);

        var rings = game.add.sprite(0, 0, 'rings');
        rings.animations.add('moving');
        var cleanButton = game.add.sprite(170, game.height/2 + 30, 'clean_button');
        cleanButton.animations.add('click');
        var shakeitButton = game.add.sprite(280, game.height/2 + 30, 'shakeit_button');
        shakeitButton.animations.add('click');

        var form  = game.add.sprite(game.width/2 - 202, game.height/2 - 28, 'form');
        form.animations.add('animation');
        form.animations.play('animation', 20);

        var shakeAnimation = game.add.sprite(game.width / 2 - 163, 100, 'shake');

        game.add.plugin(Fabrique.Plugins.InputField);
        var input = game.add.inputField(102, 170, {
            cursorColor: '#fff',
            backgroundColor: '#28163A',
            borderColor: '#28163A',
            font: '18px Montserrat',
            fill: '#000',
            fontWeight: '300',
            width: 355,
            height: 24,
            padding: 8,
            placeHolder: 'Enter your question',
            fill: '#fff',
        });

        cleanButton.inputEnabled = true;
        cleanButton.events.onInputDown.add(function(){
            input.value = '';
            cleanButton.animations.play('click', 15, false);
        }, this);

        shakeitButton.inputEnabled = true;
        shakeitButton.events.onInputDown.add(function(){
            var shakingSound = game.add.audio('shaking');
            shakeitButton.animations.play('click', 15, false);
            if(input.value.length){
                setTimeout(function(){shakingSound.loop = true; shakingSound.play();}, 300);
                rings.animations.play('moving');
                game.add.tween(cleanButton).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                game.add.tween(shakeitButton).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                game.add.tween(form).to({y: 8}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                game.add.tween(input).to({y: 4}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
                shakeAnimation.animations.add('init', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);
                shakeAnimation.animations.add('shaking', [23,24,25,26,27,28]);
                shakeAnimation.animations.play('init', 20, false);
                shakeAnimation.events.onAnimationComplete.add(function(){
                    shakeAnimation.play('shaking', gamePlayState.shakeType.fps[__shakeTypeValue], true)
                    var iterator = 0;
                    shakeAnimation.events.onAnimationLoop.add(function(){
                        iterator++
                        if(iterator > gamePlayState.shakeType.repeat[__shakeTypeValue]){
                            shakeAnimation.animations.stop(null, true);
                            shakingSound.destroy();

                            shakeAnimation.alpha = 0;
                            var finalAnimation = game.add.sprite(game.width / 2 - 163, 100, gamePlayState.finalKeys[__playId]);

                            finalAnimation.animations.add('showing', [0,1,2,3,4,5,6,7,8,9,10,11,11,11,11,11,11,11,11,11,10,9,8,7,6,5,4,3,2,1,0]);
                            finalAnimation.animations.play('showing', 20, false);
                            if(__playId > 4){game.add.audio('cheer').play();}
                            else if(__playId <= 4){game.add.audio('sigh').play();}


                            finalAnimation.events.onAnimationComplete.add(function(){
                                finalAnimation.destroy();
                                var altShake = game.add.sprite(game.width / 2 - 163, 100, 'shake');
                                altShake.animations.add('shaking', [23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24,25,26,27,28,23,24]);
                                altShake.play('shaking', 20, false);
                                var shakingSound = game.add.audio('shaking');
                                setTimeout(function(){shakingSound.loop = true; shakingSound.play();}, 300);
                                altShake.events.onAnimationComplete.add(function(){
                                    shakingSound.destroy();
                                    setTimeout(function(){
                                        var againButton = game.add.sprite(game.width / 2 + 110, game.height - 68, 'again_button');
                                        againButton.animations.add('click');

                                        againButton.events.onInputOver.add(function(){
                                            againButton.animations.add('hover', [4]);
                                            againButton.animations.play('hover');
                                        });

                                        againButton.events.onInputOut.add(function(){
                                            againButton.animations.add('no-hover', [0]);
                                            againButton.animations.play('no-hover');
                                        });

                                        //setting the event for the start button
                                        againButton.inputEnabled = true;
                                        againButton.events.onInputDown.add(function(){
                                            againButton.animations.play('click', 15, false);
                                            setTimeout(function(){
                                                window.top.updateBalances();
                                                game.state.start('tokensState');
                                            }, 500);
                                        }, this);


                                        //Add text to the final score.
                                        var style = { font: "16px Montserrat", fill: "#FFD700"};
                                        var text = game.add.text(40, 300, 'POINTS WON', style);
                                        //text = game.add.text(200, 350, __userData.tokenBalance, style);
                                        var style = { font: "10px Montserrat", fill: "#FFD700"};


                                        var tokensPlayed = __tokensToPlayJSON.tokensPlayed;
                                        var s = "";
                                        if(tokensPlayed > 1){
                                            s = "S";
                                        }

                                        var text = game.add.text(48, 375, tokensPlayed+' TOKEN'+s+' PLAYED', style);
                                        //var amount = gamePlayState.prizesTable[__playId];
                                        var amount = __tokensToPlayJSON.totalPoints;
                                        var n = ("" + amount).split("");
                                        for(var i = 0; i < amount.toString().length; i++){
                                            var number = gamePlayState.add.sprite((parseInt(i * 34) + 100) - (25 * (n.length)), game.world.centerY + 120, 'number');
                                            number.scale.setTo(.8, .8);
                                            number.animations.add('animation', gamePlayState.numbersArray[parseInt(n[i])]);
                                            number.animations.play('animation', 20, false);
                                        }
                                    },500)

                                });

                            });

                        }
                    });
                });
            }
        }, this);

        var sound_on = this.add.image(5, 5, 'sound_on');
        var sound_off = this.add.image(5, 20, 'sound_off');

        if(!game.sound.mute)sound_off.alpha = 0;

        else sound_on.alpha = 0;
        sound_on.inputEnabled = true;
        sound_on.events.onInputDown.add(function(target){
            game.sound.mute = true;
            sound_off.alpha = 1;
            target.alpha = 0;
        }, this);

        sound_off.inputEnabled = true;
        sound_off.events.onInputDown.add(function(target){
            game.sound.mute = false;
            sound_on.alpha = 1;
            target.alpha = 0;
        }, this);

        //try adding text later so it will always show up
        var style = { font: "10px Montserrat", fill: "#fff"};
        var text = game.add.text(480, 5, 'TOKENS', style);
        text = game.add.text(480, 20, 'POINTS', style);
        text = game.add.text(535, 5, __userData.tokenBalance, style);
        text = game.add.text(535, 20, __userData.pointBalance, style);


    }

};


//setting all the game-states
game.state.add('loaderState', loaderState);
game.state.add('bootState', bootState);
game.state.add('tokensState', tokensState);
game.state.add('initState', initState);
game.state.add('gamePlayState', gamePlayState);
game.state.start('bootState');

var limitRight = 432;
function updateDrag(){

    dragButton.position.y = 192;
    if(dragButton.position.x > limitRight)
        dragButton.position.x = limitRight;
    else if(dragButton.position.x < 92)
        dragButton.position.x = 92;

    var draggedVal;
    var position = dragButton.position.x;

    if(position >= 92 && position < (190))
        draggedVal = (((position - 92) * 11) / 98);
    else if(position >= 190 && position < (285))
        draggedVal = (((position - 190) * 32) / 98) + 10;
    else if(position >= (285))
        draggedVal = (((position - 285) * 140) / 98) + 40;

    if(position > 102) playButton.play('available');
    //if(position == 92) playButton.play('disabled');

    playButton.inputEnabled = true;
    playButton.events.onInputDown.add(function(){
        if(position >= 92){
            playButton.play('clicked');
            setTimeout(function(){
                game.state.start('gamePlayState');
            },1000)
        }
    });

    if(draggedVal > __userData.tokenBalance){
        limitRight = position++;
        draggedVal = __userData.tokenBalance;
    }
    if(draggedVal < 1)draggedVal = 1;
    dynamicText.destroy();
    dynamicText = game.add.text(268, 122, parseInt(draggedVal), style);
}