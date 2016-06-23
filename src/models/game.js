/* eslint-disable new-cap */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this enforces a schema..so if you save a task
//   with other props won't be saved

const taskSchema = new Schema({
  name: String,
  heads: { type: Number, default: 0 },
  tails: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', taskSchema);
