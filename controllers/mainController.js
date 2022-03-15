const express = require('express');
const path = require('path');

const controlador = {
    home:(req,res)=>{
       res.render('home');
},
login:(req,res)=>{
  res.render('login')  
},

}

module.exports = controlador;

