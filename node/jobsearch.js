var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var http = require("http");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hallo111",
  database: "jobTrans"

});

/*con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM jobs", function (err, result, fields) {
    if (err) throw err;
    response.send(result);
   // console.log(result);
  });
});*/
//

app.get('/jobs', (request, response) => {
    con.query('SELECT * FROM jobs', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/jobs/:berufsfeld',(request, response) => {
var ber = request.params.berufsfeld;
var sql = "SELECT * FROM jobs Where berufsfeld = ?";
    con.query(sql,[ber],(error, result) => {
        if (error) throw error;
 console.log(ber);
        response.send(result);
    });
}); 
 
//app.use('/',index);
//app.use('/job',job);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
