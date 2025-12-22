const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.registerPage = (req, res) => {
  res.render('register');
};

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  User.createUser(
    { name: req.body.name, email: req.body.email, password: hashedPassword },
    () => res.redirect('/login')
  );
};

exports.login = async (req, res) => {
  User.findUserByEmail(req.body.email, async (err, result) => {
    if (result.length && await bcrypt.compare(req.body.password, result[0].password)) {
      req.session.user = result[0];
      res.redirect('/user/dashboard');
    } else {
      res.redirect('/login');
    }
  });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

