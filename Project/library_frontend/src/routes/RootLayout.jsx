import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/auth-slice";

function RootLayout() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    if (token) {
      dispatch(authActions.login({token, user}));
    }
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simula un retardo para la pantalla de carga
      setLoading(false);
    }, 1000); // Cambia el tiempo de retardo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default RootLayout;
