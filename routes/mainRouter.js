const express = require('express');
const router = express.Router();

const controlador = require('../controllers/mainController')

router.get('/', controlador.home);



module.exports = router;