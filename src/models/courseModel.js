const db = require('../config/db');

exports.addCourse = (course, callback) => {
  const sql = 'INSERT INTO courses (title, description) VALUES (?, ?)';
  db.query(sql, [course.title, course.description], callback);
};

exports.getCourses = (callback) => {
  db.query('SELECT * FROM courses', callback);
};

