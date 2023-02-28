import { createSlice } from "@reduxjs/toolkit";
export type loginState = {
    accessToekn: string,
    loading: boolean
}
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        accessToken: '',
        loading: false,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload
        },
        loginFailure: (state) => {
            state.loading = false;
        }
    }
});
export const loginRequest = loginSlice.actions.loginRequest;
export const loginSuccess = loginSlice.actions.loginSuccess;
export const loginFailure = loginSlice.actions.loginFailure;

export default loginSlice.reducer;