import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Ejemplo de un interceptor de solicitudes
axiosInstance.interceptors.request.use(
  config => {
    // Puedes agregar lógica adicional antes de enviar la solicitud
    // como agregar un token de autenticación
    const token = localStorage.getItem('authToken'); // Obtener el token de autenticación desde el local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
