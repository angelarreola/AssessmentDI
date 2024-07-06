const { DataTypes, UniqueConstraintError } = require('sequelize');
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
  }
});

module.exports = Book;