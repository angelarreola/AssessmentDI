import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function Navbar() {
  const { authToken } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center bg-white h-16 font-montserrat">
      <Link to={"/"} className="flex justify-center items-center gap-2 px-5">
        <img src="../HouseLettersLogo.svg" alt="Logo_HouseOfLetters" />
        <p className="font-black text-black-custom text-2xl">
          House Of Letters
        </p>
      </Link>
      <div className="flex justify-end items-center customPolygon bg-[#EAEAEA] h-[100%] w-[33%]">
        <div className="flex justify-center gap-8 px-10 text-gray-custom font-black">
          {authToken ? (
            <>
              {user.role == 'admin' && <Link to={"users"}>Usuarios</Link>}
              <Link to={"books"}>Libros</Link>
            </>
          ) : (
            <>
              <Link to={"login"}>LogIn</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
