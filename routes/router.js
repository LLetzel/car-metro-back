// routes/router.js
// Nesse arquivo estarão todas as rotas
// No caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');
const turmasController = require('../controllers/turmas');
// const tiposdeusuariosController = require('../controllers/Tipos_Usuarios')

//retorna todos os usuarios
router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getById);

//cria um usuario passando informação no body
router.post('/usuario', usuarioController.createUsuario);
router.put('/usuario/:cpf', usuarioController.updateUsuario);


//INSERIR OUTRAS ROTAS --> 
//mostra turmas
router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById)
//cria uma turma
router.post('/turmas', turmasController.createTurmas)
// modificar dados 
router.put('/turmas/:codigo', turmasController.updateTurmas)


// router.get('/tiposdeusuarios', tiposdeusuariosController.getAll)
// router.get('/tiposdeusuarios/:id', tiposdeusuariosController.getById)

// router.get('/usuario',usuarioController.listarUsuarios)

// Exporta o router como middleware
module.exports = router;
