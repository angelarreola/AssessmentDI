const Book = require('../models/Book');

exports.registerBook = async (req, res) => {
    console.log(req.body);
    const { isbn, title, author, publicationDate, userId, userName } = req.body;
    try {
      const book = await Book.create({ isbn, title, author, publicationDate, userId, userName});
      res.status(201).json({ message: 'Book created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating book' });
    }
  };

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
        console.log(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
}

module.exports.getBook = async (req, res) => {
  const { id } = req.params;
  console.log('id:', id);

  try {
      const book = await Book.findByPk(id);
      res.status(200).json(book);
      console.log(book);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching book' });
  }
}

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { isbn, title, author, publicationDate } = req.body;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      book.isbn = isbn;
      book.title = title;
      book.author = author;
      book.publicationDate = publicationDate;
      
      await book.save();
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: 'Error updating book' });
    }
  };
  
  exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      await book.destroy();
      res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book' });
    }
  };