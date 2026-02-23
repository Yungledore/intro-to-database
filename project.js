var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "200511",
  database: "faris",
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE Faris(Age INT, FirstName  VARCHAR(255), LastName VARCHAR(255), City VARCHAR(255))";

  
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });
});