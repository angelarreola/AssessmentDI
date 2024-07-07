import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm} from 'react-hook-form';
import { AuthContext } from '../auth/AuthContext'
import axiosInstance from "../utils/axiosConfig";

// function parseJwt (token) {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));

//   return JSON.parse(jsonPayload);
// }

function LogInModal() {
  const navigate = useNavigate();
  const { setAuthToken, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/login', data);
      setAuthToken(response.data.token);
      setUser(response.data.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" absolute inset-0 z-10 bg-black/50 grid place-items-center">
      <div className="relative bg-white w-10/12 lg:w-1/3 px-8 py-5 rounded-lg font-inter">
        <Link to={"/"}>
          <img
            src="./remove.svg"
            alt="exitButton"
            className="w-8 h-8 absolute top-2 right-3 cursor-pointer"
          />
        </Link>

        <h3 className="text-[28px] font-black">Iniciar Sesión</h3>
        <form action="POST" className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-secondary font-bold" htmlFor="email">
              E-mail
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              className="placeholder:text-gray-custom font-semibold
            border-none bg-light-gray-custom p-2 rounded-xl"
              type="email"
              placeholder="ejemplo@ejemplo.com"
            />
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
          </div>
          <button
            type="submit"
            className="bg-primary rounded-lg text-white font-bold p-2 w-fit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogInModal;
