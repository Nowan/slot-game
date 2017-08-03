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
  
  this.startLoading = function(loadCallback){
    _fetchResources()
      .then((resources) => {
        console.log(resources);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }
  
}