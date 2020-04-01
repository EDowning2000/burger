const mysql= require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: 'Emerson150',
  database: 'burgers_db'
});

connection.connect(function(err){
  if (err){
    console.log('Error Making connection')
  }
})

module.exports= connection;