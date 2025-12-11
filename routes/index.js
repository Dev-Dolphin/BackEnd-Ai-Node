const express = require('express');
const router = express.Router();

// Import route modules
const productRoutes = require('./productRoutes');
const postRoutes = require('./postRoutes');

// Mount routes
router.use('/products', productRoutes);
router.use('/posts', postRoutes);

// API root endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      posts: '/api/posts',
      health: '/health'
    }
  });
});

module.exports = router;
