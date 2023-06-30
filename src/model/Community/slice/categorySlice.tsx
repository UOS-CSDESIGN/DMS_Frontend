import { createSlice } from "@reduxjs/toolkit";
import toCategory from "../mapper/toCategory";
import { postType } from "../Post";
import toPost from "../mapper/toPost";


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        categoryList: [],
        favoriteList: [],
        postList: [],
    },
    reducers: {
        getCategoryRequest: (state) => {
            state.loading = true;
        },
        getCategorySuccess: (state, action) => {

            state.categoryList = action.payload.map((item: any) => (
                 toCategory(item.boardId, item.boardName)
            ));
            console.log(state.categoryList);
        },
        getCategoryFailure: (state) => {
            console.log("failed get category");
            state.loading = false;
        },

        getFavoriteCategoryRequest: (state) => {
            state.loading = true;
        },
        getFavoriteCategorySuccess: (state, action) => {
            state.favoriteList = action.payload.map((item: any) => (
                toCategory(item.categoryId, item.name)
            ));
            console.log(state.favoriteList);
        },
        getFavoriteCategoryFailure: (state) => {
            console.log("failed get favorite category");
            state.loading = false;
        },
        getPostRequest: (state) => {
            state.loading = true;
        },
        getPostSuceess: (state, action) => {
            state.loading = false;
            state.postList = action.payload.map((item: postType) => (
                toPost(item)
            ));
            console.log(state.postList);
        },
        getPostFailure: (state, action) => {
            state.loading = false;
            console.log("failed to get Post");
        },
    }
});
export const getCategoryRequest = categorySlice.actions.getCategoryRequest;
export const getCategorySuccess = categorySlice.actions.getCategorySuccess;
export const getCategoryFailure = categorySlice.actions.getCategoryFailure;

export const getFavoriteCategoryRequest = categorySlice.actions.getFavoriteCategoryRequest;
export const getFavoriteCategorySuccess = categorySlice.actions.getFavoriteCategorySuccess;
export const getFavoriteCategoryFailure = categorySlice.actions.getFavoriteCategoryFailure;

export const getPostRequest = categorySlice.actions.getPostRequest;
export const getPostSuccess = categorySlice.actions.getPostSuceess;
export const getPostFailure = categorySlice.actions.getCategoryFailure;

export default categorySlice.reducer;