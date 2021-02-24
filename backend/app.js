const expresss = require('express');
const app = expresss();

app.use(expresss.json());

//import all routes
const products = require('./routes/product');

app.use('/api/v1', products);
module.exports = app;