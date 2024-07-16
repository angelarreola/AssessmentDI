import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 2,
        }}
        className="mt-0 sm:mt-24 grid place-items-center gap-10 font-montserrat text-white"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center w-1/2 gap-2 sm:gap-10 text-center">
          <img
            src="./amicoIlustration.svg"
            alt="HouseLetters_Ilustration"
            className="w-96 h-96"
          />
          <h2 className="text-3xl font-bold">
            <span className="text-[#E3CDFF]">House of Letters</span>, tu lugar
            para descubrir el conocimiento que tanto anhelas.
          </h2>
        </div>
        <h3 className="mt-10 font-semibold w-full text-center text-xl">
          !Registra tus libros favoritos y descubre los que han registrado el
          resto de usuarios!
        </h3>
      </motion.div>
      <Outlet />
    </>
  );
}

export default Home;
