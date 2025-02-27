const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController')

router.get('/user', UsuarioController.listarUsuarios);
router.post('/user', UsuarioController.crearUsuario);
router.put('/user/:id', UsuarioController.actualizarUsuario);
router.delete('/user/:id', UsuarioController.eliminarUsuario);
router.get('/user/:correo', UsuarioController.buscarUsuario);


module.exports=router;
//por mi