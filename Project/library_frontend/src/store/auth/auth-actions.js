import { authActions } from "./auth-slice";
import axiosInstance from "../../utils/axiosConfig";

export const loginAPI = (userCredentials) => {
  return async (dispatch) => {
    const fetchLogIn = async (userCredentials) => {
      const response = await axiosInstance.post("/login", userCredentials);
      if (!response.status === 200) {
        throw new Error('Error fetching login data');
      }

      const data = await response.data;
      return data;
    };

    try {
      const userData = await fetchLogIn(userCredentials);
      dispatch(
        authActions.login({
          token: userData.token,
          user: userData.user,
        })
      );
      localStorage.setItem('authToken', userData.token);
      localStorage.setItem('user', JSON.stringify(userData.user));
    } catch (error) {
      alert(error.response.data.message)
    }
  };
};
