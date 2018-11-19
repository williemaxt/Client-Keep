const connection = require('./connection') // including our connection file
const mysql = require('mysql') //allows us to use mysql
const express = require('express');
const cors = require('cors') // allows clients to access this app
const bodyParser = require('body-parser') // makes it easy to parse post
const bcrypt = require('bcrypt') // allows us to use bcrypt

const app = express();
app.use(cors())
app.use(bodyParser.json())

console.log('server is running * * *');

app.post('/deleteClients', (req,res) =>{
  console.log('Delete Clients called');
  var userEmail = req.body.userEmail;
  var clientEmail = req.body.email;
  var sql = 'DELETE FROM clients WHERE userEmail="'+userEmail+'" AND email="'+clientEmail+'"';
  connection.conn.query(sql, function (err, result, fields) {
    res.send('success');
  });
});

app.post('/getClients', (req,res) => {
  //creating a variable for data
  var data;
  //getting the user email from the rquest body
  var userEmail = req.body.userEmail;
  //sql query
  var sql = 'SELECT * FROM clients WHERE userEmail LIKE "'+userEmail+'"';
  // executing the query
  connection.conn.query(sql, function (err, result, fields) {
    console.log(result);
    //stringifying result in data
    res.send(result)
  })
});

app.post('/createClient', (req,res) => {
  var userEmail = req.body.userEmail;
  var name = req.body.name;
  var email = req.body.email;
  var number = req.body.number;
  var details = req.body.details;
  // sql query
  var sql = 'INSERT INTO clients (userEmail, name, email, number, details) VALUES ("'+userEmail+'", "'+name+'", "'+email+'", "'+number+'", "'+details+'")';
  // executing the query
  connection.conn.query(sql, function (err, result) {
    console.log(result);
    res.send('success');
  })
});

//getting the users info
app.post('/getInfo', (req,res) => {
  var email = req.body.email;
  console.log('the email is: ' + email);
  // sql query
  // example query to show that we can select individuals
  var sql = 'SELECT * FROM users WHERE email LIKE "'+email+'"'
  console.log(sql)
  // executing the query
  connection.conn.query(sql, function (err, result, fields) {
    console.log(result);
    res.send({
      name: result[0].name, //put query results here
      number: result[0].number
    })
  })
})

app.post('/login', (req,res) => {
  //perform queries and bcrypt actions here
//Setting variables for email and password
var email = req.body.email;
var password = req.body.password;
var hash;
// sql query
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
})
app.post('/register', (req,res) => {
  //getting variables from the post body
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name
  var number = req.body.number
  let hash = bcrypt.hashSync(password, 12); // TODO: change value
  //logging for development
  console.log(hash);
  // example query to show that we can select individuals
  var sql = 'INSERT INTO users (name, email, password, number) VALUES ("'+name+'", "'+email+'", "'+hash+'", "'+number+'")'
  // executing the query
  connection.conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Account Created");
  })
  res.send({
    message: `Hello ${req.body.name} you have successfully registered`
  })
});

// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 2000);
