const express = require('express');
const path = require('path');

const controlador = {
    home:(req,res)=>{
       res.render('home');
},
}

module.exports = controlador;