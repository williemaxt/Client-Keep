const express = require('express');
const app = express();

console.log('server is running * * *')
app.get('/home', (req,res) => {
  res.send({
    message: 'Hello From Index'
  })
});

app.get('/create', (req,res) => {
  res.send({
    message: 'The create page'
  });
});


// allowig app to begin listening for requests(starting server)
app.listen(process.env.PORT || 2000)
