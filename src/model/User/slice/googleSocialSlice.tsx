import { createSlice } from "@reduxjs/toolkit";

const googleSocialSlice = createSlice({
    name: 'googleSocial',
    initialState: {
        isSupported: false,
        loading: false
    },
    reducers: {
        socialRequest: (state) => {
            state.loading = true;
        },
        socialSuccess: (state, action) => {
            if (action.payload === 200) {
                state.isSupported = true;
                state.loading = false;
            }
            else if (action.payload === 400) {
                state.isSupported = false;
                state.loading = false;
            }
            else {
                console.log("error message : ", action.payload);
            }
        },
        socialFailure: (state) => {
            state.loading = false;
        }
    }
});

export const socialRequest = googleSocialSlice.actions.socialRequest;
export const socialSuccess = googleSocialSlice.actions.socialSuccess;
export const socailFailure = googleSocialSlice.actions.socialFailure;
export default googleSocialSlice;