require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/courses', courseRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});

