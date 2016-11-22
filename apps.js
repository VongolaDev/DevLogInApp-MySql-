var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
 var db;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
 

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/i', function (req, res) {
    res.render('index');
});
app.get('/home', function (req, res) {
    res.render('home');
});


app.get('/dashboard',function(req,res) {
	res.render('dashboard');
});

app.get('/db',function(req,res) {

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'accounts'
});
 
connection.connect();
 
connection.query("SELECT * FROM useraccts", function(err, rows, fields) {
  if (!!err)
  {
  	console.log(err);
  }
  else
  {
db = rows

  }
 

});
 
connection.end();
res.send(db);
});





app.listen(8080)