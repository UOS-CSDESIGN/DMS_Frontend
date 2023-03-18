import { createSlice } from "@reduxjs/toolkit";

const petBreedSlice = createSlice({
    name: "petBreed",
    initialState: {
        petBreed: [],
        currentPage: 0,
        loading: false,
    },
    reducers: {
        getBreedRequeset: (state) => {
            state.loading = true;
        },
        getBreedSuccess: (state, action) => {
            state.loading = false;
            state.petBreed = state.petBreed.concat(action.payload.breedList);
            state.currentPage = action.payload.currentPage + 1;
        },
        getBreedFailure: (state) => {
            state.loading = false;
        }
    }
});

export const getBreedRequest = petBreedSlice.actions.getBreedRequeset;
export const getBreedSuccess = petBreedSlice.actions.getBreedSuccess;
export const getBreedFailure = petBreedSlice.actions.getBreedFailure;

export default petBreedSlice.reducer;