const express = require('express');
const app = express();
const connecttomongo = require('./db');
const cors = require('cors')
const User = require('./model/user.js')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const errorMiddleware = require('./middlewares/error.js')
app.use(cors())
connecttomongo();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
cloudinary.config({
  cloud_name: "dshmcwnwc",
  api_key: "941735529353799",
  api_secret: "D35vlzbTOcWqXODVK8_g6RXviDc"
});
app.use('/api/user', require('./routes/user.js'))
app.use('/api/admin', require('./routes/admin.js'))


  app.use(errorMiddleware);
  module.exports = app;