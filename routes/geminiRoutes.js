const express = require('express');
const router = express.Router();
const { generateContent } = require('../controllers/geminiController');

router.route('/generate').post(generateContent);

module.exports = router;
