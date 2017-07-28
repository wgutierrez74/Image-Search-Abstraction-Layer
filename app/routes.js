


module.exports = function(app){
  
  
  app.route('/').get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });
  
  
  app.route('/api/:search').get(function(req, res){
    
    
    
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};