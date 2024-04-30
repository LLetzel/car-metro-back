// models/Usuario.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Tipos_Usuarios = sequelize.define('Tipos_Usuarios', {
    //define as informações da tabela colunas

    idTipos_Usuarios: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Define essa coluna como chave primária
        primaryKey: true // Indica q é uma chave primaria autoincrementavel
    },

    descricao: Sequelize.STRING,


},
{
    //precisa disso pq não tem as colunas createdAT e updateAt no bd
        timestamps: false //Adiciona colunas createdAt e updateAt automaticamente

});

module.exports = Tipos_Usuarios;