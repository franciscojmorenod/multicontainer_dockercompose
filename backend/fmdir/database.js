import mysql from 'mysql2'

const pool = mysql.createPool({
	host: 'db',
	user: 'root',
	password: 'db-btf5q',
	database: 'fjmdDB'
}).promise()

const results = await pool.query("SHOW DATABASES")
console.log(results)


const results2 = await pool.query("SHOW TABLES")
console.log(results2)

const results3 = await pool.query("SELECT * FROM fm_users")
console.log(results3)


