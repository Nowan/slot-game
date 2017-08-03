function CanvasImage(game, ctx2d, image, x, y){
  
  // public functions
  this.draw = function(){};
  this.setPosition = function(x, y){};
  this.setImage = function(image){};
  
  // private variables
  var _x = x; 
  var _y = y;
  var _image = image;
  
  // functions initialization
  this.draw = function(){
    ctx2d.drawImage(_image, _x, _y);
  }
  
  this.setPosition = function(x, y){
    _x = x;
    _y = y;
    game.redraw();
  }
  
  this.setImage = function(image){
    _image = image;
    game.redraw();
  }
}