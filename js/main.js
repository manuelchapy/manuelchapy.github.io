var gamePlay;
var _userData;
var _gameID = 999;
var isMuted = false
var finalPlayed = false;
var crowd, spiningSound, hit;
var button1Anim;
var button10Anim;
var button50Anim;
var button250Anim;
var slotSystemAnim;
var stillFoodAnim;
var spiningAnim;
var toPlayAnim;
var lines = [];
var tokensToPlay;
var tokensToPlayTotal = 0;
var numbers = [];

var templates = [];


function init(){    

    hit             = document.getElementById('hit');
    crowd           = document.getElementById('crowd');
    theme           = document.getElementById('theme');
    spiningSound    = document.getElementById('spining-sound');

        theme.loop = true
        theme.play()    

    

    $('#instruction-screen').hide();

    if(window.location.href.match("no-init") != null){
        isMuted = (getParameterByName('isMuted') == 'true');
        setSoundSettings()
    }

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
    $('#start-button').click(function(){
        $(this).addClass('disable')
        startButtonAnim.play()
        if(!isMuted){
            hit.play()
        }
        if(isMuted){
            hit.pause()
        }

        $('#start-screen, #loading-message').fadeOut()
        theme.pause()
    })
    

    $('#loading-screen').fadeOut()

    jsons.winning.layers[0].ef[0].ef[0].v.k = 0
    jsons.winning.layers[0].ef[1].ef[0].v.k = 0
    jsons.winning.layers[0].ef[2].ef[0].v.k = 0
    jsons.winning.layers[0].ef[3].ef[0].v.k = 0
    jsons.winning.layers[0].ef[4].ef[0].v.k = 0

    $('.sound-toggle').click(function(){
        hit.play()
        isMuted = !isMuted
        setSoundSettings()
    })

    $.ajax({
        type: "POST", 
        url: "https://qa.staging.snowfly.com/gameapi/v1/getStartInfo", 
        data: { gameId: _gameID },
        success: function( data ) {
           _userData = data;

           if (_userData.tokenBalance == 0){ 
                $('#about').fadeOut();
           		$('#no-tokens-screen').css({display: 'block'}) 
           }
           if(_userData.status == 0){
                $('#about').fadeOut()
                $('#t-s').text(_userData.message)
                $('#no-server-request').fadeIn()
                }
           _userData.tokenBalance = 40
           jsons.balance.layers[0].t.d.k[0].s.t = ""+_userData.pointBalance
           jsons.balance.layers[1].t.d.k[0].s.t = ""+_userData.tokenBalance

		    var balance = {
		        container: document.getElementById("balances-container"),
		        renderer: 'svg',
		        loop: false,
		        autoplay: false,
		        rendererSettings: {
		            progressiveLoad:false
		        },

		        animationData: jsons.balance
		    }
		    var balanceAnim = bodymovin.loadAnimation(balance)
		    balanceAnim.play()
        }
    });

    $('.layer, .super-container').css({
	    height: ($('.layer').width() * 650 / 750) + "px", 
        maxHeight: window.innerHeight + "px",
        maxWidth: ($(window).height() * 750 / 650) + "px"
    })

    var tokenUI = {
        container: document.getElementById("tokens-ui"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.slotsUI
    }
    var tokenUIAnim = bodymovin.loadAnimation(tokenUI)
    tokenUIAnim.play()
    
    var stillFood = {
        container: document.getElementById("food_still"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.stillFood
    }
    stillFoodAnim = bodymovin.loadAnimation(stillFood)

    var foodSlots = {
        container: document.getElementById("instruction-screen"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.foodSlots
    }
    foodSlotsAnim = bodymovin.loadAnimation(foodSlots)

    var spining = {
        container: document.getElementById("spining"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.spining
    }
    spiningAnim = bodymovin.loadAnimation(spining)
    placeButtons()
    
}

//Ulitilies functions

function toPlayToggle(value){

    var previousValue = parseInt($("#toplay-amount > div > p").html())
    var totalValue =  previousValue + parseInt(value)
    if (totalValue >= _userData.tokenBalance) { totalValue = _userData.tokenBalance }
    if (totalValue >= 250) { totalValue = 250 }
    
    $("#toplay-amount > div > p").html(totalValue)
    tokensToPlayTotal = totalValue;
    $("#toplay-amount").removeClass('hide')
    
    if (toPlayAnim != undefined ) toPlayAnim.destroy()
    jsons.toPlay.assets[0].layers[1].t.d.k[0].s.t = ""
    var toPlay = {
        container: document.getElementById("toplay"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.toPlay
    }
    toPlayAnim = bodymovin.loadAnimation(toPlay)
    toPlayAnim.playSegments([0, 6], true)        
}

function placeButtons(){
    var button1 = {
        container: document.getElementById("button-1"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.button_1
    }
    button1Anim = bodymovin.loadAnimation(button1)
    button1Anim.play()

    var button10 = {
        container: document.getElementById("button-10"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.button_10
    }

    button10Anim = bodymovin.loadAnimation(button10)
    button10Anim.play()

    var button50 = {
        container: document.getElementById("button-50"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.button_50
    }

    button50Anim = bodymovin.loadAnimation(button50)
    button50Anim.play()

    var button250 = {
        container: document.getElementById("button-250"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.button_250
    }
    button250Anim = bodymovin.loadAnimation(button250)
    button250Anim.play()

    var spinButton = {
        container: document.getElementById("spin-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.spinButton
    }
    var spinButtonAnim = bodymovin.loadAnimation(spinButton)
    spinButtonAnim.play()
     
     var cleanButton = {
        container: document.getElementById("clean-button"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.buttons.cleanButton
    }
    var cleanButtonAnim = bodymovin.loadAnimation(cleanButton)
    cleanButtonAnim.play()

    $("#clean-button").click(function(){
        if(!isMuted){
            hit.play()
        }
        if(isMuted){
            hit.pause()
        }
        cleanButtonAnim.playSegments([0, 12], true)
        $("#toplay-amount > div > p").html(0)
        $('#spin-button').addClass('disabled')
        $('#clean-button').addClass('disabled')
        tokensToPlayTotal = 0
        //console.log(tokensToPlayTotal)
        toPlayToggle(0)

    })

    $("#instruction-i").click(function(){
        if(!isMuted){
            hit.play()
        }
        if(isMuted){
            hit.pause()
        }
        foodSlotsAnim.playSegments([0, 12], true)
        $('#instruction-screen').fadeIn();
    })

    $("#instruction-screen").click(function(){
        if(!isMuted){
            hit.play()
        }
        if(isMuted){
            hit.pause()
        }
        foodSlotsAnim.playSegments([12, 24], true)
        $('#instruction-screen').fadeOut();
    })


    $('.button').click(function(){
        var value = $(this).data('value')
        var selectedButton = getSelectedAnimationButton(value)
        selectedButton.playSegments([0, 12], true)
    })

    //Gameplay
    $('.button').click(function(){
        if(!isMuted){
            hit.play()
        }
        if(isMuted){
            hit.pause()
        }
    	tokensToPlay = $(this).data('value')
        if(tokensToPlayTotal >= 0 && tokensToPlayTotal <= 250){
            tokensToPlayTotal = tokensToPlay + tokensToPlayTotal;
            //console.log("entro!!!");
        }
        if(tokensToPlayTotal >= 250){
            tokensToPlayTotal = 250;
        }
        //console.log(tokensToPlayTotal)
        toPlayToggle(tokensToPlay)
        var selectedButton = getSelectedAnimationButton(tokensToPlay)
        selectedButton.playSegments([0, 10], true)

    	$('#spin-button').removeClass('disabled')
        $('#clean-button').removeClass('disabled')

    })

    $('#spin-button').click(function(){
        $(this).addClass('disabled')
        $('.button').addClass('disabled')
        $('#clean-button').addClass('disabled')
        $("#toplay-amount").addClass('hide')

        $.ajax({
            type: "POST", 
            url: "https://qa.staging.snowfly.com/gameapi/v1/playGame", 
            data: { tokens: tokensToPlay, gameId: _gameID },
            success: function( data ) {
                let playID = data.playId
                playID = playID + 5
                //console.log("Real playID => "+ data.playId)
                //console.log(jsons.lines)
                setUpTemplateFor(playID - 1)
                if(!isMuted){
                    hit.play()
                    spiningSound.play()
                }
                if(isMuted){
                    hit.pause()
                    spiningSound.pause()
                }
                toPlayAnim.playSegments([6, 12], true)        
                $('#food_still').addClass('hide')
                $('#spining').removeClass('hide')
                    spiningAnim.play()
                    slotSystemAnim.play()
                switch(playID){
                    case 1:
                        jsons.winning.layers[0].ef[4].ef[0].v.k = 1
                    break
                    case 2:
                        jsons.winning.layers[0].ef[3].ef[0].v.k = 1
                    break
                    case 3:
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                    break
                    case 4:
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                    break
                    case 5:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                    break
                    case 6:
                        jsons.winning.layers[0].ef[4].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[3].ef[0].v.k = 1
                    break
                    case 7:
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[4].ef[0].v.k = 1
                    break
                    case 8:
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[3].ef[0].v.k = 1
                    break
                    case 9:
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[4].ef[0].v.k = 1
                    break
                    case 10:
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[3].ef[0].v.k = 1
                    break
                    case 11:
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                    break
                    case 12:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[4].ef[0].v.k = 1
                    break
                    case 13:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[3].ef[0].v.k = 1
                    break
                    case 14:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                    break
                    case 15:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                    break
                    case 16:
                        jsons.winning.layers[0].ef[0].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[1].ef[0].v.k = 1
                        jsons.winning.layers[0].ef[2].ef[0].v.k = 1
                    break
                }
                    
                placeLines()

                setTimeout(function(){
                    switch(playID){
                        case 1:
                            lines[4].playSegments([6, 750], true)
                        break
                        case 2:
                            lines[3].playSegments([6, 750], true)
                        break
                        case 3:
                            lines[2].playSegments([6, 750], true)
                        break
                        case 4:
                            lines[1].playSegments([6, 750], true)
                        break
                        case 5:
                            lines[0].playSegments([6, 750], true)
                        break
                        case 6:
                            lines[4].playSegments([6, 750], true)
                            lines[3].playSegments([6, 750], true)
                        break
                        case 7:
                            lines[2].playSegments([6, 750], true)
                            lines[4].playSegments([6, 750], true)
                        break
                        case 8:
                            lines[2].playSegments([6, 750], true)
                            lines[3].playSegments([6, 750], true)
                        break
                        case 9:
                            lines[1].playSegments([6, 750], true)
                            lines[4].playSegments([6, 750], true)
                        break
                        case 10:
                            lines[1].playSegments([6, 750], true)
                            lines[3].playSegments([6, 750], true)
                        break
                        case 11:
                            lines[1].playSegments([6, 750], true)
                            lines[2].playSegments([6, 750], true)
                        break
                        case 12:
                            lines[0].playSegments([6, 750], true)
                            lines[4].playSegments([6, 750], true)
                        break
                        case 13:
                            lines[0].playSegments([6, 750], true)
                            lines[3].playSegments([6, 750], true)
                        break
                        case 14:
                            lines[0].playSegments([6, 750], true)
                            lines[2].playSegments([6, 750], true)
                        break
                        case 15:
                            lines[0].playSegments([6, 750], true)
                            lines[1].playSegments([6, 750], true)
                        break
                        case 16:
                            lines[0].playSegments([6, 750], true)
                            lines[1].playSegments([6, 750], true)
                            lines[2].playSegments([6, 750], true)
                        break
                    }
                }, 4000)
    
                setTimeout(function(){
                    jsons.winning.layers[2].t.d.k[0].s.t = data.totalPoints+""
                    jsons.winning.layers[1].t.d.k[0].s.t = tokensToPlayTotal+""
                    $('#tokens-screen').css('z-index', '0 !important')
                    $('#winning-screen, #play-again-container').css({zIndex: 101})
                    
                    var winning = {
                        container: document.getElementById("winning-screen"),
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        rendererSettings: {
                            progressiveLoad:false
                        },

                        animationData: jsons.winning
                    }
                    var winningAnim = bodymovin.loadAnimation(winning)
                    winningAnim.play()  

                    var againButton = {
                        container: document.getElementById("play-again"),
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        rendererSettings: {
                            progressiveLoad:false
                        },

                        animationData: jsons.againButton
                    }
                    var againButtonAnim = bodymovin.loadAnimation(againButton)
                    againButtonAnim.play()  

                    $('#play-again > svg').click(function(){
                        $(this).addClass('disabled')
                        if(!isMuted){
                            hit.play()
                        }
                        if(isMuted){
                            hit.pause()
                        }
                        setTimeout(function(){
                            var mainURL = location.protocol + '//' + location.host + location.pathname
                            window.location.href = mainURL+ "?no-init=true&isMuted=" + isMuted
                        },500)
                    })
                }, 1500 + 4760 - 500)
            }
        })
    })
}

function setUpTemplateFor(playID){
    //console.log(jsons.slotSystem)
    //console.log("PlayID => " + playID)
    var limitFoodNumber = 8
    var initFoodNumber = 0
    var food = Math.floor((Math.random() * limitFoodNumber) + initFoodNumber);
    var foodB = playID > 4 ? randomButNo(food, 0, initFoodNumber, limitFoodNumber) : undefined
    var foodC = playID > 14 ? randomButNo(food, foodB, initFoodNumber, limitFoodNumber) : undefined

    for(var i = 0; i < 5; i++){
        jsons.slotSystem.assets[i].layers[9].ef[playID].ef[0].v.k = 1
        jsons.slotSystem.assets[i].layers[11].ef[food].ef[0].v.k = 1
        
        var randomNumberA = playID > 4 ?  foodB :
            getNewNumber(numbers, food, foodB, foodC, initFoodNumber, limitFoodNumber, undefined)

        jsons.slotSystem.assets[i].layers[12].ef[randomNumberA].ef[0].v.k = 1

        var randomNumberB = playID > 14 ? foodC :
            getNewNumber(numbers, food, foodB, foodC, initFoodNumber, limitFoodNumber, randomNumberA)
        
        jsons.slotSystem.assets[i].layers[13].ef[randomNumberB].ef[0].v.k = 1
    }
    //console.log("\n\n\n=======\n\n")
    //console.log("food => "+food)
    //console.log("foodB => "+foodB)
    //console.log("foodC => "+foodC)
    //console.log("numbers => " +numbers)

    var slotSystem = {
        container: document.getElementById("slot-system"),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },

        animationData: jsons.slotSystem
    }
    slotSystemAnim = bodymovin.loadAnimation(slotSystem)
}

function getNewNumber(numbersArray, foodNumber, foodNumberB, foodNumberC, aNumber, bNumber, lastRandomNumber){
    //console.log("\n\n=======\n\n")
    //console.log("Getting number between " + aNumber + " and " + bNumber)
    var randomNumber = Math.floor((Math.random() * bNumber) + aNumber);
    //console.log("Random number => " +randomNumber)
    var coincidences = 0
    for(var i = 0; i < numbersArray.length; i++){
        if(randomNumber == numbersArray[i]) { coincidences++ }
    }
    if(randomNumber == foodNumber) {coincidences = 2}
    if(randomNumber == foodNumberB) {coincidences = 2}
    if(randomNumber == foodNumberC) {coincidences = 2}
    if(randomNumber == lastRandomNumber) {coincidences = 2}
    if(coincidences >= 2) {
        //console.log("Too many coincidences ⚠️")
        return getNewNumber(numbersArray, foodNumber, foodNumberB, foodNumberC, aNumber, bNumber, lastRandomNumber)
    } else {
        //console.log("Sending => " + randomNumber)
        numbers.push(randomNumber)
        return randomNumber
    }
}

function randomButNo(numberA, numberB, rangeA, rangeB){
    var number = Math.floor((Math.random() * rangeB) + rangeA);
    if( number != numberA && number != numberB){
        return number
    }
    return randomButNo(numberA, numberB, rangeA, rangeB)
}


function placeLines(){
    for(var i = 1; i <= 5; i++){
        var line = {
            container: document.getElementById("line_" + i),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
                progressiveLoad:false
            },

            animationData: jsons["lines"]["line_" + i]
        }
        let animation = bodymovin.loadAnimation(line)
        animation.playSegments([0, 6], true)
        
        lines.push(animation)
    }
}

function getSelectedAnimationButton(value){        
    switch(value){
        case 1:
            return button1Anim
        break
        case 10:
            return button10Anim
        break
        case 50: 
            return button50Anim
        break
        case 250:
            return button250Anim
        break
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
    if(!isMuted) {$('.sound-toggle').attr('src','./assets/img/sound_on.png')}
    else {$('.sound-toggle').attr('src','./assets/img/sound_off.png')}

    hit.volume          = (isMuted) ? 0 : 1
    crowd.volume        = (isMuted) ? 0 : 1
    spiningSound.volume = (isMuted) ? 0 : 1
    theme.volume        = (isMuted) ? 0 : 1
}