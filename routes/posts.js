const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// GET /api/posts - Get all posts
router.get('/', postsController.getAllPosts);

// GET /api/posts/:id - Get post by ID
router.get('/:id', postsController.getPostById);

// POST /api/posts - Create new post
router.post('/', postsController.createPost);

// PUT /api/posts/:id - Update post
router.put('/:id', postsController.updatePost);

// DELETE /api/posts/:id - Delete post
router.delete('/:id', postsController.deletePost);

module.exports = router;

