import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        loading: false,
        message: "",
    },
    reducers: {
        signupRequest: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        signupFailure: (state) => {
            state.loading = false;
            state.message = "failed";
        }
    }
});
export const signupRequest = signupSlice.actions.signupRequest;
export const signupSuccess = signupSlice.actions.signupSuccess;
export const signupFailure = signupSlice.actions.signupFailure;

export default signupSlice.reducer;