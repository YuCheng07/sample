const mysql = require('mysql2')

const db = mysql.createPool({
  host: "dev-testdb.ctcm8i88mnas.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "Aa10211395",
  database: "project-test",
})

export default db