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
  
  this.loadImages = function(){
    return new Promise((resolve, reject) => {
      _fetchResources().then((resources) => {
        var loaded_images = { length: 0 };
        
        function onImageLoad(data){
          loaded_images.length++;
          loaded_images[data.resource.id] = data.image;
          if(loaded_images.length >= resources.length)
            resolve(loaded_images);
        }
      
        for( var i = 0; i < resources.length; i++ ){
          var resource = resources[i];
          _loadImage(resource).then(onImageLoad);
        }
      });
    });
  }
  
}