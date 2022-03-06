const express = require('express');
const path = require('path');

const productos = {
    '1': {
        'url': '/img/img1.png',
        'nombre': 'Black Camo',
        'precio': 1750,
        'descripcion': 'pantalon negro, talle L',
    },
    '1': {
        'url': '/img/img1.png',
        'nombre': 'Black Camo',
        'precio': 1750,
        'descripcion': 'pantalon negro, talle L',
    }  
}

const controlador = {
    home:(req,res)=>{
       res.render('home');
},
    login:(req,res)=>{
        res.render('login');
},
    carrito:(req,res)=>{
        res.render('carrito');
},
    register:(req,res)=>{
        res.render('register');
},

    productoDetalle:(req,res)=>{
        let  productodetalles = req.params.id;       
        res.render('productodetalle', { 
            'productos':productos[productodetalles]});
},

}

module.exports = controlador;