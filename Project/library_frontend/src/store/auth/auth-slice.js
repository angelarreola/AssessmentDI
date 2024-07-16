import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    token: '',
    user: null,
    status: 'unlogged'
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.status = 'logged';
        },
        logout(state) {
            state.token = '';
            state.user = {};
            state.status = 'unlogged';
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;