const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');
const auth = require('../middleware/auth');

// Get all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new blog post (admin only)
router.post('/posts', auth, async (req, res) => {
  const post = new BlogPost({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    author: req.body.author,
    category: req.body.category
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete blog post (admin only)
router.delete('/posts/:id', auth, async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
