const express = require('express');
const router = express.Router();

// Import route modules
const productRoutes = require('./productRoutes');
const postRoutes = require('./postRoutes');
const geminiRoutes = require('./geminiRoutes');
const userRoutes = require('./userRoutes');

// Mount routes
router.use('/products', productRoutes);
router.use('/posts', postRoutes);
router.use('/', geminiRoutes);
router.use('/users', userRoutes);

// API root endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      posts: '/api/posts',
      users: '/api/users',
      generate: '/api/generate',
      health: '/health'
    }
  });
});

module.exports = router;
