function GameState(){
  
  this.init = function(resources){};
  
  // private variables
  var _canvas = document.getElementById('canvas');
  var _ctx = _canvas.getContext('2d');
  var _res = {};
  
  this.init = function(resources){
    _res = resources;
    
    _ctx.drawImage(_res.background, 0, 0);
  }
}