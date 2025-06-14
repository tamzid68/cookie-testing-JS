const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzbSIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTc0OTkyMzQ0MywiZXhwIjoxNzQ5OTI0MzQzfQ.pKtqk8xqeiqJ5kF21tr7U_U5v6-TCG7ul6WClWM02og';

const decoded = jwt.verify(token, 'tamzid-@3443123', (err, decoded) => {
    if (err) {
        console.error('Token verification failed:');
        return null;
    }
    return decoded;
});
//const decoded = jwt.decode(token);

if (decoded) {
    console.log('Decoded token:', decoded);
}