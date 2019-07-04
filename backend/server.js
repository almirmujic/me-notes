// require express and cors packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const config = { useNewUrlParser: true, useCreateIndex: true };
mongoose.connect(uri, config);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const titleRouter = require('./routes/title');
const noteRouter = require('./routes/users');

app.use('./title', titleRouter);
app.use('./note', noteRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
