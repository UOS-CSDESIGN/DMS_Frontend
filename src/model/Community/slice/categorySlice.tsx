import { createSlice } from "@reduxjs/toolkit";
import toCategory from "../mapper/toCategory";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        categoryList: []
    },
    reducers: {
        getCategoryRequest: (state) => {
            state.loading = true;
        },
        getCategorySuccess: (state, action) => {

            state.categoryList = action.payload.map((item: any) => (
                toCategory(item.categoryId, item.name)
            ));

            console.log(state.categoryList);
            state.loading = false;
        },
        getCategoryFailure: (state) => {
            console.log("failed get category");
            state.loading = false;
        },
    }
});

export const getCategoryRequest = categorySlice.actions.getCategoryRequest;
export const getCategorySuccess = categorySlice.actions.getCategorySuccess;
export const getCategoryFailure = categorySlice.actions.getCategoryFailure;

export default categorySlice.reducer;