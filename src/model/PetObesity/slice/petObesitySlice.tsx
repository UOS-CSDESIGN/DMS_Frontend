import { createSlice } from "@reduxjs/toolkit";

const petObesitySlice = createSlice({
    name: "petObesitySlice",
    initialState: {
        petObesityData: [],
        loading: false,
    },
    reducers: {
        getObesityRequest: (state) => {
            state.loading = true;
        },
        getObesitySuccess: (state, action) => {
            state.loading = false;
            state.petObesityData = [];
            state.petObesityData = state.petObesityData.concat(action.payload);
        },
        getObesityFailure: (state) => {
            state.loading = false;
        },
        postObesityRequest: (state) => {
            state.loading = true;
        },
        postObesitySuccess: (state) => {
            state.loading = false;
        },
        postObestiyFailure: (state) => {
            state.loading = false;
        },
    }
});

export const getObesityRequest = petObesitySlice.actions.getObesityRequest;
export const getObesitySuccess = petObesitySlice.actions.getObesitySuccess;
export const getObesityFailure = petObesitySlice.actions.getObesityFailure;

export const postObesityRequeset = petObesitySlice.actions.postObesityRequest;
export const postObesitySuccess = petObesitySlice.actions.postObesitySuccess;
export const postObestiyFailure = petObesitySlice.actions.postObestiyFailure;

export default petObesitySlice.reducer;