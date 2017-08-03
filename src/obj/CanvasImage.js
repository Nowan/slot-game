function CanvasImage(game, ctx2d, image, x, y){
  // public variables
  this.type = "image";
  this.x = x;
  this.y = y;
  this.width = image.width;
  this.height = image.height;
  
  // public functions
  this.draw = function(){};
  this.setPosition = function(x, y){};
  this.setImage = function(image){};
  
  // private variables
  var _image = image;
  
  // functions initialization
  this.draw = function(){
    ctx2d.drawImage(_image, this.x, this.y);
  }
  
  this.setPosition = function(x, y){
    this.x = x;
    this.y = y;
    game.redraw();
  }
  
  this.setImage = function(image){
    _image = image;
    this.width = image.width;
    this.height = image.height;
    game.redraw();
  }
}