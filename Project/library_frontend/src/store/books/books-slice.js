import { createSlice } from '@reduxjs/toolkit';

const booksInitialState = {
    books: [],
    booksQuantity: 0
}

const booksSlice = createSlice({
    name: 'books',
    initialState: booksInitialState,
    reducers: {
        replaceBooksList(state, action) {
            state.books = action.payload.books;
            state.booksQuantity = action.payload.booksQuantity
        },
        addBook(state) {
            state.booksQuantity++;
        },
        deleteBook(state) {
            state.booksQuantity--;
        }
    }
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;