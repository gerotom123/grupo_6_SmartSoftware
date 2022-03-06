const express = require('express');
const router = express.Router();

const controlador = require('../controllers/mainController')

router.get('/', controlador.home);

router.get('/login', controlador.login);

router.get('/carrito', controlador.carrito);

router.get('/register', controlador.register);

router.get('/productodetalle', controlador.productoDetalle);



module.exports = router;