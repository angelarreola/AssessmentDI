import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosConfig";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { registerBookAPI, updateBookAPI } from '../store/books/books-actions';

function BookModal({ isEditing }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  const { request } = useParams();
  const book = useLoaderData(loader, request); // It will be Undefined when whe are registering a new user.

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: book });

  const onSubmitRegister = (data) => {
    const dataForm = {...data, userId: user.id, userName: user.name}
    dispatch(registerBookAPI(dataForm));
    navigate('/books');
  };

  const onSubmitEditing = (data) => {
    dispatch(updateBookAPI(data.id, data));
    navigate('/books');
  };

  return (
    <div className="absolute inset-0 z-10 bg-black/50 grid place-items-center">
      <div className="relative bg-white w-10/12 lg:w-1/3 px-8 py-5 rounded-lg font-inter">
        <Link to={"/books"}>
          <img
            src="/remove.svg"
            alt="exitButton"
            className="w-8 h-8 absolute top-2 right-3 cursor-pointer"
          />
        </Link>

        <h3 className="text-[28px] font-black">
          {isEditing ? "Editar" : "Registrar"} Libro
        </h3>
        <form
          action="POST"
          className="flex flex-col gap-6 mt-16"
          onSubmit={handleSubmit(
            isEditing ? onSubmitEditing : onSubmitRegister
          )}
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="isbn">
              ISBN
            </label>
            <input
              {...register("isbn", { required: true })}
              name="isbn"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="text"
              placeholder="Ingresa el ISBN | Ej.(978-0-439-02348-1)... "
            />
            {errors.isbn && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="title">
              Titulo
            </label>
            <input
              {...register("title", { required: true })}
              name="title"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="text"
              placeholder="The Little Prince"
            />
            {errors.title && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="author">
              Autor
            </label>
            <input
              {...register("author", { required: true })}
              name="author"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="text"
              placeholder="Ingresa el autor..."
            />
            {errors.author && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-secondary font-bold"
              htmlFor="publicationDate"
            >
              Fecha de publicación
            </label>
            <input
              {...register("publicationDate", { required: true })}
              name="publicationDate"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="date"
            />
            {errors.author && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`${
              isEditing ? "bg-[#05045E]" : "bg-[#5BC873]"
            } rounded-lg text-white font-bold py-2 px-4 w-fit mt-4`}
          >
            {isEditing ? "Actualizar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookModal;

export async function loader(request) {
  try {
    const response = await axiosInstance.get(`/book/${request.params.id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching book:", error);
    throw error;
  }
}
