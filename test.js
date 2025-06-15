// const jwt = require('jsonwebtoken');

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzbSIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTc0OTkyMzQ0MywiZXhwIjoxNzQ5OTI0MzQzfQ.pKtqk8xqeiqJ5kF21tr7U_U5v6-TCG7ul6WClWM02og';

// const decoded = jwt.verify(token, 'tamzid-@3443123', (err, decoded) => {
//     if (err) {
//         console.error('Token verification failed:');
//         return null;
//     }
//     return decoded;
// });
// //const decoded = jwt.decode(token);

// if (decoded) {
//     console.log('Decoded token:', decoded);
// }

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const JWT_SECRET = 'tamzid-sait@342123';

// app.use(bodyParser.json());


// app.post('/login', (req, res) => {
//     const { username, password } = req.body || {};

//     if (username === 'asm' && password === '1234') {
//         const playload = { username, password };
//         const token = jwt.sign(playload, JWT_SECRET, { expiresIn: '15m', algorithm: 'HS512' });
//         return res.json({ token });
//     }
//     else
//         return res.status(401).json({ error: 'Invalid username or password' });

// });

// app.listen(4000, () => {
//     console.log('Server is running on localhost:4000');
// });


const jwt = require('jsonwebtoken');
const fs = require('fs');
const JWT_SECRET = 'tamzid-sait@342123';

// Payload for the token
const payload = { username: 'asm', password: '1234' };

// HS256 (symmetric)
const hs256Token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '15m' });
console.log('HS256 Token:', hs256Token);

// HS512 (symmetric)
const hs512Token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS512', expiresIn: '15m' });
console.log('HS512 Token:', hs512Token);

// RS256 (asymmetric)
const privateKey = fs.readFileSync('private.key'); // Make sure you have generated private.key
const rs256Token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '15m' });
console.log('RS256 Token:', rs256Token);

// ES256 (asymmetric)
const ecPrivateKey = fs.readFileSync('ecprivate.key'); // Make sure you have generated ecprivate.key
const es256Token = jwt.sign(payload, ecPrivateKey, { algorithm: 'ES256', expiresIn: '15m' });
console.log('ES256 Token:', es256Token);