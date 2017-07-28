var db = require("./database.js");
var api = require("./api.js");
var https = require('https');
var bl = require('bl');

module.exports = function(app){
  
  app.route('/').get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });
  
  
  app.route('/api/:search').get(function(req, res){
      
    var search = req.params.search;
    //db.insert(search);
    
    
    
    var offset = req.query.offset;
    //consume(search);
    var pixabay = api.pixabay(search, res);
    //res.send(pixabay);
    
    
    //res.send("yeah");
    
    
    
    
    
    
    
  });
  
  
//   function consume(search){
//       var url = "https://pixabay.com/api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo";
//   // return $.getJSON(url, function(data){
//   //     return data;
//   // });
//   var options = {
//     host : "pixabay.com",
//     port: 443,
//     path: "/api/?key=6024228-33f0d0b2607fe85665a765b2a&q="+search+"&image_type=photo",
//     method: "GET"
//   };
  
//   var getRequest = https.request(options, function(res){
//       res.setEncoding("utf8");
//       res.pipe(bl(function(err, data){
//         if(err){console.log(err); return;}
//         //console.log(data);
//         //console.log(data.toString().length);
//         console.log(data.toString());
//         res.write(data.toString());
//   }))});
  
//   getRequest.end();
    
    
    
//   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};