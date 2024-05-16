// models/Usuario.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const UsuariosTurmas = sequelize.define('usuarios_turmas', {
    //define as informações da tabela colunas

    Turmas_idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: false // Indica q é uma chave primaria autoincrementavel
    },
    Usuarios_idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey:false // indica que não é uma chave primária
    }

},
{
    //precisa disso pq não tem as colunas createdAT e updateAt no bd
        timestamps: false //Adiciona colunas createdAt e updateAt automaticamente

});
UsuariosTurmas.removeAttribute('id')

module.exports = UsuariosTurmas;