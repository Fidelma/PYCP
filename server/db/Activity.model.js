const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Activity = new Schema({
  title: String,
  day: String,
  startTime: String,
  endTime: String,
  age: [String],
  gender: String,
  location: String,
  description: String
})

module.exports = mongoose.model('Activity', Activity);
