const Course = require('../models/courseModel');

exports.coursePage = (req, res) => {
  Course.getCourses((err, courses) => {
    res.render('courses', { courses });
  });
};

exports.addCourse = (req, res) => {
  Course.addCourse(req.body, () => res.redirect('/courses'));
};

