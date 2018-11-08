const mysql = require('mysql') //allows us to use mysql

const conn = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'ogbytheoz',
  database : 'client_keep'
});
module.exports = {
  conn
}
