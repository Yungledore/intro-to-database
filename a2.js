var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "200511",
    database: "student",
})
connection.connect((err) => {
    if(err)throw err
    console.log("Connected");
    var sql = "CREATE TABLE Student(Student_id INT, Student_FirstName  VARCHAR(255), Student_LastName VARCHAR(255), Student_City VARCHAR(255))";
    connection.query(sql, function(err,result){
        if(err) throw err;
        console.log("table created in DB");
    })
})