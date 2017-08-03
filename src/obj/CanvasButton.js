function CanvasButton(game, ctx2d, image, x, y, actionCallback){
  CanvasImage.call(this, game, ctx2d, image, x, y);
  
  // public variables
  this.type = "button";
  
  // private variables
  var _actionCallback = actionCallback;
  
  // public functions
  this.handleEvent = function(event){
    if(!_actionCallback) return;
    
    if(event.clientX > this.x && event.clientY < this.x + this.width &&
       event.clientY > this.y && event.clientY < this.y + this.height )
      _actionCallback();
  }
}

CanvasButton.prototype = Object.create(CanvasImage.prototype);
CanvasButton.prototype.constructor = CanvasButton;