const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Book = sequelize.define('Book', {
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER, // Tipo de dato de la clave externa (id de User)
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Book;