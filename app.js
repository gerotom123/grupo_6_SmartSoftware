const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');
const methodOverride = require('method-override')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
app.use(mainRouter);



app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

