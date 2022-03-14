const express = require('express');
const path = require('path');
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../archivos/listaProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')).productos;


const controlador = {
    home:(req,res)=>{           
       res.render('home', {
           'productos': products
       });
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
            'productos':products[productodetalles]});
},
    crearProducto:(req,res) =>{ 
        console.log(products)     
        res.render('crearProducto');
    },
    productoCreado:(req,res) =>{
        console.log(req.file)
        const filePath = `/img/${req.file.filename}`
        let documento = req.body
        documento.url = filePath
        products.push(documento)
        console.log(products)        
        res.redirect('/');
    }
}

module.exports = controlador;