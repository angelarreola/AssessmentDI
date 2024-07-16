import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice'
import usersReducer from './users/users-slice';
import booksReducer from './books/books-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        books: booksReducer,
    }
});

export default store;