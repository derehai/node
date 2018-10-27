var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var http = require("http");

const { Pool, Client } = require('pg');


var pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 5432,
});

var client = new Client({
  user: 'ufjojhdqyyepxv',
  host: 'ec2-75-101-138-26.compute-1.amazonaws.com',
  database: 'dek32urh8p319c',
  password: 'e820c4b8bc8784d457ffe4af407f6a0f338af4d8cf4f3151964352438ab92604',
  port: 5432,
});


client.connect();


app.get('/jobs', (request, response) => {
    client.query('SELECT * FROM jobs', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/jobs/:berufsfeld',(request, response) => {
var ber = request.params.berufsfeld;

var sql = "SELECT * FROM jobs Where berufsfeld ='"+ber+"'";

    client.query(sql,(error, result) => { 
        if (error) throw error;
 
        response.send(result);
    });
}); 
 
//app.use('/',index);
//app.use('/job',job);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
