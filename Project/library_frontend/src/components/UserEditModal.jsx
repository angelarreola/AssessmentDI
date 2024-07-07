import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/axiosConfig";
import { useLoaderData } from "react-router-dom";

function UserEditModal() {
  const { request } = useParams();
  const user = useLoaderData(loader, request);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: user });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(
        `users/update/${data.id}`,
        data
      );
      console.log(response);
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute inset-0 z-10 bg-black/50 grid place-items-center">
      <div className="relative bg-white w-10/12 lg:w-1/3 px-8 py-5 rounded-lg font-inter">
        <Link to={"/users"}>
          <img
            src="/remove.svg"
            alt="exitButton"
            className="w-8 h-8 absolute top-2 right-3 cursor-pointer"
          />
        </Link>

        <h3 className="text-[28px] font-black">Editar Usuario</h3>
        <form
          action="POST"
          className="flex flex-col gap-6 mt-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="name">
              Nombre
            </label>
            <input
              {...register("name", { required: true })}
              name="name"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="text"
              placeholder="Ingresa tu nombre..."
            />
            {errors.name && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="email">
              Correo electrónico
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="email"
              placeholder="ejemplo@houseletters.com"
            />
            {errors.email && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="password">
              Contraseña
            </label>
            <input
              {...register("password", { required: true })}
              name="password"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              type="password"
              placeholder="Escribe tu contraseña..."
            />
            {errors.password && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="status">
              Estatus
            </label>
            <select
              {...register("status", { required: true })}
              name="status"
              id="status"
              className="placeholder:text-gray-custom font-semibold
              border-none bg-light-gray-custom p-2 rounded-xl"
              defaultValue={user.status}
            >
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
            {errors.status && (
              <span className="font-semibold text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#05045E] rounded-lg text-white font-bold py-2 px-4 w-fit mt-4"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEditModal;

export async function loader(request) {
  try {
    const response = await axiosInstance.get(`/user/${request.params.id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
