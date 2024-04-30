const Turmas = require('../models/turmas');

exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const turmasEncontrado = await Turmas.findOne({ where:{ idTurmas:idDoParam}});
    res.json(turmasEncontrado)
};

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
