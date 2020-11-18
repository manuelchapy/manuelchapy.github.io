var _userData;
var _gameID = 999;
var loadingScreen;
var slider;
var _tokensToPlay = 1;
var totalPoints = 1;
var gameJSONs = gameJsons;
var startScreen;
var balance;
var gameplay;
var feeding;
var isMuted = false;
var feedingButton;
var startSong, gameplaySong, feedSong, hit, feeding, sid1, sid2, x;
var i = 0; i2= 0;
var degrees = [-60, -45, -30, -15, 4, 20, 35, 50, 65, 83];
var tokenRange;
var rango;
var balanceAnim;
var abBalls;
var balls10 = [0,1,2,3,4,5,6,7,8,9];
var balls20 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var balls25 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var paintGroupOne= [ 4,4,4,4,4,4,4,4,6,5,6,5,6,5,4,4,6,5,6,5,6,5,6,6,6,6,6,5,5,6,5 ];
var paintGroupTwo= [ 6 ]; 
var paintGroupThree= [ 6 ];
var slotPoints;
var slotPointsX;
var randomPoints;
var randomPointsX;
var pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10;
let a101, a102, a103, a104, a105, a106, a107, a108, a109, a1010;
let b101, b102, b103, b104, b105, b106, b107, b108, b019, b1010;
let a201, a202, a203, a204, a205, a206, a207, a208, a209, a2010;
let b201, b202, b203, b204, b205, b206, b207, b208, b209, b2010;
let a251, a252, a253, a254, a255, a256, a257, a258, a259, a2510;
let b251, b252, b253, b254, b255, b256, b257, b258, b259, b2510;

let b25Win, a25Win, b20Win, a20Win, b10Win, a10Win, slot;

let b25ticks, a25ticks, b20ticks, a20ticks, b10ticks, a10ticks;


var color = {
           color1: "#ffffff",
           color2: "#ffffff",
           color3: "#ffffff",
           color4: "#ffffff",
           color5: "#ffffff",
           color6: "#ffffff"
        };


function init(){
    startSong = document.getElementById('startSong');
    gameplaySong = document.getElementById('gameplaySong');
    hit = document.getElementById('hit');
    feeding = document.getElementById('feeding');

    a101 = document.getElementById('10a-1'); 
    a102 = document.getElementById('10a-2'); 
    a103 = document.getElementById('10a-3'); 
    a104 = document.getElementById('10a-4'); 
    a105 = document.getElementById('10a-5'); 
    a106 = document.getElementById('10a-6'); 
    a107 = document.getElementById('10a-7'); 
    a108 = document.getElementById('10a-8'); 
    a109 = document.getElementById('10a-9'); 
    a1010 = document.getElementById('10a-10');

    b101 = document.getElementById('10b-1'); 
    b102 = document.getElementById('10b-2'); 
    b103 = document.getElementById('10b-3'); 
    b104 = document.getElementById('10b-4'); 
    b105 = document.getElementById('10b-5'); 
    b106 = document.getElementById('10b-6'); 
    b107 = document.getElementById('10b-7'); 
    b108 = document.getElementById('10b-8'); 
    b109 = document.getElementById('10b-9'); 
    b1010 = document.getElementById('10b-10');

    a201 = document.getElementById('20a-1'); 
    a202 = document.getElementById('20a-2'); 
    a203 = document.getElementById('20a-3'); 
    a204 = document.getElementById('20a-4'); 
    a205 = document.getElementById('20a-5'); 
    a206 = document.getElementById('20a-6'); 
    a207 = document.getElementById('20a-7'); 
    a208 = document.getElementById('20a-8'); 
    a209 = document.getElementById('20a-9'); 
    a2010 = document.getElementById('20a-10');

    b201 = document.getElementById('20b-1'); 
    b202 = document.getElementById('20b-2'); 
    b203 = document.getElementById('20b-3'); 
    b204 = document.getElementById('20b-4'); 
    b205 = document.getElementById('20b-5'); 
    b206 = document.getElementById('20b-6'); 
    b207 = document.getElementById('20b-7'); 
    b208 = document.getElementById('20b-8'); 
    b209 = document.getElementById('20b-9'); 
    b2010 = document.getElementById('20b-10');

    a251 = document.getElementById('25a-1'); 
    a252 = document.getElementById('25a-2'); 
    a253 = document.getElementById('25a-3'); 
    a254 = document.getElementById('25a-4'); 
    a255 = document.getElementById('25a-5'); 
    a256 = document.getElementById('25a-6'); 
    a257 = document.getElementById('25a-7'); 
    a258 = document.getElementById('25a-8'); 
    a259 = document.getElementById('25a-9'); 
    a2510 = document.getElementById('25a-10');

    b251 = document.getElementById('25b-1'); 
    b252 = document.getElementById('25b-2'); 
    b253 = document.getElementById('25b-3'); 
    b254 = document.getElementById('25b-4'); 
    b255 = document.getElementById('25b-5'); 
    b256 = document.getElementById('25b-6'); 
    b257 = document.getElementById('25b-7'); 
    b258 = document.getElementById('25b-8'); 
    b259 = document.getElementById('25b-9'); 
    b2510 = document.getElementById('25b-10');

    b25Win = document.getElementById('25b-win');
    a25Win = document.getElementById('25a-win');
    b20Win = document.getElementById('20b-win');
    a20Win = document.getElementById('20a-win');
    b10Win = document.getElementById('10b-win');
    a10Win = document.getElementById('10a-win');
    slot = document.getElementById('slot');

    b25ticks = document.getElementById('25b-ticks');
    a25ticks = document.getElementById('25a-ticks');
    b20ticks = document.getElementById('20b-ticks');
    a20ticks = document.getElementById('20a-ticks');
    b10ticks = document.getElementById('10b-ticks');
    a10ticks = document.getElementById('10a-ticks');

    startSong.loop = true
    startSong.play()

    document.addEventListener('touchmove', function(e){
        e.preventDefault();
    })

$('.layer').css({
	    height: ($('.layer').width() * 720 / 720) + "px", 
        maxHeight: window.innerHeight + "px",
        maxWidth: ($(window).height() * 720 / 720) + "px"
    })

    $('.super-container').css({
        maxWidth: ($(window).height() * 720 / 720) + "px"
    })

    slider = document.getElementById('myRange');

        $.ajax({
        type: "POST", 
        url: "https://qa.staging.snowfly.com/gameapi/v1/getStartInfo", 
        data: { gameId: _gameID },
        success: function( data ) {
           _userData = data;
           //console.log('tokens to play')
            gameJSONs.gamePlay.assets[0].layers[1].t.d.k[0].s.t = _userData.pointBalance+"";
            gameJSONs.balance.layers[0].t.d.k[0].s.t = _userData.tokenBalance+"";
            gameJSONs.balance.layers[1].t.d.k[0].s.t = _userData.pointBalance+"";
                totalPoints = _userData.pointBalance;
              //totalPoints = 200;
           if (_userData.tokenBalance == 0){ 
                $('#no-tokens-screen').css({display: 'block', zIndex: 999}) 
           }
              if(_userData.status == 0){
                //$('#t-s').text(_userData.message)
                //$('#no-server-request').fadeIn()
                $('#no-tokens-screen').css({display: 'block', zIndex: 1000})
                }

           

            if (_userData.tokenBalance < 250) {
                    slider.max = _userData.tokenBalance;
                    gameJSONs.balance.layers[10].t.d.k[0].s.t = slider.max+""; 
                } else {
                    slider.max = 250;
                    gameJSONs.balance.layers[10].t.d.k[0].s.t = slider.max+"";
                }

            balanceAnim = lottie.loadAnimation(balance)
               

            slider.oninput = function() {
                
                    tokensJAnim.renderer.elements[0].updateDocumentData({
                        t: Math.round(slider.value)+"", s: 30
                    });
            
                tokensJAnim.play();

            }
           

            function updateTrackColor () {
                if (_userData.tokenBalance < 50) {
                    x = slider.value * 100 / _userData.tokenBalance 
                    var linear = -(100) + ((x-0)/(100-0)) * (100-(-(100)))
                    x = linear
                } else if (_userData.tokenBalance >= 50 && _userData.tokenBalance <= 250) {
                    x = slider.value * 100 / _userData.tokenBalance
                } else {
                    x = slider.value * 100 / 250
                }
                var color = 'linear-gradient(90deg, rgb(32,229,98)' + x + '%, rgb(214,214,214)' + x + '%)';
                slider.style.background = color
            }

            slider.addEventListener('mousemove', updateTrackColor);
            slider.addEventListener('touchmove', updateTrackColor);

        },
        
        error: function(data){
            $('#no-tokens-screen').css({display: 'block', zIndex: 1000}) 
        }
    });

        balance = {
        container: document.getElementById("balance"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balance
    }
    

        var tokensJ = {
        container: document.getElementById("tokens-amount"),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.tokensToPlay
    }

    tokensJAnim = lottie.loadAnimation(tokensJ)
    tokensJAnim.addEventListener("DOMLoaded", function() {
        
         tokensJAnim.renderer.elements[0].updateDocumentData({t: slider.value+"", s:120});
         //tokensJAnim.play()
    });

    $('#loading-screen').fadeOut()
        
        var startScreen = {
        container: document.getElementById("start-screen"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.startScreen
    }
    var startScreenAnim = lottie.loadAnimation(startScreen)
    startScreenAnim.play()

    $('.sound-toggle').click(function(){
        hit.play()
        isMuted = !isMuted
        setSoundSettings()
    })

        var startButton = {
        container: document.getElementById("start-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.startButton
    }
    var startButtonAnim = lottie.loadAnimation(startButton)
    startButtonAnim.play()

    if(window.location.href.match("no-init") != null){
        isMuted = (getParameterByName('isMuted') == 'true');
        setSoundSettings()
        startButtonAnim.playSegments([1, 10], true)
        $('#init-screen').fadeOut(function(){
            setupInitLayers()
        })
    }

        $('#start-button').click(function(){
        $(this).addClass('disabled')
        if(isMuted == 0){
            hit.play()
        }
        $('#bar').css({zIndex: 112})
        startButtonAnim.playSegments([26, 36], true)
        startButtonAnim.play()
        $('#start-screen').fadeOut(function(){
            $('#s-layer').addClass('disabled')
            $('#start-button').fadeOut()
            setupInitLayers()
        })
    })

   

}

function playAgain(){
    $('#play-again').click(function(){
        //console.log('entro en play againplaya!')
                $(this).addClass('disabled')
                if(isMuted == 0){
                    hit.play()
                }
                setTimeout(function(){
                    var mainURL = location.protocol + '//' + location.host + location.pathname
                    window.location.href = mainURL+ "?no-init=true&isMuted=" + isMuted
                    $('#s-layer').hide();

                },500)
            }) 
}

function moreGames(){
    $('#play-more').click(function(){
        //console.log('entro en play more!')
                $(this).addClass('disabled')
                if(isMuted == 0){
                    hit.play()
                }
                setTimeout(function(){
                    var mainURL = location.protocol + '//' + location.host + location.pathname
                    window.location.href = "https://google.com";
                    $('#s-layer').hide();

                },500)
            }) 
}

function setupInitLayers(){
    var playButton = {
        container: document.getElementById("play-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: {"v":"4.10.1","fr":24,"ip":0,"op":12,"w":250,"h":100,"nm":"Play_B","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"PLAY","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-31.506,325.509,0],"ix":2},"a":{"a":0,"k":[2.079,-69.7,0],"ix":1},"s":{"a":0,"k":[111.016,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.198,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.967,1.542],[0,3.319],[1.927,1.594]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[4.065,0],[1.966,-1.542],[0,-3.319],[-1.927,-1.594]],"v":[[-38.451,-83.401],[-47.955,-83.401],[-47.955,-56],[-43.282,-56],[-43.282,-64.036],[-38.372,-64.036],[-29.323,-66.349],[-26.373,-73.64],[-29.264,-81.01]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.587,0],[0,0],[0,0],[0,0],[-1.188,-0.784],[0,-1.894],[0.937,-0.98]],"o":[[0,0],[0,0],[0,0],[2.534,0],[1.188,0.784],[0,1.895],[-0.937,0.98]],"v":[[-37.857,-68.23],[-43.282,-68.23],[-43.282,-79.206],[-38.53,-79.206],[-32.947,-78.03],[-31.165,-74.012],[-32.57,-69.7]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"P","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-3.564,-56],[-3.564,-60.39],[-16.196,-60.39],[-16.196,-83.401],[-20.869,-83.401],[-20.869,-56]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"L","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[19.325,-62.233],[22.097,-56],[27.086,-56],[14.89,-83.401],[9.9,-83.401],[-2.297,-56],[2.693,-56],[5.465,-62.233]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[7.366,-66.506],[12.395,-77.795],[17.424,-66.506]],"c":true},"ix":2},"nm":"A","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"A","np":3,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[41.817,-66.819],[52.113,-83.401],[47.005,-83.401],[39.441,-70.935],[31.878,-83.401],[26.769,-83.401],[37.065,-66.819],[37.065,-56],[41.817,-56]],"c":true},"ix":2},"nm":"Y","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Y","np":2,"cix":2,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Mask","parent":4,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-28.263,325.749,0],"ix":2},"a":{"a":0,"k":[-28.263,325.749,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[249.102,71.856],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.263,325.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle","parent":4,"tt":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.51],"y":[1]},"o":{"x":[0.49],"y":[0]},"n":["0p51_1_0p49_0"],"t":0,"s":[0],"e":[33]},{"i":{"x":[0.51],"y":[1]},"o":{"x":[0.49],"y":[0]},"n":["0p51_1_0p49_0"],"t":4.714,"s":[33],"e":[0]},{"t":12}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-28.263,324.21,0],"ix":2},"a":{"a":0,"k":[-5,7,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.51,0.51,0.51],"y":[1,1,1]},"o":{"x":[0.49,0.49,0.49],"y":[0,0,0]},"n":["0p51_1_0p49_0","0p51_1_0p49_0","0p51_1_0p49_0"],"t":1.571,"s":[0,0,100],"e":[215.777,265.571,100]},{"t":10}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[140,140],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-5,7],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Button","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[127,84.467,0],"ix":2},"a":{"a":0,"k":[-28.263,361.677,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.44,0.44,0.44],"y":[1,1,1]},"o":{"x":[0.56,0.56,0.56],"y":[0,0,0]},"n":["0p44_1_0p56_0","0p44_1_0p56_0","0p44_1_0p56_0"],"t":0,"s":[90.077,100,100],"e":[83,92.143,100]},{"i":{"x":[0.44,0.44,0.44],"y":[1,1,1]},"o":{"x":[0.56,0.56,0.56],"y":[0,0,0]},"n":["0p44_1_0p56_0","0p44_1_0p56_0","0p44_1_0p56_0"],"t":5,"s":[83,92.143,100],"e":[90.077,100,100]},{"t":11}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[249.102,71.856],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":55,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.305499147901,0.580392156863,0.184359860888,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.117647058824,0.780392156863,0.36862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.263,325.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Button 2","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-28.263,331.774,0],"ix":2},"a":{"a":0,"k":[-28.263,325.749,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.44,0.44,0.44],"y":[1,1,1]},"o":{"x":[0.56,0.56,0.56],"y":[0,0,0]},"n":["0p44_1_0p56_0","0p44_1_0p56_0","0p44_1_0p56_0"],"t":0,"s":[100.426,100.426,100],"e":[92.536,92.536,100]},{"i":{"x":[0.44,0.44,0.44],"y":[1,1,1]},"o":{"x":[0.56,0.56,0.56],"y":[0,0,0]},"n":["0p44_1_0p56_0","0p44_1_0p56_0","0p44_1_0p56_0"],"t":5,"s":[92.536,92.536,100],"e":[100.426,100.426,100]},{"t":11}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[249.102,71.856],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":55,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0.305499147901,0.580392156863,0.184359860888,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011626296885,0.494117647059,0.195029434503,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-28.263,325.749],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":12,"st":0,"bm":0}]}
    }
    var playButtonAnim = lottie.loadAnimation(playButton);
    playButtonAnim.playSegments([0, 2], true);

        $('#play-button').click(function(){
        $(this).addClass('disable')
        playButtonAnim.play()
        playButtonAnim.playSegments([3, 13], true);
        $('#init-animations').fadeOut();
        if(isMuted == 0){
            hit.play()
        }
    })

    $('#play-button').click(function(){
        playButtonAnim.playSegments([3, 13], true)
        $(this).addClass('disabled')
        if(isMuted == 0){
            hit.play()
        }

        $.ajax({
            type: "POST", 
            url: "https://qa.staging.snowfly.com/gameapi/v1/playGame", 
            data: { tokens: slider.value, gameId: _gameID },
            success: function( data ) {
                gameJSONs.gamePlay.assets[0].layers[0].t.d.k[0].s.t  = slider.value+"";
                startSong.pause()
                _tokensToPlay = slider.value
                playID = data.playId
               //playID = 1;
                __tokensResponse = data;
                ////console.log(playID);
                ////console.log(__tokensResponse.totalPoints);
                setUpWinning()
            }
        }); 
    })
}

function redBall250(){
  
           color.color1 = "#eaabb2";
           color.color2 = "#ea7387";
           color.color3 = "#ea3147";
        

        $('.color-1').css({fill: color.color1})
        $('.color-2').css({fill: color.color2})
        $('.color-3').css({fill: color.color3})
}

function redBall(){
  
           color.color4 = "#eaabb2";
           color.color5 = "#ea7387";
           color.color6 = "#ea3147";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function yellowBall(){
   
           color.color4 = "#ffe8b5";
           color.color5 = "#ffd759";
           color.color6 = "#eabd42";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function blueBall(){
           //console.log('entro en blueball')
           color.color4 = "#d3dbe8";
           color.color5 = "#90b2e8";
           color.color6 = "#4382e8";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function greenBall(){

           color.color4 = "#dce3de";
           color.color5 = "#8edba3";
           color.color6 = "#43e86f";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function whiteBall(){

           color.color4 = "#ffffff";
           color.color5 = "#dbdbdb";
           color.color6 = "#c1c1c1";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function purpleBall(){
 
           color.color4 = "#e0dae8";
           color.color5 = "#af82e8";
           color.color6 = "#af82e8";
        

        $('.color-4').css({fill: color.color4})
        $('.color-5').css({fill: color.color5})
        $('.color-6').css({fill: color.color6})
}

function setColor10(){

    //console.log('antes del suffle', balls10);
    balls10 = shuffle(balls10);
    //console.log('despues del shuffle', balls10);

}

function setColor20(){

    //console.log('antes del suffle', balls20);
    balls20 = shuffle(balls20);
    //console.log('despues del shuffle', balls20);

}

function setColor25(){

    //console.log('antes del suffle', balls25);
    balls25 = shuffle(balls25);
    //console.log('despues del shuffle', balls25);

}

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    //console.log('EN EL SHUFFLE', a)
    return a;
  }



function setUpWinning(){
    i2 = 1;
    if(isMuted == 0){
            slot.play()
        }
    //console.log('puntos totales', totalPoints);
    //console.log('el playID', playID);
    gameplaySong.play()
    gameJSONs.gamePlay.assets[0].layers[0].nm[playID-1] = 1;
    gameJSONs.gamePlay.layers[0].nm[playID-1] = 1;
    gameJSONs.gamePlay.layers[0].ef[playID-1].ef[0].v.k = 1

 function setGamePlay(){
    gameplay = {
        container: document.getElementById("gameplay"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.gamePlay
     }
     

        var gameplayAnim = lottie.loadAnimation(gameplay)
        gameplayAnim.play();
        setTimeout(function(){
            $('#play-again').css({zIndex: 999})
            $('#play-more').css({zIndex: 999})
        },8000)
 }

    function setBalls10a(){
        let balls10a = {
        container: document.getElementById("balls10a"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls10a
     }
        let balls10aAnim = lottie.loadAnimation(balls10a)
        balls10aAnim.play();
    }

    function setBalls10b(){
    let balls10b = {
        container: document.getElementById("balls10b"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls10b
     }
        let balls10bAnim = lottie.loadAnimation(balls10b)
        balls10bAnim.play();
    }

    function setBalls20a(){
    let balls20a = {
        container: document.getElementById("balls20a"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls20a
     }
        let balls20aAnim = lottie.loadAnimation(balls20a)
        balls20aAnim.play();
    }

    function setBalls20b(){
    let balls20b = {
        container: document.getElementById("balls20b"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls20b
     }
        let balls20bAnim = lottie.loadAnimation(balls20b)
        balls20bAnim.play();
    }

    function setBalls25a(){
    let balls25a = {
        container: document.getElementById("balls25a"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls25a
     }
        let balls25aAnim = lottie.loadAnimation(balls25a)
        balls25aAnim.play();
    }

    function setBalls25b(){
    let balls25b = {
        container: document.getElementById("balls25b"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balls25b
     }
        let balls25bAnim = lottie.loadAnimation(balls25b)
        balls25bAnim.play();
    }

    //////////////Configuracion de sonidos ///////////////////////////
        function setSound(playID, abBalls, rango){
        //console.log('el playID del setdound es :', playID)
        //console.log('el abBalls del setdound es :', abBalls)
        //console.log('el rango del setdound es :', rango)
            ///////Para las a10 balls//////
            if(rango >= 1 && rango <= 15){
                if(playID == 1 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 en ranfo 1/15')
                        a101.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 1 en ranfo 1/15')
                        a102.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 1 en ranfo 1/15')
                        a103.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 4 abBalls 1 en ranfo 1/15')
                        a104.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 5 abBalls 1 en ranfo 1/15')
                        a105.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 6 abBalls 1 en ranfo 1/15')
                        a106.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 7 abBalls 1 en ranfo 1/15')
                        a107.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 8 abBalls 1 en ranfo 1/15')
                        a108.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 9 abBalls 1 en ranfo 1/15')
                        a109.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 10 abBalls 1 en ranfo 1/15')
                        a1010.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 1 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 abBalls 2 en ranfo 1/15')
                        b101.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 2 en ranfo 1/15')
                        b102.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 2 en ranfo 1/15')
                        b103.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 4 abBalls 2 en ranfo 1/15')
                        b104.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 5 abBalls 2 en ranfo 1/15')
                        b105.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 6 abBalls 2 en ranfo 1/15')
                        b106.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 1/15')
                        b107.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 1/15')
                        b108.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 1/15')
                        b109.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 1/15')
                        b1010.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }

            }//END IF DEL RANGO 1 A 15

            if(rango >= 16 && rango <= 35){
                if(playID == 1 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 abBalls 1 en ranfo 16/35')
                        a101.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 1 en ranfo 16/35')
                        a102.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 1 en ranfo 16/35')
                        a103.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 4 abBalls 1 ranfo 16/35')
                        a104.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 5 abBalls 1 ranfo 16/35')
                        a105.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 6 abBalls 1 ranfo 16/35')
                        a106.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 7 abBalls 1 ranfo 16/35')
                        a107.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 8 abBalls 1 ranfo 16/35')
                        a108.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 9 abBalls 1 ranfo 16/35')
                        a109.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 10 abBalls 1 ranfo 16/35')
                        a1010.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 1 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 abBalls 2 ranfo 16/35')
                        b101.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 2 en ranfo 16/35')
                        b102.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 2 en ranfo 16/35')
                        b103.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 4 abBalls 2 ranfo 16/35')
                        b104.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 5 abBalls 2 en ranfo 16/35')
                        b105.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 6 abBalls 2 en ranfo 16/35')
                        b106.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 7 abBalls 2 ranfo 16/35')
                        b107.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 8 abBalls 2 ranfo 16/35')
                        b108.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 9 abBalls 2 ranfo 16/35')
                        b109.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 10 abBalls 2 en ranfo 16/35')
                        b1010.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }

            }//END IF DEL RANGO 16 A 35

            if(rango >= 36 && rango <= 50){
                if(playID == 1 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 abBalls 1 en ranfo 36/50')
                        a101.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 1 en ranfo 36/50')
                        a102.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 1 en ranfo 36/50')
                        a103.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 4 abBalls 1 en ranfo 36/50')
                        a104.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 5 abBalls 1 en ranfo 36/50')
                        a105.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 6 abBalls 1 en ranfo 36/50')
                        a106.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 7 abBalls 1 en ranfo 36/50')
                        a107.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 8 abBalls 1 en ranfo 36/50')
                        a108.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 9 abBalls 1 en ranfo 36/50')
                        a109.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 1){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 10 abBalls 1 en ranfo 36/50')
                        a1010.play();
                    a10ticks.play();
                    a10Win.play();  
                    } 
                }
                if(playID == 1 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 1 abBalls 2 en ranfo 36/50')
                        b101.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 2 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 2 abBalls 2 en ranfo 36/50')
                        b102.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 3 && abBalls == 2){
                    if(isMuted == 0){
                    //console.log('SETSOUND playID 3 abBalls 2 en ranfo 36/50')
                        b103.play();
                    b10ticks.play(); 
                    b10Win.play();  
                    } 
                }
                if(playID == 4 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 4 abBalls 2 en ranfo 36/50')
                        b104.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 5 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 5 abBalls 2 en ranfo 36/50')
                        b105.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 6 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 6 abBalls 2 en ranfo 36/50')
                        b106.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 7 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 36/50')
                        b107.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 8 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 36/50')
                        b108.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 9 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 36/50')
                        b109.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }
                if(playID == 10 && abBalls == 2){
                    if(isMuted == 0){
                        //console.log('SETSOUND playID 1 abBalls 2 en ranfo 36/50')
                        b1010.play();
                        b10ticks.play(); 
                        b10Win.play();  
                    } 
                }

            }//END IF DEL RANGO 16 A 35

        }//////END IF DE SETSOUND   

        ////// PORCENTAJES //////////

            if(playID == 1){
                slotPointsX = totalPoints * .6;
                randomPointsX = totalPoints * .4;

                slotPoints = slotPointsX.toFixed();
                randomPoints = randomPointsX.toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);

                   pt1 = randomPoints;
                   //console.log('Las partes', pt1)
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt1
    
            }

            if(playID == 2){
                slotPointsX = totalPoints * .6;
                randomPointsX = totalPoints * .4;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/2).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .6).toFixed()
                    pt2  = (randomPoints * .4).toFixed()

                   //console.log('Las partes', pt1, pt2)
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt2.toString()
            }

            if(playID == 3){
                slotPointsX = totalPoints * .6;
                randomPointsX = totalPoints * .4;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/3).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .5).toFixed()
                    pt2  = (randomPoints * .3).toFixed()
                    pt3  = (randomPoints * .2).toFixed()

                   //console.log('Las partes', pt1, pt2, pt3)
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt3.toString()
            }

            if(playID == 4){
                slotPointsX = totalPoints * .6;
                randomPointsX = totalPoints * .4;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/4).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                pt1 = Math.floor(Math.random() * (0, randomPoints));
                    pt1  = (randomPoints * .4).toFixed()
                    pt2  = (randomPoints * .3).toFixed()
                    pt3  = (randomPoints * .2).toFixed()
                    pt4  = (randomPoints * .1).toFixed()

                   //console.log('Las partes', pt1, pt2, pt3, pt4)
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt4.toString()
            }

            if(playID == 5){
                slotPointsX = totalPoints * .6;
                randomPointsX = totalPoints * .4;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/5).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .1).toFixed()
                    pt2  = (randomPoints * .2).toFixed()
                    pt3  = (randomPoints * .3).toFixed()
                    pt4  = (randomPoints * .1).toFixed()
                    pt5  = (randomPoints * .3).toFixed()

                   //console.log('Las partes', pt1, pt2, pt3, pt4, pt5)
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt5.toString()
            }

            if(playID == 6){
                slotPointsX = totalPoints * .5;
                randomPointsX = totalPoints * .5;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/6).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .06).toFixed()
                    pt2  = (randomPoints * .04).toFixed()
                    pt3  = (randomPoints * .4).toFixed()
                    pt4  = (randomPoints * .2).toFixed()
                    pt5  = (randomPoints * .1).toFixed()
                    pt6  = (randomPoints * .2).toFixed()
 
                   //console.log('Las partes', pt1, pt2, pt3, pt4, pt5, pt6)
                   gameJSONs.gamePlay.assets[4].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt5.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt6.toString()
            }

            if(playID == 7){
                slotPointsX = totalPoints * .5;
                randomPointsX = totalPoints * .5;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/7).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .3).toFixed()
                    pt2  = (randomPoints * .1).toFixed()
                    pt3  = (randomPoints * .03).toFixed()
                    pt4  = (randomPoints * .07).toFixed()
                    pt5  = (randomPoints * .2).toFixed()
                    pt6  = (randomPoints * .2).toFixed()
                    pt7  = (randomPoints * .1).toFixed()    

                   //console.log('Las partes', pt1, pt2, pt3, pt4, pt5, pt6, pt7)
                   gameJSONs.gamePlay.assets[4].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[8].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt5.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt6.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt7.toString()

            }

            if(playID == 8){
                slotPointsX = totalPoints * .5;
                randomPointsX = totalPoints * .5;

                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX/8).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .04).toFixed()
                    pt2  = (randomPoints * .06).toFixed()
                    pt3  = (randomPoints * .1).toFixed()
                    pt4  = (randomPoints * .3).toFixed()
                    pt5  = (randomPoints * .2).toFixed()
                    pt6  = (randomPoints * .03).toFixed()
                    pt7  = (randomPoints * .07).toFixed()
                    pt8  = (randomPoints * .2).toFixed()  

                   //console.log('Las partes', pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8)
                   gameJSONs.gamePlay.assets[3].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[4].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[8].layers[0].t.d.k[0].s.t = pt5.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt6.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt7.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt8.toString()


            }

            if(playID == 9){
                slotPointsX = totalPoints * .4;
                randomPointsX = (totalPoints/9) * .6;

                slotPoints = slotPointsX.toFixed();
                randomPoints = randomPointsX.toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .08).toFixed()
                    pt2  = (randomPoints * .02).toFixed()
                    pt3  = (randomPoints * .07).toFixed()
                    pt4  = (randomPoints * .03).toFixed()
                    pt5  = (randomPoints * .2).toFixed()
                    pt6  = (randomPoints * .3).toFixed()
                    pt7  = (randomPoints * .2).toFixed()
                    pt8  = (randomPoints * .04).toFixed()
                    pt9  = (randomPoints * .06).toFixed()    

                   //console.log('Las partes', pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9)
                   gameJSONs.gamePlay.assets[3].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[4].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[7].layers[0].t.d.k[0].s.t = pt5.toString()
                   gameJSONs.gamePlay.assets[8].layers[0].t.d.k[0].s.t = pt6.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt7.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt8.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt9.toString()
            }

            if(playID == 10){
                slotPointsX = totalPoints * .3;
                randomPointsX = totalPoints * .7;
                slotPoints = slotPointsX.toFixed();
                randomPoints = (randomPointsX).toFixed();

                //console.log('los slotPoints', slotPoints);
                //console.log('randomPoints', randomPoints);
                    pt1  = (randomPoints * .02).toFixed()
                    pt2  = (randomPoints * .08).toFixed()
                    pt3  = (randomPoints * .03).toFixed()
                    pt4  = (randomPoints * .07).toFixed()
                    pt5  = (randomPoints * .3).toFixed()
                    pt6  = (randomPoints * .2).toFixed()
                    pt7  = (randomPoints * .1).toFixed()
                    pt8  = (randomPoints * .08).toFixed()
                    pt9  = (randomPoints * .02).toFixed()
                    pt10 = (randomPoints * .1).toFixed()
                

                    //console.log('Las partes', pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10)
                   gameJSONs.gamePlay.assets[2].layers[0].t.d.k[0].s.t = pt1.toString()
                   gameJSONs.gamePlay.assets[3].layers[0].t.d.k[0].s.t = pt2.toString()
                   gameJSONs.gamePlay.assets[4].layers[0].t.d.k[0].s.t = pt3.toString()
                   gameJSONs.gamePlay.assets[5].layers[0].t.d.k[0].s.t = pt4.toString()
                   gameJSONs.gamePlay.assets[6].layers[0].t.d.k[0].s.t = pt5.toString()
                   gameJSONs.gamePlay.assets[7].layers[0].t.d.k[0].s.t = pt6.toString()
                   gameJSONs.gamePlay.assets[8].layers[0].t.d.k[0].s.t = pt7.toString()
                   gameJSONs.gamePlay.assets[9].layers[0].t.d.k[0].s.t = pt8.toString()
                   gameJSONs.gamePlay.assets[10].layers[0].t.d.k[0].s.t = pt9.toString()
                   gameJSONs.gamePlay.assets[11].layers[0].t.d.k[0].s.t = pt10.toString()
                
            }

            /////////////////////////////

        abBalls = Math.floor(Math.random() * 2) + 1 

        //console.log('tokenstoplay ',_tokensToPlay);
        rango = Math.floor(Math.random() * 50) + 1  
        //rango = 45;
        //abBalls = 2;
        ////console.log('abBalls', abBalls);
        ////console.log('el rango', rango);
        ////console.log('el gameplay', gameJSONs.gamePlay)
        ////console.log('el playID', playID);
        gameJSONs.gamePlay.assets[17].layers[0].ef[playID-1].ef[0].v.k = 1
    

        //////////////////////////GROUP 1////////////////////////////////
        if(_tokensToPlay >= 1 && _tokensToPlay <= 49){
          
            if(rango >= 1 && rango <= 15){
                setColor10();

                var vectorPop = [0,0,0,0]
                for (var i = vectorPop.length - 1; i >= 0; i--) {
                 vectorPop[i] = balls10.pop()
                }
                ////console.log('pa ve el vectorPop despues del pop', vectorPop);
                ////console.log('los colores', color)
                ////console.log('group 1')
                ////console.log('el balls10 en el setUpWinning', balls10)
                ////console.log('pa ve el vectorPop antes del pop', vectorPop);
                if(abBalls == 1){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 7;
                    ////console.log(gameJSONs.balls10a)
                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }
                if(abBalls == 2){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    ////console.log(gameJSONs.balls10b)
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }
            }

            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0];
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    ////console.log(gameJSONs.balls20a)
                    ////console.log('ESTA ENTRANDO A 20a entre tokens 1 y 50 en abBalls = 1')
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }
                if(abBalls == 2){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    ////console.log(gameJSONs.balls20b)
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }
            }

            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }

                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    ////console.log(gameJSONs.balls25a)
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }
                if(abBalls == 2){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    ////console.log(gameJSONs.balls25b)
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    blueBall();
                }

            }
        

        } // de 1 a 49 tokens
    

        /////////////////GROUP 2///////////////////////////////////
        if(_tokensToPlay >= 50 && _tokensToPlay <= 99){
            ////console.log('group 2')
            if(rango >= 1 && rango <= 15){
                setColor10();
                var vectorPop = [0,0,0,0]
                for (var i = vectorPop.length - 1; i >= 0; i--) {
                 vectorPop[i] = balls10.pop()
                }
                ////console.log('pa ve el vectorPop despues del pop', vectorPop);
                ////console.log('los colores', color)
                ////console.log('group 1')
                ////console.log('el balls10 en el setUpWinning', balls10)
                ////console.log('pa ve el vectorPop antes del pop', vectorPop);
                if(abBalls == 1){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    ////console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 7;

                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }
                if(abBalls == 2){
                    ////console.log('ENTRO A 10B ENTRE 50 Y 99 EN abBalls = 2')
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    ////console.log(gameJSONs.balls10b)
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }
            }

            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0];
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    ////console.log(gameJSONs.balls20a)
                    ////console.log('ESTA ENTRANDO A balls20a en tokens entre 50 y 99 con abBalls= 1')
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }
                if(abBalls == 2){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            //////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    //console.log(gameJSONs.balls20b)
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }
            }

            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }
                if(abBalls == 2){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25b)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    greenBall();
                }

            }
            


        } // de 49 a 99 tokens
        
        /////////////////////////////// GROUP 3 ////////////////////////////////////////
        if(_tokensToPlay >= 100 && _tokensToPlay <= 149){
            
            //console.log('group 3')
            if(rango >= 1 && rango <= 15){
                setColor10();
                var vectorPop = [0,0,0,0]
                for (var i = vectorPop.length - 1; i >= 0; i--) {
                 vectorPop[i] = balls10.pop()
                }
                //console.log('pa ve el vectorPop despues del pop', vectorPop);
                //console.log('los colores', color)
                //console.log('group 1')
                //console.log('el balls10 en el setUpWinning', balls10)
                //console.log('pa ve el vectorPop antes del pop', vectorPop);
                if(abBalls == 1){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 7;
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }
                if(abBalls == 2){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10b)
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }
            }

            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0];
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20a)
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }
                if(abBalls == 2){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20b)
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }
            }

            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }
                if(abBalls == 2){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25b)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    yellowBall();
                }

            }

        } // de 100 a 149 tokens
        
        //group 4
        if(_tokensToPlay >= 150 && _tokensToPlay <= 199){
            //console.log('group 4')
            if(rango >= 1 && rango <= 15){
                setColor10();
                var vectorPop = [0,0,0,0]
                for (var i = vectorPop.length - 1; i >= 0; i--) {
                 vectorPop[i] = balls10.pop()
                }
                //console.log('pa ve el vectorPop despues del pop', vectorPop);
                //console.log('los colores', color)
                //console.log('group 1')
                //console.log('el balls10 en el setUpWinning', balls10)
                //console.log('pa ve el vectorPop antes del pop', vectorPop);
                if(abBalls == 1){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 7;
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    purpleBall();
                }
                if(abBalls == 2){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10b)
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();  
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    purpleBall();
                }
            }

            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0];
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20a)
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls,rango)
                    purpleBall();
                }
                if(abBalls == 2){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20b)
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    purpleBall();
                }
            }

            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    purpleBall();
                }
                if(abBalls == 2){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25b)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    purpleBall();
                }

            }

            

        } // de 150 a 199 tokens
        
        //group 5
        if(_tokensToPlay >= 200 && _tokensToPlay <= 249){
            //console.log('group 5')
            if(rango >= 1 && rango <= 15){
                setColor10();
                var vectorPop = [0,0,0,0]
                for (var i = vectorPop.length - 1; i >= 0; i--) {
                 vectorPop[i] = balls10.pop()
                }
                //console.log('pa ve el vectorPop despues del pop', vectorPop);
                //console.log('los colores', color)
                //console.log('group 1')
                //console.log('el balls10 en el setUpWinning', balls10)
                //console.log('pa ve el vectorPop antes del pop', vectorPop);
                if(abBalls == 1){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 7;
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    redBall();
                }
                if(abBalls == 2){
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls10b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls10b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls10b)
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    redBall();
                }
            }

            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0];
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20a)
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls, rango)
                    redBall();
                }
                if(abBalls == 2){
                    setColor20()
                    var vectorPop = [0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls20b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls20b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls20b)
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    redBall();
                }
            }

            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25a.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25a.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    redBall();
                }
                if(abBalls == 2){
                    setColor25()
                    var vectorPop = [0,0,0,0,0,0,0,0,0,0,0,0]
                    for (var i = vectorPop.length - 1; i >= 0; i--) {
                        vectorPop[i] = balls20.pop()
                    }
                    for (var i = 0; i <= vectorPop.length - 1; i++) {
                        for (var j = 0; j <= 30; j++) {

                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].nm = '.color-'+paintGroupOne[j];
                            gameJSONs.balls25b.layers[vectorPop[i]].shapes[0].it[0].it[j].it[1].cl = 'color-'+paintGroupOne[j];
                            ////console.log('posicion j numero '+j+" de la posicion pop con valor "+vectorPop[i]+"con el paintGroupOne numero: "+paintGroupOne[j])
                        }
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].nm = '.color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[2].it[1].nm = '.color-' + paintGroupThree[0];
                        gameJSONs.balls25b.layers[vectorPop[i]].shapes[1].it[0].it[1].cl = 'color-' + paintGroupTwo[0];

                    }
                    //console.log(gameJSONs.balls25b)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    redBall();
                }

            }

        } // de 200 a 249 tokens

        //////////////////////////////////// 250 TOKENS/////////////////////////////
        if(_tokensToPlay >= 250){
            //console.log('entro a 250 tokens')
            if(rango >= 1 && rango <= 15){
                if(abBalls == 1){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 7;
                    gameJSONs.gamePlay.layers[1].ef[0].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[16].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10a();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
                if(abBalls == 2){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 6;
                    gameJSONs.gamePlay.layers[1].ef[1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[15].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls10b();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
            }
            if(rango >= 16 && rango <= 35){
                if(abBalls == 1){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 5;
                    gameJSONs.gamePlay.layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[14].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20a();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
                if(abBalls == 2){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 4;
                    gameJSONs.gamePlay.layers[1].ef[3].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[13].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls20b();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
            }
            if(rango >= 36 && rango <= 50){
                if(abBalls == 1){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[4].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[12].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25a();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
                if(abBalls == 2){
                    //console.log(gameJSONs.balls10a)
                    gameJSONs.gamePlay.layers[8].parent = 3;
                    gameJSONs.gamePlay.layers[1].ef[5].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[0].ef[playID-1].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[1].ef[2].ef[0].v.k = 1
                    gameJSONs.gamePlay.assets[1].layers[11].t.d.k[0].s.t = slotPoints.toString();
                    setGamePlay();
                    setBalls25b();
                    setSound(playID, abBalls, rango)
                    redBall250();
                }
            }    

        }
        
        playAgain()
        moreGames()

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setSoundSettings() {
    if(!isMuted) {$('.sound-toggle').attr('src','./assets/img/sound_on.png')}
    else {$('.sound-toggle').attr('src','./assets/img/sound_off.png')}

    startSong.volume    = (isMuted) ? 0 : 1
    hit.volume         = (isMuted) ? 0 : 1
    gameplaySong.volume         = (isMuted) ? 0 : 1
    
    a101.volume = (isMuted) ? 0 : 1; 
    a102.volume = (isMuted) ? 0 : 1; 
    a103.volume = (isMuted) ? 0 : 1; 
    a104.volume = (isMuted) ? 0 : 1; 
    a105.volume = (isMuted) ? 0 : 1; 
    a106.volume = (isMuted) ? 0 : 1; 
    a107.volume = (isMuted) ? 0 : 1; 
    a108.volume = (isMuted) ? 0 : 1; 
    a109.volume = (isMuted) ? 0 : 1; 
    a1010.volume = (isMuted) ? 0 : 1;
    b101.volume = (isMuted) ? 0 : 1; 
    b102.volume = (isMuted) ? 0 : 1; 
    b103.volume = (isMuted) ? 0 : 1; 
    b104.volume = (isMuted) ? 0 : 1; 
    b105.volume = (isMuted) ? 0 : 1; 
    b106.volume = (isMuted) ? 0 : 1; 
    b107.volume = (isMuted) ? 0 : 1; 
    b108.volume = (isMuted) ? 0 : 1; 
    b109.volume = (isMuted) ? 0 : 1; 
    b1010.volume = (isMuted) ? 0 : 1;
    a201.volume = (isMuted) ? 0 : 1;
     
    a202.volume = (isMuted) ? 0 : 1;
    a203.volume = (isMuted) ? 0 : 1;
    a204.volume = (isMuted) ? 0 : 1;
    a205.volume = (isMuted) ? 0 : 1;
    a206.volume = (isMuted) ? 0 : 1;
    a207.volume = (isMuted) ? 0 : 1;
    a208.volume = (isMuted) ? 0 : 1;
    a209.volume = (isMuted) ? 0 : 1;
    a2010.volume = (isMuted) ? 0 : 1;

    b201.volume = (isMuted) ? 0 : 1;
    b202.volume = (isMuted) ? 0 : 1;
    b203.volume = (isMuted) ? 0 : 1;
    b204.volume = (isMuted) ? 0 : 1;
    b205.volume = (isMuted) ? 0 : 1;
    b206.volume = (isMuted) ? 0 : 1;
    b207.volume = (isMuted) ? 0 : 1;
    b208.volume = (isMuted) ? 0 : 1;
    b209.volume = (isMuted) ? 0 : 1;
    b2010.volume = (isMuted) ? 0 : 1;

    a251.volume = (isMuted) ? 0 : 1;
    a252.volume = (isMuted) ? 0 : 1;
    a253.volume = (isMuted) ? 0 : 1;
    a254.volume = (isMuted) ? 0 : 1;
    a255.volume = (isMuted) ? 0 : 1;
    a256.volume = (isMuted) ? 0 : 1;
    a257.volume = (isMuted) ? 0 : 1;
    a258.volume = (isMuted) ? 0 : 1;
    a259.volume = (isMuted) ? 0 : 1;
    a2510.volume = (isMuted) ? 0 : 1;

    b251.volume = (isMuted) ? 0 : 1;
    b252.volume = (isMuted) ? 0 : 1;
    b253.volume = (isMuted) ? 0 : 1;
    b254.volume = (isMuted) ? 0 : 1;
    b255.volume = (isMuted) ? 0 : 1;
    b256.volume = (isMuted) ? 0 : 1;
    b257.volume = (isMuted) ? 0 : 1;
    b258.volume = (isMuted) ? 0 : 1;
    b259.volume = (isMuted) ? 0 : 1;
    b2510.volume = (isMuted) ? 0 : 1;

    b25Win.volume= (isMuted) ? 0 : 1; 
    a25Win.volume= (isMuted) ? 0 : 1; 
    b20Win.volume= (isMuted) ? 0 : 1; 
    a20Win.volume= (isMuted) ? 0 : 1; 
    b10Win.volume= (isMuted) ? 0 : 1; 
    a10Win.volume= (isMuted) ? 0 : 1; 
    slot.volume         = (isMuted) ? 0 : 1;

    b25ticks.volume= (isMuted) ? 0 : 1; 
    a25ticks.volume= (isMuted) ? 0 : 1; 
    b20ticks.volume= (isMuted) ? 0 : 1; 
    a20ticks.volume= (isMuted) ? 0 : 1; 
    b10ticks.volume= (isMuted) ? 0 : 1; 
    a10ticks.volume= (isMuted) ? 0 : 1; 


}



function loading(){

	balance = {
        container: document.getElementById("balance"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.balance
    }

     var loadingScreen = {
        container: document.getElementById("loading-screen"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: gameJSONs.loadingScreen
    }
    var loadingScreenAnim = lottie.loadAnimation(loadingScreen)
    loadingScreenAnim.play();

    setTimeout(function(){

        init();

    },1000)

}