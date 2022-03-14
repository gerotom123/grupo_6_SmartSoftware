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
        const fileName = req.file.originalname
        let documento = req.body
        documento.url = fileName
        products.push(documento)
        console.log(products)
        // fs.writeFileSync(documento,req.body)
        
        res.redirect('/');
    }
}

module.exports = controlador;