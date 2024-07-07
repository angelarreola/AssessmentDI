const User = require('./Book');
const Book = require('./User')


User.hasMany(Book, { onDelete: 'cascade' }); // Asegúrate de definir también la relación inversa
Book.belongsTo(User);

module.exports = {
    User,
    Book,
};