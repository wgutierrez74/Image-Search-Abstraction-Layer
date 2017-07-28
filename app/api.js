// let jsdom = require("jsdom");
// let $ = null;

// jsdom.env("http://quaintous.com/2015/07/31/jquery-node-mystery/",
//   function (err, window) {
//     $ = require('jQuery')(window);
//   }
// );
var https = require('https');
var bl = require('bl');

var methods = {};


methods.pixabay = function(search){
  var url = "https://pixabay.com/api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo";
  // return $.getJSON(url, function(data){
  //     return data;
  // });
  var options = {
    host : "pixabay.com",
    port: 443,
    path: "api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo",
    method: "GET"
  };
  
  var getRequest = https.request(options, function(res){
      res.setEncoding("utf8");
      res.pipe(bl(function(err, data){
        if(err){console.log(err); return;}
        //console.log(data);
        console.log(data.toString().length);
        console.log(data.toString());
  }))});
  
  getRequest.end();
  
}
  //return data
module.exports = methods;