const Tipos_Usuarios = require('../models/Tipos_Usuarios');

exports.getAll = async (req, res) => {
    const tiposdesuarios = await Tipos_Usuarios.findAll();
    res.json(tiposdesuarios)
};

exports.getById = async (req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const tiposdesuariosEncontrado = await Turmas.findOne({ where:{ idTiposdeusuarios:idDoParam}});
    res.json(tiposdesuariosEncontrado)
};

//-------------------------------------

exports.createTurmas = async (req,res) => {
    const turmasCadastrado = await Turmas.findOne({ where: {codigos: req.body.codigos}});
    // Verificação duplicidade do usuario cadastrado
    if (usuarioCadastrado) {
        return res.send("Já existe uma turma cadastrada com esse código.")
    }
    const turmasCriado = await Turmas.create(req.body) 
    console.log("turmasCriado",turmasCriado)
    return res.send("deu certo gayzinho!!")
    // res.json(usuario)
};
