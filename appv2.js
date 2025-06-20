// Simple Express.js app demonstrating basic authentication using HMAC hashing.
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signin', (req, res) => {
    const { username, password } = req.body || {};
    const data = { username, password };

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    const hash = crypto.createHmac('sha256', "8273asdfb").update(JSON.stringify(data)).digest('hex');

    res.send(`Hashed value: ${hash}`);
});

app.get('/protected', (req, res) => {
    const { hash } = req.body || {};
    const data = {
        username: "asm",
        password: "321"
    };

    const hash2 = crypto.createHmac('sha256', "8273asdfb").update(JSON.stringify(data)).digest('hex');

    if (hash === hash2) {
        res.send(`Hello ${data.username}, you have access to this protected route!`);
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});