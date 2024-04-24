const { Sequelize } = require('sequelize');
const Universidade = require('./Universidade');
const database = require('../database');

const Aluno = database.define(
  'Aluno',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: Sequelize.STRING,
  },
);

Aluno.belongsTo(Universidade, {
  constraint: true,
  foreignKey: 'idUniversidade',
});

module.exports = Aluno;
