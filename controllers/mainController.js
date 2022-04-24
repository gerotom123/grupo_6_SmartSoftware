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
            'productos':products[productodetalles],
            id: productodetalles
        });
},
    crearProducto:(req,res) =>{ 
            
        res.render('crearProducto');
    },
    productoCreado:(req,res) =>{
     
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
        
        fs.writeFileSync(productsFilePath,JSON.stringify(elimacionProducto))
        res.redirect('/')
    },
    edicionProductos:(req,res)=>{
        const idProducto = req.params.id;
    
        res.render('editProducto',{
            producto:products[idProducto],
            id:idProducto
        })
    },
    editProducto: (req,res)=>{
        const idProducto = req.params.id;
        const camposModificados = req.body;         
        products[idProducto].nombre=camposModificados.nombre
        products[idProducto].precio=camposModificados.precio
        products[idProducto].descripcion= camposModificados.descripcion
        fs.writeFileSync(productsFilePath,JSON.stringify(products))       
        res.redirect('/')
    }
}

module.exports = controlador;

