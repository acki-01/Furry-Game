
var Furry=require('./furry.js');
var Coin=require('./coin.js');

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
self.furryDirection(event);
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
module.exports = Game;
