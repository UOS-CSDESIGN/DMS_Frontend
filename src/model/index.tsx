import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './User/loginSlice';
import signupReducer from './User/signupSlice';
import memberDataReducer from './User/memberDataSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        singup: signupReducer,
        memberData: memberDataReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;