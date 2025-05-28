const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username } = req.body || {};
    if (!username) {
        return res.status(400).send('username is required');
    }
    res.cookie('name', username, {
        maxAge: 900000, // 15 minutes
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie 
    });
    res.send('Cookie is set');
});

app.get('/product', (req, res)=>{
    const {name} = req.cookies || {};
    const {username} = req.body || {};
    if(!name && !username){
        return res.status(401).send('You are not logged in. Please log in first.');
    }
    else if(name == username){
        return res.status(200).send('Welcome to the product page, asm!');
    }
    else{
        return res.status(403).send('Access denied. You are not allowed to view this page.');
    }
});


app.listen(3000, ()=>{
    console.log('Server is running on localhost:3000');
});