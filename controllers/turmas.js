const { where } = require('sequelize');
const Turmas = require('../models/turmas');

//mostrando as turmas
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const turmasEncontrado = await Turmas.findOne({ where: { idTurmas: idDoParam } });
    res.json(turmasEncontrado)
};


//------------------------------------------------------------

// cadastrando turmas 
exports.createTurmas = async (req, res) => {
    try {
        const turmasCadastrado = await Turmas.findOne({ where: { codigo: req.body.codigo } });
        // Verificação duplicidade do usuario cadastrado
        if (turmasCadastrado) {
            return res.send("Já existe uma turma cadastrada com esse código.")
        }
        const turmasCriado = await Turmas.create(req.body)
        console.log("turmasCriado", turmasCriado)
        return res.send("Turma cadastrada com sucesso!")
        // res.json(usuario)


    } catch (error) {
        console.error("Erro ao criar turma:", error);
        return res.status(500).send('Ocorreu um erro ao criar a turma')
    }
};

//  alterando dados cadastrais 

exports.updateTurmas = async(req,res) => {
    const codigoTurma = req.params.codigo;
    try {
        const turmasEncontrado = await Turmas.findOne({ where: { codigo: codigoTurma } });

        if(turmasCadastrado){
            delete req.body.codigo;

            const [numRowsUpdated] = await Turmas.update(req.body, {
                where: {codigo: codigoTurma}
            });

        if (numRowsUpdated > 0 ) {
            const turmaAtualizada = await Turmas.findOne({where: { codigo: codigoTurma}});
            return res.send({message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada});
        }
        }


    } catch {
        return res.status(404).send("Turma não encontrada")
    }
}