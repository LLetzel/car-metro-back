// models/Usuario.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Turmas = sequelize.define('Turmas', {
    //define as informações da tabela colunas

    idTurmas: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Define essa coluna como chave primária
        primaryKey: true // Indica q é uma chave primaria autoincrementavel
    },

    codigo: Sequelize.STRING,
    descricao: Sequelize.STRING,
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
    fotos: Sequelize.STRING,
},
{
    //precisa disso pq não tem as colunas createdAT e updateAt no bd
        timestamps: false //Adiciona colunas createdAt e updateAt automaticamente

});

module.exports = Turmas;