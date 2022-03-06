const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.ejs');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.ejs');
});
app.get('/productdetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productdetail.ejs');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.ejs');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.ejs');
});app.get('/Black-Camo', (req,res)=>{
    res.sendFile(__dirname + '/views/Black-Camo.ejs');
});
app.get('/Black&White-Camo', (req,res)=>{
    res.sendFile(__dirname + '/views/Black&White-Camo.ejs');
});
app.get('/Ice-Short', (req,res)=>{
    res.sendFile(__dirname + '/views/Ice-Short.ejs');
});
app.get('/Monster-Trouser', (req,res)=>{
    res.sendFile(__dirname + '/views/Monster-Trouser.ejs');
});
app.get('/Retro-Shirt', (req,res)=>{
    res.sendFile(__dirname + '/views/Monster-Trouser.ejs');
});app.get('/Shark-Jumper', (req,res)=>{
    res.sendFile(__dirname + '/views/Shark-Jumper.ejs');
});