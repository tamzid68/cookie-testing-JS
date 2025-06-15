// Simple Express.js app demonstrating JWT-based authentication.
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const JWT_SECRET = 'tamzid-@3443123';

app.use(bodyParser.json());

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token)
        return res.status(401).json({message: 'No token provided'});

    jwt.verify(token, JWT_SECRET, (err, decoded)=>{
        if(err)
            return res.status(401).json({message: 'Invalid token'});
        
        req.user = decoded;
        next();
    });
};

app.post('/login', (req, res)=>{
    const {username, password} = req.body || {};

    if(username === 'asm' && password === '1234'){
        const playload = {username, password};
        const token = jwt.sign(playload, JWT_SECRET, {expiresIn: '15m'});
        return res.json({token});
    }
    else
        return res.status(401).json({error: 'Invalid username or password'});
});


app.get('/protected',authMiddleware, (req, res)=>{
  res.json({
      message: 'This is a protected route',
      user: req.user
  });
});


app.listen(3000, ()=>{
    console.log('Server is running on localhost:3000');
});