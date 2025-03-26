const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  category: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
