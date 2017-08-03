function GameState(){
  
  this.init = function(resources){};
  
  // private variables
  var _canvas = document.getElementById('canvas');
  var _ctx = canvas.getContext('2d');
  var _res = {};
  var _objects = [];
  
  this.redraw = function(){
    _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
    for( var i = 0; i < _objects.length; i++ )
      _objects[i].draw();
  }
  
  this.init = function(resources){
    _res = resources;
    
    var background = new CanvasImage(this, _ctx, _res.background, 0, 0);
    var button = new CanvasButton(this, _ctx, _res.spin, 824, 218);
    
    _objects.push(background);
    _objects.push(button);
    
  }
}