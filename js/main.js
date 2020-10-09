var _userData;
var _gameID = 999;
var isMuted = false
var _tokensToPlay = 0;
var __tokensResponse = null;
var __startButtonPressed = false;
var slider
var hit, whoosh, prize, crowd, pregame, theme, hooray;
var balance;

function init(){

    hit = document.getElementById('hit');
    prize = document.getElementById('prize');
    crowd = document.getElementById('crowd');
    whoosh = document.getElementById('whoosh');
    pregame = document.getElementById('pregame');
    theme = document.getElementById('theme');
    hooray = document.getElementById('hooray');

    slider = document.getElementById('myRange');
	setupLayerClass()	
    pregame.play()
    pregame.loop = true
   
    $('.about').click(function(){
        $('#instruction').css({zIndex: 102, display: 'flex'})
    })

    $('.instructions-image').click(function(){
        $('#instruction').css({zIndex: -199})
    })

   $('.sound-control').click(function(){
        isMuted = !isMuted
        setSoundSettings()
    })

}

function setupLayerClass() {

    var maxHeight = (window.innerHeight > 720) ? 720 : window.innerHeight
    var maxWidth = maxHeight == window.innerHeight ? ($(window).height() * 720 / 720) : 720
    $('.layer, .super-container').css({
	    height: ($('.layer').width() * 720 / 720) + "px", 
        maxHeight: maxHeight + "px",
        maxWidth: maxWidth + "px"
    })

    var startButton = {
        container: document.getElementById("start-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.startButton
    }
    var startButtonAnim = bodymovin.loadAnimation(startButton)

    if(window.location.href.match("no-init") != null){
        isMuted = (getParameterByName('isMuted') == 'true');
        setSoundSettings()
        startButtonPressed(startButtonAnim)
    } else {
        $('#start-button').click(function(){
            $(this).addClass('disabled')
            startButtonPressed(startButtonAnim)
        })    
    }
    
}

function startButtonPressed(animation) {
    animation.play()
    hit.play()
    initializeGame()


    $.ajax({
        type: "POST", 
        url: "https://everesttest.snowfly.com/gameapi/v1/getStartInfo", 
        data: { gameId: _gameID },
        success: function( data ) {
           _userData = data;
           /*if (_userData.tokenBalance > 0){ 
           		$('#no-tokens-screen').css({display: 'none'}) 
           }*/
           if (_userData.tokenBalance == 0){ 
                $('#about').fadeOut();
                $('#no-tokens-screen').fadeIn(); 
           }
           if(_userData.status == 0){
                $('#about').fadeOut()
                $('#t-s').text(_userData.message)
                $('#no-server-request').fadeIn()
           }
           	$('#start-screen').fadeOut()
       
            jsons.tokenScreen.layers[0].t.d.k[0].s.t = ""+_userData.tokenBalance
            jsons.tokenScreen.layers[1].t.d.k[0].s.t = ""+_userData.pointBalance

            if (_userData.tokenBalance < 250) {
                console.log('<250')
                slider.max = _userData.tokenBalance;
              jsons.tokenScreen.layers[4].t.d.k[0].s.t = slider.max+""; 
            } else {
                slider.max = 250;
               jsons.tokenScreen.layers[4].t.d.k[0].s.t = slider.max+"";
            }
            

             balance = {
                container: document.getElementById("balances-container"),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                rendererSettings: {
                    progressiveLoad:false
                },

                animationData: jsons.tokenScreen
            }
            //var balanceAnim = bodymovin.loadAnimation(balance)
            //balanceAnim.play()

            var playButton = {
                container: document.getElementById("play-button"),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                rendererSettings: {
                    progressiveLoad:false
                },

                animationData: jsons.playButton
            }
            var playButtonAnim = bodymovin.loadAnimation(playButton)

             

            balanceAnim = lottie.loadAnimation(balance)
               

            slider.oninput = function() {
                
                    tokensJAnim.renderer.elements[0].updateDocumentData({
                        t: Math.round(slider.value)+"", s: 30
                    });
            
                tokensJAnim.play();

            }

            var tokensJ = {
                container: document.getElementById("tokens-amount"),
                renderer: 'svg',
                loop: true,
                autoplay: false,
                rendererSettings: {
                    progressiveLoad:false
                },

                animationData: jsons.tokensToPlay
            }

            tokensJAnim = lottie.loadAnimation(tokensJ)
            tokensJAnim.addEventListener("DOMLoaded", function() {
                
                 tokensJAnim.renderer.elements[0].updateDocumentData({t: slider.value+"", s:120});
                 //tokensJAnim.play()
            });

           

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
            
            $('#play-button').click(function(){
                $(this).addClass('disabled')
                hit.play()
                playButtonAnim.play()    
                //_tokensToPlay = parseInt( $('#tokens-amount').text() )
                $.ajax({
                    type: "POST", 
                    url: "https://everesttest.snowfly.com/gameapi/v1/playGame", 
                    data: { tokens: slider.value, gameId: _gameID },
                    success: function( data ) {
                        __tokensResponse = data;
                        $('#token-screen').fadeOut()
                        __startButtonPressed = true
                        pregame.pause()
                        theme.play()
                        theme.loop = true
                    }
                }); 
            })
        }
    });
}

function setupFinalScreen() {
    
    hooray.play()
    whoosh.play()
    theme.pause()
    if(__tokensResponse.playId == 10) crowd.play()
    
    $('#final-screen').css({display: 'flex'})
    var final = {
        container: document.getElementById("final-screen"),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.winning
    }

    jsons.winning.layers[0].ef[__tokensResponse.playId - 1].ef[0].v.k = 1
    jsons.winning.layers[13].t.d.k[0].s.t = ""+parseInt(slider.value)+"";
    jsons.winning.layers[14].t.d.k[0].s.t = ""+__tokensResponse.totalPoints
    
    var finalAnim = bodymovin.loadAnimation(final)
    finalAnim.play()

    $('#final-screen').click(function() {
        $(this).addClass('disabled')
        hit.play()
        setTimeout(function(){
            var mainURL = location.protocol + '//' + location.host + location.pathname
            window.location.href = mainURL+ "?no-init=true&isMuted=" + isMuted
        },500)
    })
}

function getRandomIndex() {
    return  Math.floor((Math.random() * 18) + 1);
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
    if(!isMuted) {$('.sound-control').attr('src','./assets/img/sound_on.png')}
    else {$('.sound-control').attr('src','./assets/img/sound_off.png')}

    hit.volume = (isMuted) ? 0 : 1
    prize.volume = (isMuted) ? 0 : 1
    crowd.volume = (isMuted) ? 0 : 1
    whoosh.volume = (isMuted) ? 0 : 1
    pregame.volume = (isMuted) ? 0 : 1
    theme.volume = (isMuted) ? 0 : 1
    hooray.volume = (isMuted) ? 0 : 1
}

function loading(){


    init();
}