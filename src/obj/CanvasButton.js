function CanvasButton(game, ctx2d, image, x, y){
  CanvasImage.call(this, game, ctx2d, image, x, y);
  
  
}

CanvasButton.prototype = Object.create(CanvasImage.prototype);
CanvasButton.prototype.constructor = CanvasButton;