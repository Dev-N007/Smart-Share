const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/userAuthDB');

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pwd: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.redirect('/signup.html');
});

// API to expose flash messages
app.get('/flash-messages', (req, res) => {
  const messages = {
    success: req.flash('success'),
    error: req.flash('error')
  };
  res.json(messages);
});

// Signup logic
app.post('/signup', async (req, res) => {
  const { name, email, pwd } = req.body;

  if (!name || !email || !pwd) {
    req.flash('error', 'Please fill in all fields.');
    return res.redirect('/signup.html');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    req.flash('error', 'Email is already registered.');
    return res.redirect('/signup.html');
  }

  const newUser = new User({ name, email, pwd });
  await newUser.save();

  req.flash('success', 'Signup successful! You can now log in.');
  res.redirect('/login.html');
});

// Login logic
app.post('/login', async (req, res) => {
  const { email, pwd } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.pwd !== pwd) {
    req.flash('error', 'Invalid email or password.');
    return res.redirect('/login.html');
  }

  req.flash('success', `Welcome back, ${user.name}!`);
  

  res.redirect('/index1.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
