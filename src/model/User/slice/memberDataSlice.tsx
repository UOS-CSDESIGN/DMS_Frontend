import {createSlice} from '@reduxjs/toolkit';

const memberDataSlice = createSlice({
    name: "memberData",
    initialState: {
        userData: {
            userId: "",
            username: "",
            nickname: "",
            birth: "",
            email: "",
            phoneNo: "",
            isSocial: false,
            zipcode: "",
            gender:0,
            street: "",
            addressDetail: "",
            imageUrl: "",
            imageName: ""
        },
        loading: false,
    },
    reducers: {
        memberDataRequest: (state) => {
            state.loading = true;
        },
        memberDataSuccess: (state, action) => {
            state.loading = false;
            state.userData = {
                userId: action.payload.userId,
                username: action.payload.username,
                nickname: action.payload.nickname,
                birth: action.payload.birth,
                email: action.payload.email,
                phoneNo: action.payload.phoneNo,
                isSocial: action.payload.isSocial,
                provider: action.payload.provider,
                zipcode: action.payload.zipCode,
                street: action.payload.street,
                addressDetail: action.payload.addressDetail,
                imageUrl: action.payload.imageUrl,
                imageName: action.payload.imageName,
                gender:action.payload.gender,
            };
        },
        memberDataFailure: (state) => {
            state.loading = false;
        },
        postMemberDataRequest: (state) => {
            state.loading = true;
        },
        postMemberDataSuccess: (state, action) => {
            state.loading = false;
            state.userData = {
                userId: action.payload.userId,
                username: action.payload.username,
                nickname: action.payload.nickname,
                birth: action.payload.birth,
                email: action.payload.email,
                phoneNo: action.payload.phoneNo,
                isSocial: action.payload.isSocial,
                zipcode: action.payload.zipCode,
                street: action.payload.street,
                addressDetail: action.payload.addressDetail,
                imageUrl: action.payload.imageUrl,
                imageName: action.payload.imageName
            };
        },
        postMemberDataFailure: (state) => {
            state.loading = false;
        }
    }
});
export const memberDataRequest = memberDataSlice.actions.memberDataRequest;
export const memberDataSuccess = memberDataSlice.actions.memberDataSuccess;
export const memberDataFailure = memberDataSlice.actions.memberDataFailure;

export const postMemberDataRequest = memberDataSlice.actions.postMemberDataRequest;
export const postMemberDataSuccess = memberDataSlice.actions.postMemberDataSuccess;
export const postMemberDataFailure = memberDataSlice.actions.postMemberDataFailure;

export default memberDataSlice.reducer;