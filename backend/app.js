const express = require('express');

const app = express();
const endPoint = '/api/stuff';

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  response.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(endPoint, (request, response, next) => {
  const stuff = [
       {
      _id: 'object1',
      title: 'My first object',
      description: 'informations about my first object',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'ouruser',
    },
    {
      _id: 'object2',
      title: 'My second object',
      description: 'informations about my second object',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'ouruser',
    }, 
  ];
  response.status(200).json(stuff);
});


module.exports = app;
