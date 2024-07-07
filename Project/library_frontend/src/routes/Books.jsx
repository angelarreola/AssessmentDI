import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";

function Books() {
  const books = useLoaderData();
  const [booksList, setBooksList] = useState(books);

  const onSubmitDelete = async (id) => {
    if (window.confirm("¿Estás seguro de querer borrar este libro?")) {
      try {
        const response = await axiosInstance.delete(`/books/delete/${id}`);
        console.log(response.data);
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
          duration: 0.3,
        }}
        className="px-8 mt-10 grid place-items-center gap-10 font-montserrat text-white"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-3xl font-bold">Libros</h2>
            <img src="../books.svg" alt="usersLogo" />
          </div>
          <Link
            className="bg-primary rounded-lg text-white font-bold p-2 w-fit"
            to={"newBook"}
          >
            Nuevo Libro
          </Link>
        </div>

        <div className="w-full bg-white min-h-96 rounded-md border-secondary/50 border-2 overflow-x-auto">
          <table className="text-black w-full">
            <thead>
              <tr className="bg-quaternary font-bold text-secondary border-b-secondary border-b-[1px]">
                <th className="text-left py-2 px-4">ISBN</th>
                <th className="text-left py-2 px-4">Titulo</th>
                <th className="text-left py-2 px-4">Autor</th>
                <th className="text-left py-2 px-4">Fecha de Publicación</th>
                <th className="text-left py-2 px-4">Agregado por</th>
                <th className="text-left py-2 px-4">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {booksList.length > 0 ? (
                booksList.map((book, index) => {
                  return (
                    <tr
                      key={index}
                      className="font-bold text-black-custom border-b-secondary border-b-[1px]"
                    >
                      <td className="text-left py-2 px-4">{book.isbn}</td>
                      <td className="text-left py-2 px-4">{book.title}</td>
                      <td className="text-left py-2 px-4">{book.author}</td>
                      <td className="text-left py-2 px-4">{book.publicationDate}</td>
                      <td className="text-left py-2 px-4">{book.userName}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <Link
                          to={`editBook/${book.id}`}
                          className="w-8 h-8 rounded-lg bg-[#05045E] grid place-items-center"
                        >
                          <img
                            className="w-5 h-5"
                            src="../edit.svg"
                            alt="editIcon"
                          />
                        </Link>
                        <button
                          onClick={() => onSubmitDelete(book.id)}
                          className="w-8 h-8 rounded-lg bg-[#870000] grid place-items-center"
                        >
                          <img
                            className="w-5 h-5"
                            src="../delete.svg"
                            alt="deleteIcon"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>No hay datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
      <Outlet />
    </>
  )
}

export default Books;

export async function loader() {
  try {
    const response = await axiosInstance.get("/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}
