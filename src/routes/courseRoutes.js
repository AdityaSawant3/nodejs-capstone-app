const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const course = require('../controllers/courseController');

router.get('/', authMiddleware, course.coursePage);
router.post('/add', authMiddleware, course.addCourse);

module.exports = router;

