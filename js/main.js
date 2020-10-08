var _userData;
var _gameID = 999;
var isMuted = false
var playID;
var dragging = false;
var dragged = false;
var tokensToPlay;
var pointsWon;
var gameplay;
var draggOff = false
var gameplayAnim;
var finalSetted = false
var finalAnimation;
var __tokensResponse;
var startButtonAnim, playButtonAnim;
var isGamePlayPlayed = false
var hit, prize, whoosh, crowd, rhythm, rope, theme, post, jackpotSound, mapIntroSound, mapSound, pageFlip;
var pricesKeys = ["flag", "compass", "sword", "bananas", "lifevest", "anchor", "treasure", "canon", "parrot", "monkey ", "treasure"]


var degrees = [324, 216, 288, 180, 144, 108, 0, 36, 72, 252]

function setupSounds() {
	prize = document.getElementById('prize')
	whoosh = document.getElementById('whoosh')
	crowd = document.getElementById('crowd')
	rhythm = document.getElementById('rhythm')
	rope = document.getElementById('rope')
	theme = document.getElementById('theme')
	post = document.getElementById('post-spin')
	hit = document.getElementById('hit')
	//New sounds
	jackpotSound = document.getElementById('jackpot')
	mapIntroSound = document.getElementById('map_intro')
	mapSound = document.getElementById('map')
	pageFlip = document.getElementById('page-flip')
}

function init(){

    $('#loading-message').css('z-index', '-99');
    $('#load').text(" ");

    var startButton = {
        container: document.getElementById("start-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: JSONS.startButton
    }
    startButtonAnim = bodymovin.loadAnimation(startButton)

	theme.play()
	theme.loop = true


    $('loading-message').hide();
    $('.layer, .main-container').css({
	    height: ($('.layer').width() * 400 / 560) + "px", 
        maxHeight: window.innerHeight + "px",
        maxWidth: ($(window).height() * 560 / 400) + "px"
    })

    $('.sound-toggle').click(function(){
    	hit.play()
        isMuted = !isMuted
        setSoundSettings()
    })

	var sizeValue = $('.layer').height() * .62
    $("#wheel").width(sizeValue).height(sizeValue)

    initializeUserData()
    
    $('#start-button').click(startButtonAction)
    $('#tokens-button').click(tokensButtonAction)
    $('#skip-button').click(skipButtonAction)

    $('#bar').click(function(e){
        var distanceA = ($('body').width()/2) - ($('.layer').width()/2)
        var distanceB = ($('.layer').width()/2) - ($('#token-ui').width()/2)
        var distanceC = ($('#token-ui').width()/2) - ($('#bar').width()/2)
        var value = e.clientX - (distanceA + distanceB + distanceC) - ($('.draggable').width()/2)
        $('.draggable').css({left: value})
        updateDraggableValue($('.draggable').css('left'))
    })

    $('.draggable').draggable({ 
        axis: "x",
        containment: "#bar",
        start: function() {
            updateDraggableValue($('.draggable').css('left'))
        },
        drag: function() {
            updateDraggableValue($('.draggable').css('left'))
        },
        stop: function() {
            updateDraggableValue($('.draggable').css('left'))
        }
    });

    if(window.location.href.match("no-init") != null){ 
    	isMuted = (getParameterByName('isMuted') == 'true');
        setSoundSettings()
    	$('#start-button').trigger('click') 
    	$('#skip-button').trigger('click') 
    }

}

function setupStoryTellingAnimation() {
    
    var mapIntro = {
        container: document.getElementById("storytel-container"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: JSONS.mapIntro
    }
    var mapIntroAnim = bodymovin.loadAnimation(mapIntro)
    mapIntroAnim.play()
    mapIntroSound.play()
    mapIntroAnim.addEventListener('complete', function(){
    	$('#skip-button').trigger('click')
    })

    var skipButton = {
        container: document.getElementById("skip-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: JSONS.skipButton
    }
    var skipButtonAnim = bodymovin.loadAnimation(skipButton)
    skipButtonAnim.play()
    
}

function skipButtonAction() {
	var container = $(this).data('container')
	mapIntroSound.pause()
	$('#' + container).fadeOut()
}

function initializeUserData(){
    $.ajax({

	    type: "POST", 
	    url: "https://qa.staging.snowfly.com/gameapi/v1/getStartInfo", 
	    data: { gameId: _gameID },
	    success: function( data ) {
			_userData = data;
			if (_userData.tokenBalance > 0){ $('#no-tokens-screen').css({display: 'none'}) }
            if(_userData.status == 0)
            {
                $('#about').fadeOut()
                $('#no-server-request').fadeIn()
                $('#t-s').text(_userData.message)
            }
			$(".tokens-text-view > p.container").text(_userData.tokenBalance)
			$(".points-text-view > p.container").text(_userData.pointBalance)
	    }
	});
}

function startButtonAction(){
	$('#start-button').addClass('disabled')
	startButtonAnim.play()
	hit.play()
	var container = $(this).data('container')
	$('#' + container).fadeOut()
	setupStoryTellingAnimation()

	theme.pause()
	rhythm.play()
	rhythm.loop = true

    var playButton = {
        container: document.getElementById("tokens-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: JSONS.playButton
    }
    playButtonAnim = bodymovin.loadAnimation(playButton)
}

function setupMapScreen() {
	
	JSONS.map.layers[0].ef[playID - 1].ef[0].v.k = 1
	JSONS.map.layers[1].t.d.k[0].s.t = tokensToPlay + ""
	JSONS.map.layers[2].t.d.k[0].s.t = pointsWon + ""

	var map = {
        container: document.getElementById("map-screen"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: JSONS.map
    }
    mapAnim = bodymovin.loadAnimation(map)
    mapSound.play()
    var arrayFrame = (playID == 10) ? [0, 92] : [0, 170]
    mapAnim.playSegments(arrayFrame, true);
    $('#map-screen').css({zIndex: 99})

	
    if(playID == 10) {
		
		JSONS.jackpot.layers[13].t.d.k[0].s.t = pointsWon + ""
		JSONS.jackpot.layers[11].t.d.k[0].s.t = tokensToPlay + ""

		var jackpot = {
	        container: document.getElementById("jackpot-screen"),
	        renderer: 'svg',
	        loop: false,
	        autoplay: false,
	        rendererSettings: {
	            progressiveLoad:false
	        },

	        animationData: JSONS.jackpot
	    }
	    var jackpotAnim = bodymovin.loadAnimation(jackpot)

        var confetti = {
            container: document.getElementById("confetti"),
            renderer: 'svg',
            loop: true,
            autoplay: false,
            rendererSettings: {
                progressiveLoad:false
            },

            animationData: JSONS.confetti
        }
        confettiAnim = bodymovin.loadAnimation(confetti)

        setTimeout(function() {
        	if(playID == 10) {
        		mapSound.volume = 0
        	}
        }, 5000)

	    $('#jackpot-screen').css({zIndex: 99})

		mapAnim.addEventListener('complete', function(){
			$('#map-screen').fadeOut()
			jackpotAnim.play()
			jackpotSound.play()
			confettiAnim.play()
		    setTimeout(function(){
				$('#jackpot-screen').click(function() {
					restartGame()	
				})
		    },5000)
		})
    } else {
	    setTimeout(function(){
			$('#map-screen').click(function() {
				restartGame()	
			})
	    },5000)
    }
}

function restartGame() {
    setTimeout(function(){
        var mainURL = location.protocol + '//' + location.host + location.pathname
        window.location.href = mainURL+ "?no-init=true&isMuted=" + isMuted
    },500)
}

function tokensButtonAction(){
	$('.tokens-button').addClass('disabled')
	hit.play()
	var container = $(this).data('container')
	$('#' + container).fadeOut()	

	rhythm.pause()
	theme.play()
	theme.loop = true

	tokensToPlay = parseInt( $("#tokens-amount").text() )
	$('#tokens-to-play').text( tokensToPlay )	

    $.ajax({
        type: "POST", 
        url: "https://qa.staging.snowfly.com/gameapi/v1/playGame", 
        data: { tokens: tokensToPlay, gameId: _gameID },
        success: function( data ) {
            playID = data.playId;
            pointsWon = data.totalPoints;
            tokensPlayed = tokensToPlay;
            runGamePlay()
        }
    });                
}

function runGamePlay(){

	rhythm.pause()

	playButtonAnim.play()
	gameplay = {
	    container: document.getElementById("gameplay"),
	    renderer: 'svg',
	    loop: true,
	    prerender: false,
	    autoplay: false,
	    autoloadSegments: false,
	    rendererSettings: {
	        progressiveLoad: false
	    },

	    animationData: JSONS.gamePlay
	}

	gameplayAnim = bodymovin.loadAnimation(gameplay)
	JSONS.gamePlay.layers[3].layers[1].ks.r.k[0].e = [degrees[playID - 1]]
	gameplayAnim.playSegments([0,39], true);

   	var RAD2DEG = 180 / Math.PI;            
    var dial = $("#wheel");
    dial.centerX = dial.offset().left + dial.width()/2;
    dial.centerY =  dial.offset().top + dial.height()/2;
    
   
    var offset, dragging = false;
    dial.mousedown(function(e) {
      dragging = true;
      offset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
      rope.play()
      theme.play()
	  rhythm.pause()
      rope.loop = true
    })

	$('.spin-button-container').addClass('flex-v')
	
	var spinButton = {
	    container: document.getElementById("spin-button"),
	    renderer: 'svg',
	    loop: false,
	    prerender: false,
	    autoplay: false,
	    autoloadSegments: false,
	    rendererSettings: {
	        progressiveLoad: false
	    },

	    animationData: JSONS.spinButton
	}
	var spinButtonAnim = bodymovin.loadAnimation(spinButton)
	
	$('#spin-button').click(function(){
		spinButtonAnim.play()		
		$(this).fadeOut()
		if (!isGamePlayPlayed) gamePlayFunc()
	})
	
	if (!detectmob() ){ 
	    $(document).mouseup(function() {
			$("#spin-button").css({pointerEvents: 'none'})
			$("#spip-button").addClass('disabled')
	    	if(!draggOff) {
				if (!isGamePlayPlayed) gamePlayFunc()
	    	}
	    })		
	}

    $(document).mousemove(function(e) {
      if (dragging) { 
        
        var newOffset = Math.atan2(dial.centerY - e.pageY, e.pageX - dial.centerX);
        var r = (offset - newOffset) * RAD2DEG;
        
        dial.css({
        	'-webkit-transform': 'rotate(' + r + 'deg)',
        	'-ms-transform': 'rotate(' + r + 'deg)',
        	'transform': 'rotate(' + r + 'deg)'
        });
      }
    })
}

function gamePlayFunc(){
	draggOff = true
	isGamePlayPlayed = true
	$("#wheel").css({pointerEvents: 'none'})
	rope.pause()
	theme.play()
	if (!dragged){
      	dragging = false
      	setTimeout(function(){  
      		dragged = true  
      	}, 3500)
      	var rotation = $("#wheel").css('transform')
      	var values = rotation.split('(')[1],
	    	values = values.split(')')[0],
	    	values = values.split(',');

		var b = values[1];

		var angle = Math.round(Math.asin(b) * (180/Math.PI));
		gameplayAnim.loop = false
		gameplayAnim.playSegments([40, 294], false);
		gameplayAnim.addEventListener('complete', function(){
			gameplayAnim.loop = false
			if(dragged){
		    	$('#tokens-to-play-container, .tokens-text-view, .points-text-view').fadeOut(function(){
		    		$(this).remove()
		    	})
				setupMapScreen()
				theme.pause()
				if (!finalSetted) finalSetted = true
				$('#final-button').click(restartGame)
			} else { setTimeout(function(){ 
				post.play()
				$('#support').css({opacity: 0}) }, 1800) }
		});
	}
}

function updateDraggableValue(val){
    var value = parseInt(val)
    var newValue
    
    if(value <= 92){
        newVal = value * 10 / 92 
    }
    if(value > 92 && value <= 204){
        newVal = ((value - 92) * (50 * 1.5) / 204) + 10 
    }
    if(value > 204){
        newVal = ((value - 204) * (250 + 245) / 344) + 50 
    }
    if(newVal > 250){ 
        newVal = 250
    }

    if(newVal < 1) newVal = 1
    if(newVal > _userData.tokenBalance) newVal = _userData.tokenBalance
    $('#tokens-amount').text(parseInt(newVal))
}
function detectmob() { 
	 if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)){
	    return true;
	 } else {
	    return false;
	 }
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
    if(!isMuted) {$('.sound-toggle').attr('src','./images/sound_on.png')}
    else {$('.sound-toggle').attr('src','./images/sound_off.png')}

	prize.volume = (isMuted) ? 0 : 1
	whoosh.volume = (isMuted) ? 0 : 1
	crowd.volume = (isMuted) ? 0 : 1
	rhythm.volume = (isMuted) ? 0 : 1
	rope.volume = (isMuted) ? 0 : 1
	theme.volume = (isMuted) ? 0 : 1
	post.volume = (isMuted) ? 0 : 1
	hit.volume = (isMuted) ? 0 : 1
}
