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
    
    /*_canvas.addEventListener('click', function(event){
      console.log(event.clientX, event.clientY);
    }, false);*/
    
    var background = new CanvasImage(this, _ctx, _res.background, 0, 0);
    var button = new CanvasButton(this, _ctx, _res.spin, 824, 218);
    var balance_lbl = new CanvasText(this, _ctx, "Your balance", 670, 135, 12, "Lobster")
    balance_lbl.setAlignment('center');
    
    _objects.push(background);
    _objects.push(button);
    _objects.push(balance_lbl);
    
    this.redraw();
  }
}