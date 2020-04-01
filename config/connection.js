var connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: 'Emerson150',
  database: 'burgers_db'
});

module.exports= connection