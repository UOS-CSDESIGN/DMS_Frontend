import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './User/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer
    }
});