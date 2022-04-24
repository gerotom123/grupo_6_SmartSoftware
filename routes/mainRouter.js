const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const {check} = require('express-validator')
const guestMiddleware = require('../middlewares/guestMiddleware')

const controlador = require('../controllers/mainController')

// multer
const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, './public/img')
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})
const storageUser = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, './public/userImg')
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})
const uploadUserImg= multer({storage:storageUser});
const upload = multer({storage})


router.get('/', controlador.home);

router.get('/login', controlador.login);

router.post('/login', [
    check('email').isEmail().withMessage('Debe ser un email válido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),controlador.processLogin
])

router.get('/carrito', controlador.carrito);

router.get('/register', controlador.register);

router.get('/productodetalle/:id', controlador.productoDetalle);

router.get('/crearProducto',guestMiddleware, controlador.crearProducto);

router.post('/crearProducto',upload.single('url') ,controlador.productoCreado);

router.get('/eliminarProducto', controlador.eliminarProducto);

router.post('/eliminacionProducto', controlador.eliminacionProducto);

router.get('/edicion/:id',controlador.edicionProductos);

router.put('/edicion/:id',controlador.editProducto);
router.get('/crearUsuario',controlador.crearUsuario)
router.post('/crearUsuario',uploadUserImg.single('foto'),controlador.usuarioCreado)


module.exports = router;