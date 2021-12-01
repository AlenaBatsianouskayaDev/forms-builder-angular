const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const api = require('./authRoutes');

const app = express();

app.use(express.json());
app.use('/api', api);

const db =
  'mongodb+srv://AlenaBo:love1209@formsbuilder.1jvyi.mongodb.net/formBuilder?retryWrites=true&w=majority';

const start = async () => {
  try {
    await mongoose.connect(db);
    app.listen(PORT, () => {
      console.log(`server started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
