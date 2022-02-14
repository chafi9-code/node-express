const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log('request recived');
  next();
});

app.use((request, response, next) => {
  response.status(201);
  next();
});

app.use((request, response, next) => {
  response.json({message: 'request recived with success'});
  next();
});

app.use((request, response, next) => {
  console.log('respons sent');
});

module.exports = app;
