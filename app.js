const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/productdetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productdetail.html');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});app.get('/Black-Camo', (req,res)=>{
    res.sendFile(__dirname + '/views/Black-Camo.html');
});
app.get('/Black&White-Camo', (req,res)=>{
    res.sendFile(__dirname + '/views/Black&White-Camo.html');
});
app.get('/Ice-Short', (req,res)=>{
    res.sendFile(__dirname + '/views/Ice-Short.html');
});
app.get('/Monster-Trouser', (req,res)=>{
    res.sendFile(__dirname + '/views/Monster-Trouser.html');
});
app.get('/Retro-Shirt', (req,res)=>{
    res.sendFile(__dirname + '/views/Monster-Trouser.html');
});app.get('/Shark-Jumper', (req,res)=>{
    res.sendFile(__dirname + '/views/Shark-Jumper.html');
});