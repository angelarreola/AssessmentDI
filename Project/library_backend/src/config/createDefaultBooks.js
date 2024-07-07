const Book = require('../models/Book'); // Asegúrate de importar tu modelo de Usuario

async function createDefaultAdmin() {
  try {
    await Book.create({
        isbn: ' 978-0-439-02348-1',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationDate: '2009-09-14',
        userId: 1,
        userName: 'Angel Arreola'
      });

      await Book.create({
        isbn: ' 978-0-439-02348-3',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationDate: '2009-09-14',
        userId: 1,
        userName: 'Angel Arreola'
      });

      await Book.create({
        isbn: ' 978-0-439-02348-2',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationDate: '2009-09-14',
        userId: 1,
        userName: 'Angel Arreola'
      });

      await Book.create({
        isbn: ' 978-0-439-02348-5',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationDate: '2009-09-14',
        userId: 1,
        userName: 'Angel Arreola'
      });
      console.log('Libros default creados con éxito.');
  } catch (error) {
    console.error('Error al libros default:', error);
  }
}

module.exports = createDefaultAdmin;
