function LoadState(){
  
  this.startLoading = function(loadCallback){}
  
  function _fetchResources(){
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "data/resources.json");
      xhttp.onload = () => resolve(JSON.parse(xhttp.responseText));
      xhttp.onerror = () => reject(xhttp.statusText);
      xhttp.send();
    });
  }
  
  function _loadImage(resource){
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.onload = () => resolve({ resource: resource, image: image });
      image.src = resource.path;
    });
  }
  
  function _loadFont(resource){
    return new Promise((resolve, reject) => {
      WebFont.load({
        google: { families: [resource.family] },
        active: resolve,
        inactive: reject
      });
    });
  }
  
  this.loadResources = function(){
    return new Promise((resolve, reject) => {
      _fetchResources().then((resources) => {
        var loaded_resources = { length: 0 };
        
        function onImageLoad(data){
          loaded_resources.length++;
          loaded_resources[data.resource.id] = data.image;
          if(loaded_resources.length >= resources.length)
            resolve(loaded_resources);
        }
        
        function onFontLoad(){
          loaded_resources.length++;
          if(loaded_resources.length >= resources.length)
            resolve(loaded_resources);
        }
      
        for( var i = 0; i < resources.length; i++ ){
          var resource = resources[i];
          
          switch(resource.type){
            case "image":
              _loadImage(resource).then(onImageLoad);
              break;
            case "font":
              _loadFont(resource).then(onFontLoad);
              break;
          }
        }
      });
    });
  }
  
}