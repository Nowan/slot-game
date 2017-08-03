function Slot(game, ctx2d, res, x, y){
  var container = new CanvasImage(this, ctx2d, res.slot, x, y);
  var sym = new CanvasImage(this, ctx2d, res.sym_1, x - 15, y + 37);
  
  this.draw = function(){
    container.draw();
    sym.draw();
  }
}