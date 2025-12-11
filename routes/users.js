const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET /api/users - Get all users
router.get('/', usersController.getAllUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', usersController.getUserById);

// POST /api/users - Create new user
router.post('/', usersController.createUser);

// PUT /api/users/:id - Update user
router.put('/:id', usersController.updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', usersController.deleteUser);

module.exports = router;

