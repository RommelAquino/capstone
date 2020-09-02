const mongoose = require('mongoose')
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

console.log('MONGO DB =', process.env.MONGODB_URI);
const configOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch(err => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Product: require("./Product")
};