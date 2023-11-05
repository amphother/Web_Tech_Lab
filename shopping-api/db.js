// db.js
const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/shoppingdb'; // Replace with your MongoDB connection URL

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

module.exports = mongoose;
