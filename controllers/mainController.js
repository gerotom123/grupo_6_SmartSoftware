const express = require('express');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { CLIENT_RENEG_LIMIT } = require('tls');

const productsFilePath = path.join(__dirname, '../archivos/listaProductos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
        fs.writeFileSync(productsFilePath,JSON.stringify(products))            
        res.redirect('/');
    },
    eliminarProducto: (req,res)=>{
        res.render('eliminarProducto')
    },
    eliminacionProducto:(req,res)=>{
        const productoAEliminar = req.body.nombre
       
        const elimacionProducto = products.filter(item => item.nombre !==productoAEliminar)
        console.log(elimacionProducto)
        fs.writeFileSync(productsFilePath,JSON.stringify(elimacionProducto))
        res.redirect('/')
    }
}

module.exports = controlador;

