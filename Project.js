const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  goalAmount: Number,
  raisedAmount: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updates: [{ body: String, date: Date }],
  backers: [{ userId: mongoose.Schema.Types.ObjectId, amount: Number }]
});

module.exports = mongoose.model('Project', projectSchema);
