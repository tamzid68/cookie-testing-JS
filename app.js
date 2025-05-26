const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get('/set-cookie', (req,res)=>{
    res.cookie('name', 'This is ASM', {httpOnly: true});
    res.send('Cookie has been set!');
});

app.get('/check-cookie', (req, res)=>{
    const myCookie = req.cookies.name;
    if(myCookie === 'This is ASM') {
        res.send(`Cookie value: ${myCookie}`);
    }
    else{
        res.send('not samme cookie');
    }
});


app.listen(3000, ()=>{
    console.log('Server is running on localhost:3000');
});