const Usuario = require('../models/usuarios');
exports.getAll = async(req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

exports.getById = async(req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const usuarioEncontrado = await Usuario.findOne({ idUsuarios:idDoParam});
    res.json(usuarioEncontrado);
}

exports.createUsuario = async (seq, res) => {
    const usuarioCadastrado = await Usuario.findOne({cpf: req.body.cpf});
    // verificação duplicidade de usuario cadastrado
    if(usuarioCadastrado){
        return red.send('Já existe um usuário cadastrado neste CPF.')
    }
    const usuarioCriado = await Usuario.create(req.body);
    console.log("usuarioCriado", usuarioCriado)
    return res.send("oi")
    // res.json(usuarios)
}
