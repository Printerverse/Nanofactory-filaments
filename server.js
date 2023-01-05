const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

const mongoose = require('mongoose');
// const fetch = require("node-fetch");

var filamentsAPI = require('./api/filamentsAPI');

mongoose.connect( 
  'mongodb+srv://shubhamvora05:Stockdata@stockdata.lrlgm.mongodb.net/FilamentsData?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to database');
})
.catch((err) => {
  console.log('Error connecting to DB', err.message);
});

app.use('/',filamentsAPI);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});