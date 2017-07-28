var mongo = require('mongodb').MongoClient;

var url = 'mongodb://will:gutierrez@ds125623.mlab.com:25623/fcc-backend';


var methods ={};

methods.insert = function(search){
  mongo.connect(url, function(err, db){
    //var date = new Date();
    db.collection('search-history').insert({"term":search, "when": new Date().toString()});
    db.close();
  });
};

methods.showHistory = function(response){
  mongo.connect(url, function(err, db){
    if(err) throw err
    db.collection("search-history").find().sort({"when":-1}).limit(10).toArray(function(err, history){
      response.send(history);
    });
  });
}


module.exports = methods;