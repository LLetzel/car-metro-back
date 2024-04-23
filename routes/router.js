// routes/router.js
// Nesse arquivo estarão todas as rotas
// No caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')

//retorna todos os usuarios
router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getById)

//cria um usuario passando informação no body
router.post('/usuario', usuarioController.create);

//INSERIR OUTRAS ROTAS --> 
/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */

/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */

// router.get('/usuario',usuarioController.listarUsuarios)

module.exports = router;