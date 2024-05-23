const { where } = require('sequelize');
const Usuario = require('../models/usuario');
const UsuariosTurmas = require('../models/usuarios_turmas')

exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

exports.getById = async (req, res) => {
    // No router id é o que vem depois do usuario/
    const idDoParam = req.param.id;
    const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam } });
    res.json(usuarioEncontrado);
}

// Cadastro um usuário
exports.createUsuario = async (req, res) => {

    const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });
    // Verificação duplicidade do usuario cadastrado
    if (usuarioCadastrado) {
        return res.send("Já existe um usuario cadastrado com esse CPF.")
    }
    const usuarioCriado = await Usuario.create(req.body)

    if (usuarioCriado.idUsuarios && req.body.Turmas_idTurmas) {
        await UsuariosTurmas.create({

            Turmas_idTurmas: req.body.Turmas_idTurmas, //idturma vem do front commo informação de seleção de turma
            Usuarios_idUsuarios: usuarioCriado.idUsuarios,
        })
    } else {
        return res.send("Erro ao cadastrar o usuario!")
    }
    // comentario
    return res.send("Usuário Cadastrado!");
    // res.json(usuario)
}


//alterando dados cadastrais
exports.updateUsuario = async (req, res) => {
    cpfUsuario = req.params.cpf
    // console.log(cpfUsuario)
    try {
        const usuarioEncontrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });

        if (usuarioEncontrado) {
            delete req.body.cpf;
            delete req.body.nome;
            delete req.body.Tipos_Usuarios_idTipos_Usuarios;

            const [numRowsUpdated] = await Usuario.update(req.body, {
                where: { cpf: cpfUsuario }
            });

            if (numRowsUpdated > 0) {
                const usuarioAtualizado = await Usuario.findOne({ where: { cpf: cpfUsuario } });
                return res.send({ message: 'Usuário atualizado com sucesso', usuariocomdadosnovos: usuarioAtualizado });
            } else {
                return res.send({ message: 'Usuário encontrado, porém sem dados novos para atualizar' });
            }
        } else {
            return res.status(404).send("Não existe usuário cadastrado com esse cpf")
        }


    } catch {
        return res.status(404).send("Usuário não encontrado")
    }
}

exports.deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params; //Define o que o sistema vai buscar para identificar o usuário que será deletado(no url)
        const usuario = await Usuario.findByPk(id); // FindByPK = FindOne para id  || Armazena o usuário que encontrou no banco de dados
        if (!usuario) { 
            return res;status(404).send('Usuário não encontrado');
        }

        const desvincular = await UsuariosTurmas.findOne({ where: {Usuarios_idUsuarios: usuario.idUsuarios}});
        if (desvincular) {
            await desvincular.destroy(); //deleta o que tiver na tabela relacional 
        }
        await usuario.destroy(); // deleta usuário
        return res.send('Usuário deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(404).send("Usuário não encontrado");
    }
}
