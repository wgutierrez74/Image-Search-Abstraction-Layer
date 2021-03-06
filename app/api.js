var https = require('https');
var bl = require('bl');

var methods = {};


methods.pixabay = function(search, offset, response){
  var options = {
    host : "pixabay.com",
    port: 443,
    path: "/api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo",
    method: "GET"
  };
  
  https.request(options, function(res){
      res.setEncoding("utf8");
      res.pipe(bl(function(err, data){
        if(err){console.log(err); return;}
        data = data.toString();
        data = JSON.parse(data);
        data = data.hits;
        var images = [];
        for(var i = offset; i<data.length; i++){
          var json = {
            "URL":data[i].webformatURL,
            "Tags":data[i].tags,
            "Thumbnail":data[i].previewURL,
            "Context":data[i].pageURL
          };
          images.push(json);
          if(i==offset+10){
            break;
          }
        }
        response.send(images);
  }))}).end();
  
  
}
  //return data
module.exports = methods;