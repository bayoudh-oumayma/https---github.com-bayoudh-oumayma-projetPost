const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postes', 'postgres', 'root', {
  host: 'host.docker.internal',
  dialect: 'postgres',
});

const post = sequelize.define('post', {

  // Définissez ici les colonnes de votre table

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  // Spécifiez le nom de la table
  tableName: 'post',
});

module.exports = post;
