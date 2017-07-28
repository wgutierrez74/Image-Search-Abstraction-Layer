var $ = require('jquery').create();

var methods = {};


methods.pixabay = function(search){
  var url = "https://pixabay.com/api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo";
  return $.getJSON(url, function(data){
      return data;
  });
  
  
  
  
  
  //return data;
}
