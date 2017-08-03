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
    var spin_btn = new CanvasButton(this, _ctx, _res.spin, 824, 218);
    
    var balance_lbl = new CanvasText(this, _ctx, 'Your balance', 670, 135, 28, 'Lobster');
    balance_lbl.setAlignment('center');
    
    var balance_indicator = new CanvasText(this, _ctx, '100$', 670, 185, 28, 'Lobster');
    balance_indicator.setAlignment('center');
    
    var bet_lbl = new CanvasText(this, _ctx, 'Bet', 670, 285, 28, 'Lobster');
    bet_lbl.setAlignment('center');
    
    var bet_indicator = new CanvasText(this, _ctx, '1$', 670, 335, 28, 'Lobster');
    bet_indicator.setAlignment('center');
    
    var bet_dcr_btn = new CanvasButton(this, _ctx, _res.minus, 580, 320);
    var bet_icr_btn = new CanvasButton(this, _ctx, _res.plus, 722, 306);
    
    var sym_indicator = new CanvasImage(this, _ctx, _res.sym_1, 
                                        429 - _res.sym_1.width * 0.5, 
                                        (canvas.height - _res.sym_1.height) * 0.5);
    
    var sym_up = new CanvasButton(this, _ctx, _res.arrow_up, 429 - _res.arrow_up.width * 0.5, 90);
    var sym_down = new CanvasButton(this, _ctx, _res.arrow_down, 429 - _res.arrow_down.width * 0.5, 370);
    
    _objects.push(background);
    _objects.push(spin_btn);
    _objects.push(balance_lbl);
    _objects.push(balance_indicator);
    _objects.push(bet_lbl);
    _objects.push(bet_indicator);
    _objects.push(bet_dcr_btn);
    _objects.push(bet_icr_btn);
    _objects.push(sym_indicator);
    _objects.push(sym_up);
    _objects.push(sym_down);
    
    this.redraw();
  }
}