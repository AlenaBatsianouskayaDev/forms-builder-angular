const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
router.get('/', (req, res) => {
  res.send('From API');
});

const db =
  'mongodb+srv://AlenaBo:love1209@formsbuilder.1jvyi.mongodb.net/usersDB?retryWrites=true&w=majority';

module.exports = router;

mongoose.connect(db, err => {
  if (err) {
    console.log('error' + err);
  } else {
    console.log('connected to Mongo DB');
  }
});
