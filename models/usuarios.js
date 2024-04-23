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

nome:sequelize.STRING,
email:sequelize.STRING,
cpf:sequelize.STRING,
senha:sequelize.STRING,
celular:sequelize.STRING,
cep:sequelize.STRING,
logradouro:sequelize.STRING,
bairro:sequelize.STRING,
cidade:sequelize.STRING,
estado:sequelize.STRING,
imagem:sequelize.STRING,
Tipos_Usuarios_idTipos_Usuarios:sequelize.STRING,


})