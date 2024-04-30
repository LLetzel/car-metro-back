const { where } = require('sequelize');
const Usuario = require('../models/usuario');
exports.getAll = async(req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

exports.getById = async(req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const usuarioEncontrado = await Usuario.findOne( {where:{ idUsuarios:idDoParam}});
    res.json(usuarioEncontrado);
}

exports.createUsuario = async (req,res) => {
    const usuarioCadastrado = await Usuario.findOne({ where: {cpf: req.body.cpf}});
    // Verificação duplicidade do usuario cadastrado
    if (usuarioCadastrado) {
        return res.send("Já existe um usuario cadastrado com esse CPF.")
    }
    const usuarioCriado = await Usuario.create(req.body)
    console.log("usuarioCriado", usuarioCriado)
    return res.send("deu certo viadinho!!")
    // res.json(usuario)
};
