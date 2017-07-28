var mongo = require('mongodb').MongoClient;

var url = 'mongodb://will:gutierrez@ds125623.mlab.com:25623/fcc-backend';


var methods ={};

methods.insert = function(search){
  mongo.connect(url, function(err, db){
    db.collection('search-history').insert({})
  });
}