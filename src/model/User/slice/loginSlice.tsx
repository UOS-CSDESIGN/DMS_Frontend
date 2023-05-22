import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        
        refreshToken: null,
        accessToken: null,
        idToken: null,
        expTime: null,
        googleAccessToken : null,
        loading: false,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.expTime = action.payload.exp;
            //SSL 통신 이후 refresh 파트 구현
            //state.refreshToken = action.payload.headers.Cookies;
        },
        loginFailure: (state) => {
            state.loading = false;
        },
        logoutRequest: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.expTime = null;
            state.loading = false;
        },
        logoutFailure: (state) => {
            state.loading = false;  
        },
        setSocialToken: (state, action)=> {
            state.idToken = action.payload.idToken;
            state.googleAccessToken = action.payload.accessToken;
        },
        refreshRequest: (state) => {
            state.loading = true;
        },
        refreshSuccess: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.expTime = action.payload.exp;
        },
        refreshFailure: (state) => {
            state.loading = false;
        }
        

    }
});
export const loginRequest = loginSlice.actions.loginRequest;
export const loginSuccess = loginSlice.actions.loginSuccess;
export const loginFailure = loginSlice.actions.loginFailure;

export const logoutRequest = loginSlice.actions.logoutRequest;
export const logoutSuccess = loginSlice.actions.logoutSuccess;
export const logoutFailure = loginSlice.actions.logoutFailure;

export const setSocialToken = loginSlice.actions.setSocialToken;

export const refreshRequest = loginSlice.actions.refreshRequest;
export const refreshSuccess = loginSlice.actions.refreshSuccess;
export const refreshFailure = loginSlice.actions.refreshFailure;

export default loginSlice.reducer;