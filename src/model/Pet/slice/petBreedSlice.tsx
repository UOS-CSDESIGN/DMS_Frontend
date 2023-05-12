import { createSlice } from "@reduxjs/toolkit";

const petBreedSlice = createSlice({
    name: "petBreed",
    initialState: {
        List: [],
        loading: false,
    },
    reducers: {
        getBreedRequeset: (state) => {
            state.loading = true;
        },
        getBreedSuccess: (state, action) => {
            state.loading = false;
            state.List = action.payload.map((item: any) => (
                item.breedName
            ));
            console.log(state.List);
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