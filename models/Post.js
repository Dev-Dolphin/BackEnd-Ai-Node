const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please add some content'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);
