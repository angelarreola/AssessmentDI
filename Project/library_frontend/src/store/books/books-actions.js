import axiosInstance from "../../utils/axiosConfig";
import { booksActions } from "./books-slice";

export const fetchBooksAPI = () => {
  return async (dispatch) => {
    const fetchBooksList = async () => {
      const response = await axiosInstance.get("/books");
      if (!response.status === 200) {
        throw new Error("Error fetching books data");
      }

      const data = await response.data;
      return data;
    };

    try {
      const booksData = await fetchBooksList();
      console.log(booksData);
      console.log(booksData.length);

      dispatch(
        booksActions.replaceBooksList({
          books: booksData,
          booksQuantity: booksData.length,
        })
      );
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};

export const fetchBookAPI = (id) => {
    return async (dispatch) => {
      const fetchBook = async () => {
        const response = await axiosInstance.get(`/book/${id}`);
        if (!response.status === 200) {
          throw new Error("Error fetching book data");
        }
        const data = await response.data;
        return data;
      };
  
      try {
        const bookData = await fetchBook(id);
        return bookData;
      } catch (error) {
        alert(error.response.data.message);
      }
    };
  };

export const registerBookAPI = (data) => {
    return async (dispatch) => {
      const fetchRegisterBook = async (data) => {
        const response = await axiosInstance.post(`/books/register`, data);
        if (!response.status === 201) {
          throw new Error("Error registering book");
        }
        dispatch(fetchBooksAPI());
        return true;
      };
  
      try {
        const result = await fetchRegisterBook(data);
        return result;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  };

export const deleteBookAPI = (id) => {
  return async (dispatch) => {
    const fetchDeleteBook = async (id) => {
      const response = await axiosInstance.delete(`/books/delete/${id}`);
      if (!response.status === 200) {
        throw new Error("Error deleting book");
      }
      dispatch(fetchBooksAPI());
    };

    try {
      await fetchDeleteBook(id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateBookAPI = (id, data) => {
  return async (dispatch) => {
    const fetchUpdateBook = async (id) => {
      const response = await axiosInstance.put(`/books/update/${id}`, data);
      if (!response.status === 200) {
        throw new Error("Error updating book");
      }
      dispatch(fetchBooksAPI());
    };

    try {
      await fetchUpdateBook(id);
    } catch (error) {
      console.log(error);
    }
  };
};
