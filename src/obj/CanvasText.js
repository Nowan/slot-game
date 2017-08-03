function CanvasText(game, ctx2d, text, x, y, font_size = 12, font_family = 'serif', color = '#FFFFFF'){
  // public variables
  this.type = "text";
  
  // public functions
  this.draw = function(){};
  this.setPosition = function(x, y){};
  this.setColor = function(color){};
  this.setAlignment = function(align){};
  
  // private variables
  var _x = x; 
  var _y = y;
  var _text = text;
  var _font_size = font_size;
  var _font_family = font_family;
  var _color = color;
  var _align = 'start';
  
  // functions initialization
  this.draw = function(){
    ctx2d.save();
    ctx2d.font = _font_size + 'px ' + _font_family;
    ctx2d.textAlign = _align;
    ctx2d.fillStyle = _color;
    ctx2d.fillText(_text, _x, _y);
    ctx2d.restore();
  }
  
  this.setPosition = function(x, y){
    _x = x;
    _y = y;
    game.redraw();
  }
  
  this.setAlignment = function(align){
    _align = align;
    game.redraw();
  };
}