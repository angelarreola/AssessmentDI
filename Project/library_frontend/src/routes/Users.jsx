import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, steps } from "framer-motion";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAPI, updateUserAPI, deleteUserAPI } from '../store/users/users-actions';

function Users() {
  const dispatch = useDispatch();
  const { users, usersQuantity } = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(fetchUsersAPI());
  }, []);

  const onSubmitDelete = (id) => {
    if (window.confirm("¿Estás seguro de querer borrar este usuario?")) {
      dispatch(deleteUserAPI(id));
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
            <h2 className="text-3xl font-bold">Usuarios</h2>
            <img src="../users.svg" alt="usersLogo" />
          </div>
          <Link
            className="bg-primary rounded-lg text-white font-bold p-2 w-fit"
            to={"newUser"}
          >
            Nuevo Usuario
          </Link>
        </div>

        <div className="w-full bg-white min-h-96 rounded-md border-secondary/50 border-2 overflow-x-auto">
          <table className="text-black w-full">
            <thead>
              <tr className="bg-quaternary font-bold text-secondary border-b-secondary border-b-[1px]">
                <th className="text-left py-2 px-4">ID</th>
                <th className="text-left py-2 px-4">Nombre</th>
                <th className="text-left py-2 px-4">E-mail</th>
                <th className="text-left py-2 px-4">Estatus</th>
                <th className="text-left py-2 px-4">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className="font-bold text-black-custom border-b-secondary border-b-[1px]"
                    >
                      <td className="text-left py-2 px-4">{user.id}</td>
                      <td className="text-left py-2 px-4">{user.name}</td>
                      <td className="text-left py-2 px-4">{user.email}</td>
                      <td className="text-left py-2 px-4">{user.status == 'active' ? "Activo" : "Inactivo"}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <Link
                          to={`editUser/${user.id}`}
                          className="w-8 h-8 rounded-lg bg-[#05045E] grid place-items-center"
                        >
                          <img
                            className="w-5 h-5"
                            src="../edit.svg"
                            alt="editIcon"
                          />
                        </Link>
                        <button
                          onClick={() => onSubmitDelete(user.id)}
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
  );
}

export default Users;

// export async function loader() {
//   try {
//     const response = await axiosInstance.get("/users");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }
