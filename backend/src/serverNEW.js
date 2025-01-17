import mysql from 'mysql2'

const express = require("express");
const database = require("./database");
const app = express();


// const pool = mysql.createPool({
//   host: 'db',
//   user: 'root',
//   password: 'db-btf5q',
//   database: 'fjmdDB'
// }).promise()

// const results = await pool.query("SHOW DATABASES")
// console.log(results)

// const results2 = await pool.query("SHOW TABLES")
// console.log(results2)

// const results3 = await pool.query("SELECT * FROM fm_users")
// console.log(results3)



app.get("/", function(req, res) {
  // database.raw('select VERSION() version')
  //   .then(([rows, columns]) => rows[0])
  //   .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
  //   .catch(next);
  res.json({ message: `Hello from MySQL - this is a Test` });
});


// app.get("/dbuser", function(req, res,next) {
//   database.raw('select USER() version')
//     .then(([rows, columns]) => rows[0])
//     .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
//     .catch(next);
//  });

// app.get("/dbdate", function(req, res,next) {
//   database.raw('select CURRENT_DATE version')
//     .then(([rows, columns]) => rows[0])
//     .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
//     .catch(next);
// });

app.get("/database4", function(req, res) {
  res.json({ message: `database44\n` })
 });

app.get("/database3", function(req, res) {
  res.json({ message: `database3\n` })
});

app.get("/test", function(req, res) {
  res.json({ message: `I am happy and TESTY\n` })
});

app.get("/healthz", function(req, res) {
   res.json({ message: `I am happy and healthy\n` })
});

module.exports = app;



