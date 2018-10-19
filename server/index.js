const connection = require('./connection') // including our connection file
const mysql = require('mysql') //allows us to use mysql
const express = require('express');
const cors = require('cors') // allows clients to access this app
const bodyParser = require('body-parser') // makes it easy to parse post
const bcrypt = require('bcrypt') // allows us to use bcrypt

const app = express();
app.use(cors())
app.use(bodyParser.json())

console.log('server is running * * *')
//getting the users info
app.get('/getInfo', (req,res) => {

  res.send({
    name: 'William Thompson', //put query results here
    number: '2158245998'
  })
})
app.post('/login', (req,res) => {
  //perform queries and bcrypt actions here
//Setting variables for email and password
var email = req.body.email;
var password = req.body.password;
var hash;
// sql query
connection.conn.connect()
// example query to show that we can select individuals
var sql = 'SELECT password FROM users WHERE email LIKE "'+email+'"'
console.log(sql)
// executing the query
connection.conn.query(sql, function (err, result, fields) {
  if (err) throw err;
  // variable for hash from database
  hash = result[0].password
  //matching the hash to the password
  if(bcrypt.compareSync(password, hash)) {
  // Passwords match
  res.send({
    email: `${req.body.email}`
  })
  console.log('The login was successful')
  } else {
  // Passwords don't match
  res.send({
    message: `The Login was not successful`
  })
  console.log('the login was not successful');
  }
})
//closing the connection
connection.conn.end()
});

app.post('/register', (req,res) => {
  //getting variables from the post body
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name
  let hash = bcrypt.hashSync(password, 12); // TODO: change value
  //logging for development
  console.log(hash);
  // sql query
  connection.conn.connect()
  // example query to show that we can select individuals
  var sql = 'INSERT INTO users (name, email, password) VALUES ("'+name+'", "'+email+'", "'+hash+'")'
  // executing the query
  connection.conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Account Created");
  })
  //closing the connection
  connection.conn.end()
  res.send({
    message: `Hello ${req.body.name} you have successfully registered`
  })
});

// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 2000);
