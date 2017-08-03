function Slot(game, ctx2d, res, x, y){
  
  // public functions
  this.draw = function(){};
  this.spin = function(finishCallback){};
  
  // private variables
  var _sym = 1;
  var _container = new CanvasImage(game, ctx2d, res.slot, x, y);
  var _sym_indicator = new CanvasImage(game, ctx2d, res["sym_" + _sym], x - 15, y + 37);
  
  // private functions
  function _spinSym(current_time, spinning_time, finishCallback){
    if(current_time < spinning_time){
      _sym = _sym + 1 <= 6 ? _sym + 1 : 1;
      _sym_indicator.setImage(res["sym_" + _sym]);
      
      var next_spin_time = 25 + 300 * (current_time / spinning_time);
      setTimeout(function(){
        _spinSym(current_time + next_spin_time, spinning_time, finishCallback);
      }, next_spin_time);
      
      var spin_sound = res.spin_sound.cloneNode();
      spin_sound.mozPreservesPitch = false; // allow pitch regulation in firefox
      spin_sound.playbackRate = 0.6 + 0.4 * (current_time / spinning_time);
      spin_sound.volume = 0.6 + 0.4 * (current_time / spinning_time);
      spin_sound.play();
    }
    else if(finishCallback) 
      finishCallback(_sym);
  }
  
  // functions initialization
  this.draw = function(){
    _container.draw();
    _sym_indicator.draw();
  }
  
  this.spin = function(finishCallback){
    var spinning_time = Math.floor(Math.random() * 3000) + 2000;
    _spinSym(0, spinning_time, finishCallback);
  }
}