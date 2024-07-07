const Book = require("../models/Book"); // Asegúrate de importar tu modelo de Usuario

async function createDefaultAdmin() {
  try {
    await Book.create({
      isbn: " 978-0-439-02348-1",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      publicationDate: "2009-09-14",
      userId: 1,
      userName: "Angel Arreola",
    });
    await Book.create({
      isbn: "978-0-7432-7356-5",
      title: "Angels & Demons",
      author: "Dan Brown",
      publicationDate: "2000-05-01",
      userId: 1,
      userName: "Angel Arreola",
    });

    await Book.create({
      isbn: "978-0-316-76994-0",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationDate: "1951-07-16",
      userId: 1,
      userName: "Angel Arreola",
    });

    await Book.create({
      isbn: "978-0-670-81302-8",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      userId: 1,
      userName: "Angel Arreola",
    });

    await Book.create({
      isbn: "978-1-5011-4684-8",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      publicationDate: "2019-02-05",
      userId: 1,
      userName: "Angel Arreola",
    });
    console.log("Libros default creados con éxito.");
  } catch (error) {
    console.error("Error al libros default:", error);
  }
}

module.exports = createDefaultAdmin;
