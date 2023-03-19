import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './User/slice/loginSlice';
import signupReducer from './User/slice/signupSlice';
import memberDataReducer from './User/slice/memberDataSlice';
import googleSocialReducer from './User/slice/googleSocialSlice';
import petDataReducer from './Pet/slice/petDataSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        singup: signupReducer,
        memberData: memberDataReducer,
        petData: petDataReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;