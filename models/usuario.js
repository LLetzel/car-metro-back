// models/Usuario.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Usuario = sequelize.define('Usuarios', {
    //define as informações da tabela colunas

    idUsuarios: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Define essa coluna como chave primária
        primaryKey: true // Indica q é uma chave primaria autoincrementavel
    },

    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    imagem: Sequelize.STRING,
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER,


},
{
    //precisa disso pq não tem as colunas createdAT e updateAt no bd
        Timetamps: false //Adiciona colunas createdAt e updateAt automaticamente

});

module.exports = Usuario;