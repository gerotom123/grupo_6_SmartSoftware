const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');
const methodOverride = require('method-override')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');
const { cookie } = require('express/lib/response');

app.use(session({secret:'Secret'}))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
app.use(mainRouter);
app.use(cookieAuthMiddleware)



app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

