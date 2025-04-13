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
mongoose.connect('mongodb://127.0.0.1:27017/userAuthDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.redirect('/signup.html');
});

app.get('/signup.html', (req, res) => {
  const message = req.flash('error');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><meta http-equiv="refresh" content="0; URL=signup.html"></head>
      <body>
        ${message.length ? `<div class="flash error">${message[0]}</div>` : ''}
      </body>
    </html>
  `);
});

app.get('/login.html', (req, res) => {
  const message = req.flash('error');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><meta http-equiv="refresh" content="0; URL=login.html"></head>
      <body>
        ${message.length ? `<div class="flash error">${message[0]}</div>` : ''}
      </body>
    </html>
  `);
});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    req.flash('error', 'Please fill in all fields.');
    return res.redirect('/signup.html');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    req.flash('error', 'Email is already registered.');
    return res.redirect('/signup.html');
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  req.flash('error', 'Signup successful! You can now log in.');
  res.redirect('/login.html');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    req.flash('error', 'Invalid email or password.');
    return res.redirect('/login.html');
  }

  req.flash('error', `Welcome back, ${user.name}!`);
  res.redirect('/login.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
