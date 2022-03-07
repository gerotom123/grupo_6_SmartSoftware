const express = require('express');
const path = require('path');

const productos = require('../archivos/listaProductos')

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
    crearProducto:(req,res) =>{
        console.log(req.body);
        res.render('crearProducto');
    },
    productoCreado:(req,res) =>{
        console.log(req.body);
        res.redirect('/')
    },
}

module.exports = controlador;