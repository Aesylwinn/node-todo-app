const mongoose = require('mongoose');

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {
  mongoose
};
