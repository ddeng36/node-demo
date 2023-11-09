const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
})

connection.connect((err)=>{
    if(err)
        throw err;
    console.log('Connected!');


    //create db
    // connection.query("CREATE DATABASE mydb",(err,res)=>{
    //     if(err)
    //         throw err;
    //     console.log("Database created!");
    // })
    
    // create table
    // const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // connection.query(sql,(err,res)=>{
    //     if(err)
    //         throw err;
    //     console.log("Table created!");
    // })

    
}
);