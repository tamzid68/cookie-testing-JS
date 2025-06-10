// This code sets up a simple Express.js application with session management.
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: 'signature',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 900000, // 15 minutes
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
  }
}));

app.post('/login', (req, res) => {
  const { username } = req.body || {};

  if (!username) return res.status(400).send('Username required');

  req.session.username = username;
  req.session.loggedIn = true;
  res.send('Session is set');
});

app.get('/product', (req, res) => {
  if (req.session.loggedIn) {
    res.send(`Welcome to the product page, ${req.session.username}`);
  }
  else {
    res.status(403).send('Access denied. You are not allowed to view this page.');
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Could not log out');
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.send('Logged out successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});