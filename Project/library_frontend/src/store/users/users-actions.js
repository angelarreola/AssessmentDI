import axiosInstance from "../../utils/axiosConfig";
import { usersActions } from "./users-slice";

export const fetchUsersAPI = () => {
  return async (dispatch) => {
    const fetchUsersList = async () => {
      const response = await axiosInstance.get("/users");
      if (!response.status === 200) {
        throw new Error("Error fetching users data");
      }

      const data = await response.data;
      return data;
    };

    try {
      const usersData = await fetchUsersList();
      console.log(usersData);
      console.log(usersData.length);

      dispatch(
        usersActions.replaceUsersList({
          users: usersData,
          usersQuantity: usersData.length,
        })
      );
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const registerUserAPI = (data) => {
    return async (dispatch) => {
      const fetchRegisterUser = async (data) => {
        const response = await axiosInstance.post(`/users/register`, data);
        if (!response.status === 201) {
          throw new Error("Error registering user");
        }
        dispatch(fetchUsersAPI());
        return true;
      };
  
      try {
        const result = await fetchRegisterUser(data);
        return result;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  };

export const deleteUserAPI = (id) => {
  return async (dispatch) => {
    const fetchDeleteUser = async (id) => {
      const response = await axiosInstance.delete(`/users/delete/${id}`);
      if (!response.status === 200) {
        throw new Error("Error deleting user");
      }
      dispatch(fetchUsersAPI());
    };

    try {
      await fetchDeleteUser(id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserAPI = (id, data) => {
  return async (dispatch) => {
    const fetchUpdateUser = async (id) => {
      const response = await axiosInstance.put(`/users/update/${id}`, data);
      if (!response.status === 200) {
        throw new Error("Error updating user");
      }
      dispatch(fetchUsersAPI());
    };

    try {
      await fetchUpdateUser(id);
    } catch (error) {
      console.log(error);
    }
  };
};
