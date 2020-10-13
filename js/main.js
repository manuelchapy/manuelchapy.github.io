/*
  * Fruit Scratch Game | Infrastructure 2020
  * Snowfly Game Room
  * 
*/

var _userData;
var _gameID = 999;
var loadingScreen;
var slider;
var _tokensToPlay = 1;
var __tokensResponse;
var startScreen;
var balance;
var gameplay;
var isMuted = false;
var isReady = true;
let playID //= Math.floor(Math.random() * 10) + 1;
var winningLine =  Math.floor((Math.random() * 8));
var matrix;
var winningFruit;
var winningFx;
var fruitPicked = {};
var animationsArray = [];
var coinsArray = [];
var fxArray = [];
var fruits = ['tangerine', 'pear', 'strawberry', 'cherry', 'watermelon', 'apple', 'orange', 'banana', 'grapes', 'logobox'];
var fruitSpot = {};
var coinSpot = {};
var tagSpot = {};
var fruitsFound = 0;
var fx;


// Building up the possible matrices:

switch (winningLine) {

  case 0: 
    matrix = [1,1,1,
              0,0,0,
              0,0,0];
    break;
  case 1: 
    matrix = [0,0,0,
              1,1,1,
              0,0,0];
     break;
  case 2:
    matrix = [0,0,0,
              0,0,0,
              1,1,1];
     break;
  case 3:
    matrix = [1,0,0,
              1,0,0,
              1,0,0];
     break;
  case 4:
    matrix = [0,1,0,
              0,1,0,
              0,1,0];
     break;
  case 5:
    matrix = [0,0,1,
              0,0,1,
              0,0,1];
     break;
  case 6:
    matrix = [1,0,0,
              0,1,0,
              0,0,1];
     break;
   case 7:
     matrix = [0,0,1,
               0,1,0,
               1,0,0]
     break;
   default: null 
}




// Shuffling function:

function setGamePlay(playID){

if(!isMuted){
  themeSound.pause();
  gamePlaySound.play();
}

if(isMuted){
    themeSound.pause();
  gamePlaySound.pause();
}

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
  }


  // Extracting the fruit jsons:

  var fruitObj, x;
  fruitsArray = [];
  for (i = 0; i <= 9; i++) {
    x = fruits[i];
    fruitObj = frutas[x];
    fruitsArray.push(fruitObj);
  }


  // Picking the winning fruit from the array and splicing it out:

  winningFruit = fruitsArray[playID-1];
  fruitsArray.splice(playID-1, 1);


  // Shuffling the array of the remaining non-winning fruits:

  shuffle(fruitsArray);


  // Shape replacer and positioning functionality:

  function replaceShapes (base, toObj) {

    base.layers[0] =  toObj.layers[0];
    var position = nulls.position.layers[i-1].ks.p.k;
    base.layers[0].ks.p.k = position

  }


  // Placing fruits into the screen:


  function placeFruits() {

    var fruitCloned;
    for (i = 1; i <= 9; i++) {
    
      // Picking the fruit and the winfx based on the matrix:

      fruitPicked = (matrix[i-1] == 1) ? winningFruit : fruitsArray.pop();
      (matrix[i-1] == 1) ? assets.winFX.layers[0].ef[i-1].ef[0].v.k = 1 : assets.winFX.layers[0].ef[i-1].ef[0].v.k = 0;


      // Adding a clone fruit to the non-winner ones to give the game some unpredictability

      if (!matrix[i-1] == 1) {

        if (i == 4 || i == 6  || i == 8 ) {
          fruitCloned = fruitPicked
        } 
        else if (i == 5 || i == 7 ||  i == 9) {
          if (fruitCloned == undefined) {
            fruitPicked = fruitPicked
          } else {
            fruitPicked = fruitCloned
          }
          
        }
        else {
          fruitPicked = fruitPicked
        }
      
      }


      // Replacing its shapes into the given precomp:
      
      replaceShapes(precomps['p' + i], fruitPicked);

  
      // Setting up the fruits into the lottie player:

      setFruits(i)

    };


    // Showing the winning fruit and the text in the winning screen:

    var wfLayers = winningFruit.layers;
    var position = assets.winning.layers[0].ks.p.k;
    var winningLayers = assets.winning.layers;

    winningLayers.splice(0, 1, ...wfLayers);
    winningLayers[0].ks.p.k = position;
    winningLayers[0].parent = 2;
    winningLayers[2].ef[playID-1].ef[0].v.k = 1

    
    // Tokens Played:

    assets.winning.layers[19].t.d.k[0].s.t = __tokensResponse.totalPoints+"";
    
    // Points Won:

    assets.winning.layers[18].t.d.k[0].s.t = parseInt(slider.value)+"";
  
  

  }



  // HTML and Lottie:

  function setFruits(index) {

  // Fruits:

    var animation = {
      container: document.getElementById('place-' + index),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad: false
      },

      animationData: precomps['p' + index]
    }

    animationsArray.push(lottie.loadAnimation(animation));



  // Coins:

    var coinAnimation = {
    container: document.getElementById('coin-' + index),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad: false
    },

    animationData: coins['coin' + index]
    }

    coinsArray.push(lottie.loadAnimation(coinAnimation))

  }


  // Lottie instancing:

  function setGamePlay () {

  
    // Token Balance minus Tokens Played:

    assets.gameplay_bg.layers[0].t.d.k[0].s.t = ""+(_userData.tokenBalance - slider.value);

    // Point Balance:

    assets.gameplay_bg.layers[1].t.d.k[0].s.t = ""+_userData.pointBalance;

    // Background:

    var gameBG = {
      container: document.getElementById('gameBG'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad: false
      },
    
      animationData: assets.gameplay_bg
    }
    
    lottie.loadAnimation(gameBG);

    // win Fx:

    var fxAnimation = {
      container: document.getElementById('win-fx'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad: false
      },
    
      animationData: assets.winFX
    }

    fx = lottie.loadAnimation(fxAnimation);

  }

  // Grouping up the loaded instances of Lottie:

  function setSpot () {
    var i;
      for (i=0; i<=8; i++) {
        fruitSpot['s'+ i] = animationsArray[i];
        coinSpot['c' + i] = coinsArray[i]
      }
    }


  // Building up the Game Play screen:

  placeFruits();
  setGamePlay();
  setSpot();
  
  // Dealing with more Lottie instances:

  var winningParams = {
    container: document.getElementById("winning"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad:false
    },
  
    animationData: assets.winning
  }
  
  var winningAnim = lottie.loadAnimation(winningParams)

  
  var celParams = {
    container: document.getElementById("cel"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    rendererSettings: {
        progressiveLoad:false
    },
  
    animationData: assets.celebration
  }
  
  var celAnim = lottie.loadAnimation(celParams)

  var tagAsset = {
  container: document.getElementById("asset"),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
      progressiveLoad:false
  },

  animationData: assets.tags
  }

  bodymovin.loadAnimation(tagAsset)


  // Creating fake divs to catch the clicks on the spots:

  function appendFakeDivs() {

    for(var i = 1; i <= 9; i++) {

      
      // Retrieving the position from the 'cl' parameter of the layer:

      var assetPosition = $('.spot-' + i).position();


      // Creating and styling the divs on the fly:

      var divString = "<div class='tag' id='tag-" + i + "'></div>";
      var leftMargin = $('.main-container').position().left;
      
      $('#game-screen').append(divString)
      $('#tag-' + i).css({
        position: 'absolute',
        //cursor: 'pointer',
        height: '15%',
        width: '15%',
        left: ((assetPosition.left - leftMargin) + 10) + "px",
        top: (assetPosition.top + 10) + "px",
        zIndex: 1100
      })

      tagSpot['t'+ i] = document.getElementById('tag-'+i)
    
    } 
    
  }


  appendFakeDivs();

  
  $('.tag').click(function () {
  
  if(!isMuted){
  scratching.play()
  }
  if(isMuted){
  scratching.pause()
  }
  setTimeout(function(){
    if(!isMuted){
    scratching.pause()
    whoosh.play()
    }
    if(isMuted){
    scratching.pause()
    whoosh.pause()
    }
  }, 2000)
    // Retrieving the index of each div:

    var selectedIndex = $(this).attr('id').split('-')[1] - 1 
    console.log(selectedIndex)
    coinSpot['c'+ selectedIndex].play();
    fruitSpot['s'+ selectedIndex].play();
    (matrix[selectedIndex] == 1) ? fruitsFound++ : fruitsFound;

    setTimeout(function(){ if (fruitsFound == 3) {

      fx.play();

      setTimeout(function(){
        gameWon()

        $('#play-again').fadeIn()
        playAgain()
        //$('#play-again').click(function(){window.location.reload()})
      }, 1200 )
      setTimeout(function(){
      if(!isMuted){
      prize.play()
      gamePlaySound.pause()
      }
      if(isMuted){
        prize.pause()
        gamePlaySound.pause()
      }
      }, 1000)
      if(playID == 10){
        setTimeout(function(){
          if(!isMuted){
            crowd.play()
          }
          if(isMuted){
            crowd.pause()
          }
        }, 1000)
      }

    } else {

      fx.stop()

    }}, 2000 )

  });

  
  // Winning Screen:

  function gameWon() {
    
    $('.tag').css({zIndex: 0});

    winningAnim.play();
    
    if (playID == 10) {
      celAnim.play()
    } else {
      celAnim.stop()
    }

  }

}

// Init:

function init() {

  if (isReady) {
    hit = document.getElementById('hit');
    whoosh = document.getElementById('whoosh');
    prize = document.getElementById('prize');
    breakSound = document.getElementById('break');
    crowd = document.getElementById('crowd');
    themeSound = document.getElementById('theme-song');
    gamePlaySound = document.getElementById('gamplay-theme');
    scratching =  document.getElementById('scratching');
    slider = document.getElementById('myRange');

    if(!isMuted){
    themeSound.loop = true
    themeSound.play()
    }
    if(isMuted){
      themeSound.pause()
      themeSound.loop = false
    }

    $('.sound-toggle').click(function(){
        isMuted = !isMuted
        setSoundSettings()
    })

        $('.questionmark').click(function(){
        $('#prices').css({zIndex: 2000, opacity: 1})
        $('#prices').click(function(){
            $('#prices').css({opacity: 0, zIndex: 0})
        })
    })


    $('#play-again').fadeOut();


    // API Call:

    $.ajax({

      type: "POST", 
      url: "http://qa.staging.snowfly.com/gameapi/v1/getStartInfo",
      
      data: { gameId: _gameID },

      success: function( data ) {

      __tokensResponse = data.playId;
      _userData = data;
      

      // Token Balance:

      assets.tokenScreen.layers[0].t.d.k[0].s.t = _userData.tokenBalance+"";

      // Point Balance:

      assets.tokenScreen.layers[1].t.d.k[0].s.t = _userData.pointBalance+"";

      // Slider Validation:

      if (_userData.tokenBalance < 250) {
        slider.max = _userData.tokenBalance;
        assets.tokenScreen.layers[4].t.d.k[0].s.t = slider.max+""; 
      } else {
        slider.max = 250;
        assets.tokenScreen.layers[4].t.d.k[0].s.t = slider.max+"";
      }

          
      if (_userData.tokenBalance > 0){   
        $('#no-tokens-screen').css({display: 'none'}) 
        }
    

      if(_userData.status == 0){
          setTimeout(function (){
          $('#about').fadeOut()
          $('#t-s').text(_userData.message)
          $('#no-server-request').fadeIn()
          },1000) 
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


      }
      
    });

    


    $('.layer').css({
	    height: ($('.layer').width() * 720 / 720) + "px", 
        maxHeight: window.innerHeight + "px",
        maxWidth: ($(window).height() * 720 / 720) + "px"
    })

    $('.super-container').css({
        maxWidth: ($(window).height() * 720 / 720) + "px"
    })

    document.addEventListener('touchmove', function(e){
      e.preventDefault();
    })

    $('#loading-screen').fadeOut()

    var animation = {
      container: document.getElementById('instructions'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad:false
      },
    animationData: gameJSONs.instructions
    }

    var startScreen = {
      container: document.getElementById("start-screen"),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad:false
      },

      animationData: assets.startScreen
    }

    var startScreenAnim = lottie.loadAnimation(startScreen)
    startScreenAnim.play()

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


    balance = {
      container: document.getElementById("balance"),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad:false
      },

      animationData: assets.tokenScreen
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
  
    // Tokens to play Text Layer Functionality:

    tokensJAnim = lottie.loadAnimation(tokensJ)
    tokensJAnim.addEventListener("DOMLoaded", function() {
    
      tokensJAnim.renderer.elements[0].updateDocumentData({t: slider.value+"", s:120});
  
    });

    $('#instructions').click(function(){
     
    $('#instructions').fadeOut(function(){
        $('#instructions').css({zIndex: 2000})
    })
    })

    setTimeout(function(){
      $('#instructions').fadeOut(function(){
          $('#instructions').css({zIndex: 0})
      })
    },3500)

    $('#start-button').click(function(){
      $(this).addClass('disable')
        startButtonAnim.play()
        if(!isMuted){
        hit.play()
        }
        if(isMuted){
          hit.pause()
        }
        setupInitLayers()
    })

    var startButtonAnim = bodymovin.loadAnimation(startButton)

      if(window.location.href.match("no-init") != null){
        isMuted = (getParameterByName('isMuted') == 'true');
        setSoundSettings()
        startButtonAnim.playSegments([1, 10], true)
        $('#init-screen').fadeOut(function(){
            setupInitLayers()
      })
    } 
  
  } 

}

function playAgain(){
    $('#play-again').click(function(){
      $(this).addClass('disabled')
      if(isMuted == 0){
          hit.play()
      }
      if(isMuted){
        hit.pause()
      }
      setTimeout(function(){
          var mainURL = location.protocol + '//' + location.host + location.pathname
          window.location.href = mainURL+ "?no-init=true&isMuted=" + isMuted
          $('#s-layer').hide();

      },500)
  }) 
}

function setupInitLayers(){
    setTimeout(function(){$('.init-screen').css({zIndex: -1})}, 500)

    $('#init-screen').fadeOut()
    
    var playButton = {
      container: document.getElementById("play-button"),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
          progressiveLoad:false
      },

      animationData: assets.playButton
    }
    var playButtonAnim = bodymovin.loadAnimation(playButton)

    $('#play-button').click(function(){
      $(this).addClass('disable')
      $('#token-screen').fadeOut()
        $(this).css({opacity: 0.5, pointerEvents: 'flex'})
        playButtonAnim.play()
        if(!isMuted){
        hit.play()
        }
        if(isMuted){
        hit.pause()
        }
          isPlayClicked = true
          $.ajax({
          type: "POST", 
          url: "http://qa.staging.snowfly.com/gameapi/v1/playGame", 
          data: { tokens: slider.value, gameId: _gameID },
          success: function( data ) {                
              playID = data.playId
              //playID = 10;
              __tokensResponse = data;
              setGamePlay(playID);
            }
        });               
    });

}


function loading(){


  var loadingScreen = {
  container: document.getElementById("loading-screen"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  rendererSettings: {
      progressiveLoad:false
  },

  animationData: assets.loadingScreen
  }

  var loadingScreenAnim = lottie.loadAnimation(loadingScreen)
  loadingScreenAnim.play();

    setTimeout(function(){

        init();

    },1000)

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
  
  scratching.volume = (isMuted) ? 0 : 1
  gamePlaySound.volume = (isMuted) ? 0 : 1
  themeSound.volume = (isMuted) ? 0 : 1
  hit.volume = (isMuted) ? 0 : 1
  breakSound.volume = (isMuted) ? 0 : 1
  whoosh.volume = (isMuted) ? 0 : 1
  prize.volume = (isMuted) ? 0 : 1
  crowd.volume = (isMuted) ? 0 : 1

}