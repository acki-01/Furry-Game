/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function Furry() {
  this.x = 0;
  this.y = 0;
  this.direction = "right";
}
function Coin() {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}//constructor of coins which will be collected by fury

function Game() {
  this.board=document.querySelectorAll('#board div');
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  var self=this;
  this.startGame = function(){
    this.idSetInterval = setInterval(function() {
    self.moveFurry()
    }, 250);
  }
this.index = function(x, y) {
  return x + (y * 10);
}
this.showFurry=function() {
  this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
}
this.showCoin= function() {
  this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  }
this.moveFurry= function() {
  this.hideVisibleFurry(); //zamiasta do showFurry, bo tam na początku nie ma klsy .furry
    if (this.furry.direction === "up") {
      this.furry.y -= 1;
    } else if (this.furry.direction === "right") {
      this.furry.x += 1;
    } else if (this.furry.direction === "down"){
      this.furry.y += 1;
    } else if (this.furry.direction === "left") {
      this.furry.x -=1;
    }
    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();
  }
  this.hideVisibleFurry= function() {
    var visible= document.querySelector('.furry');
    visible.classList.remove('furry');
  }
  this.furryDirection= function(event) {
    switch (event.which) {
  case 37:
    this.furry.direction = 'left';
    break;
  case 39: //zmiana
    this.furry.direction = 'right';
    break;
  case 38: //zmiana
    this.furry.direction = 'up';
    break;
  case 40:
    this.furry.direction = 'down';
    break;
  }
}
document.addEventListener('keydown', function(event){
game.furryDirection(event);
});
this.checkCoinCollision= function() {
  // var colission=Array.from(document.getElementsByTagName('div'));
  // colission.forEach(el){
  // if (el.classList.contains('furry' && 'coin')) {
  if(this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
    document.querySelector('.coin').classList.remove('coin');
    var result= document.querySelector('strong');
    result.textContent = parseInt(result.textContent) + 1;
    this.coin=new Coin();
    this.showCoin();
  }
}
this.gameOver= function() {
  if (this.furry.x<0 || this.furry.x>9 || this.furry.y<0 || this.furry.y>9) {
    clearInterval(this.idSetInterval);
    var over= document.getElementById('over');
    over.classList.remove('invisible');
    var score=document.querySelector('.endScore');
    var strong=document.querySelector('strong')
    score.textContent=strong.textContent;
    this.hideVisibleFurry(); 
    //gdy wywołuje wywala błąd poieważ furry znika sam z siebie za planszą
  }
}
}
var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();


/***/ })
/******/ ]);