import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './User/slice/loginSlice';
import signupReducer from './User/slice/signupSlice';
import memberDataReducer from './User/slice/memberDataSlice';
import petBreedReducer from './Pet/slice/petBreedSlice';
import petDataReducer from './Pet/slice/petDataSlice';
import petObesityReducer from './PetObesity/slice/petObesitySlice';
import categoryReducer from './Community/slice/categorySlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        singup: signupReducer,
        memberData: memberDataReducer,
        petData: petDataReducer,
        petObesityData : petObesityReducer,
        petBreed: petBreedReducer,
        category: categoryReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;