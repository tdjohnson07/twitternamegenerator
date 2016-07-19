var express=require('express');
var index=require('./routes/index');
var pg=require('pg');
var app=express();
var config={
  database: 'twitternames',
  port: 5432
};

app.use(express.static('public'));
app.use('/', index);

app.get('/getadjs', function(request, response){
  var client= new pg.Client(config);
  var adjs={};
  client.connect(function(err){
    if(err){
      console.log(err);
    }
   adjs=client.query('SELECT * FROM adj', function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('Big success');
        response.send(adjs);
      }
      client.end(function(err){
        if(err){
          console.log('diconect', err);
        }
      })
    })
  })
});
app.get('/getNouns', function(request, response){
  var client= new pg.Client(config);
  var nouns={};
  client.connect(function(err){
    if(err){
      console.log(err);
    }
   nouns=client.query('SELECT * FROM nouns', function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log('Big success');
        response.send(nouns);
      }
      client.end(function(err){
        if(err){
          console.log('disconect', err);
        }
      })
    })
  })
});


var server = app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port', port);
});
