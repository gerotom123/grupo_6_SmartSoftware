const express = require('express');
const router = express.Router();
// const multer = require('multer')
// const path = require('path')

const controlador = require('../controllers/mainController')

//multer
// var storage = multer.diskStorage({
//     destination:function (req,file,cb){
//         cb(null, 'public/img')
//     },
//     filename: function(req,file,cb){
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// var upload = multer({storage: storage})

router.get('/', controlador.home);

router.get('/login', controlador.login);

router.get('/carrito', controlador.carrito);

router.get('/register', controlador.register);

router.get('/productodetalle/:id', controlador.productoDetalle);

router.get('/crearProducto', controlador.crearProducto);

router.post('/crearProducto'/*,upload.single('img')*/ ,controlador.productoCreado);



module.exports = router;