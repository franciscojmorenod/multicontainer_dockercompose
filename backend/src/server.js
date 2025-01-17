// simple node web server that displays hello world
// optimized for Docker image

const express = require("express");
// this example uses express web framework so we know what longer build times
// do and how Dockerfile layer ordering matters. If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.

// const morgan = require("morgan");
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

const database = require("./database");
const bodyParser = require('body-parser')
const cors = require('cors');
const mysql = require("mysql2");

// Appi
const app = express();

//app.use(morgan("common"));
 //var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration


// CORS is enabled for the selected origins
// let corsOptions = {
//   origin: [ 'http://localhost:5173', 'http://localhost:3000' ]
// };

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'db-btf5q',
  database: 'fjmdDB'
}).promise()

//app.use(express.urlencoded({ extended: true }));

// // parse application/json
app.use(bodyParser.json())

app.get("/", async function(req, res, next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
    // const results = await pool.query("SHOW DATABASES")
    // const rows = results[0];
    // res.json( rows)

});

app.get("/dbversion", function(req, res,next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
 });

app.get("/dbuser", function(req, res,next) {
  database.raw('select USER() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
 });

app.get("/dbdate", function(req, res,next) {
  database.raw('select CURRENT_DATE version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
});

app.get("/getdatabases", async function(req, res) {
  const results = await pool.query("SHOW DATABASES")
  const rows = results[0];
  res.json( rows)
 });

app.get("/gettables", async function(req, res) {
  const results2 = await pool.query("SHOW TABLES")
  const rows = results2[0];
  res.json( rows)
});

app.get("/getusers", async function(req, res) {
  const results3 = await pool.query("SELECT * FROM fm_users")
  const rows = results3[0];
  res.json( rows)
});

app.get("/healthz", function(req, res) {
   res.json({ message: `I am happy and healthy\n` })
});

app.get("/insert", async function(req, res) {
const results3 = await pool.query("INSERT INTO fm_users VALUES ('Test', 'Usuario', '1900-01-01', 'M', '1001 Main Road FL 33578', 'test@gmail.com', '123-4567890')");
const rows = results3[0];
res.json( rows)  
//res.json({ message: `I am happy to insert it\n` })
});

app.get("/delete", async function(req, res) {
const results3 = await pool.query("DELETE FROM fm_users WHERE ( firstname = 'Test' and phone = '123-4567890')");
const rows = results3[0];
res.json( rows)  
});


app.post("/delete", async function(req, res) {
  const {firstname , lastname} = req.body;
  const qury = `DELETE FROM fm_users WHERE  (firstname = '${firstname}' and lastname = '${lastname}')`;
  const results3 = await pool.query(qury);
  const rows = results3[0];
  res.json( rows)  
  });
  

app.post("/insert", async function(req, res) {
const {firstname , lastname, dob, sex, address, email, phone} = req.body;
const qury = `INSERT INTO fm_users VALUES ('${firstname}' , '${lastname}' , '${dob}' , '${sex}' , '${address}' , '${email}' , '${phone}')`;
const results3 = await pool.query(qury);
res.json({ message: `I am happy with post insert ${firstname} ${lastname} - ${dob} - ${sex} - ${address} - ${email} - ${phone}` })
});


module.exports = app;
