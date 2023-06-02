import { createSlice } from "@reduxjs/toolkit";
import toPet from "../mapper/toPet";

const petDataSlice = createSlice({
    name: "petData",
    initialState: {
        petData: [],
        loading: false,
    },
    reducers: {
        //reducer about get pet data
        getPetDataRequest: (state) => {
            state.loading = true;
        },
        getPetDataSuccess: (state, action) => {
            state.loading = false;
            state.petData = action.payload.map((item: any) => (
                toPet(item)
            ));
        },
        getPetDataFailure: (state) => {
            state.loading = false;
        },
        //reducer about post pet data
        postPetDataRequest: (state) => {
            state.loading = true;
        },
        postPetDataSuccess: (state) => {
            state.loading = false;
        },
        postPetDataFailure: (state) => {
            state.loading = false;
        },
    }
});

export const getPetDataRequest = petDataSlice.actions.getPetDataRequest;
export const getPetDataSuccess = petDataSlice.actions.getPetDataSuccess;
export const getPetDataFailure = petDataSlice.actions.getPetDataFailure;

export const postPetDataRequest = petDataSlice.actions.postPetDataRequest;
export const postPetDataSuccess = petDataSlice.actions.postPetDataSuccess;
export const postPetDataFailure = petDataSlice.actions.postPetDataFailure;

export default petDataSlice.reducer;