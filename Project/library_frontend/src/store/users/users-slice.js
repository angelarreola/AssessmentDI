import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
    users: [],
    usersQuantity: 0
}

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {
        replaceUsersList(state, action) {
            state.users = action.payload.users
            state.usersQuantity = action.payload.usersQuantity
        },
        addUser(state) {
            state.usersQuantity++;
        },
        deleteUser(state) {
            state.usersQuantity--;
        }
    }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;