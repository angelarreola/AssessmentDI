import { useState, useEffect } from "react";




import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


function RootLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simula un retardo para la pantalla de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Cambia el tiempo de retardo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {
      loading ? <LoadingScreen /> : (
        <>
          <Navbar />
          <Outlet />
        </>
      )
    }
    </>
  );
}

export default RootLayout;