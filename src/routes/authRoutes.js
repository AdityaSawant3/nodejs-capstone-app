const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', (req, res) => res.render('home'));
router.get('/login', auth.loginPage);
router.get('/register', auth.registerPage);

router.post('/login', auth.login);
router.post('/register', auth.register);
router.get('/logout', auth.logout);

module.exports = router;

