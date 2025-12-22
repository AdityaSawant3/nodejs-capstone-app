const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const user = require('../controllers/userController');

router.get('/dashboard', authMiddleware, user.dashboard);

module.exports = router;

