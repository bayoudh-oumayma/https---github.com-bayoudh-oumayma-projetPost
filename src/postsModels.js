const { DataTypes } = require('sequelize');
const sequelize = require('../database');

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
