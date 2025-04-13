const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const User = require('./models/User');

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/signup-login-db')
  


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send('User already exists. <a href="/signup.html">Try again</a>');
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

  
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.send('Signup successful! <a href="/login.html">Login here</a>');
  } catch (err) {
    console.error(err);
    res.send('Error occurred during signup.');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.send('No user found. <a href="/login.html">Try again</a>');
    }

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send('Incorrect password. <a href="/login.html">Try again</a>');
    }

    res.send(`Welcome back, ${user.name}!`);
  } catch (err) {
    console.error(err);
    res.send('Error occurred during login.');
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
