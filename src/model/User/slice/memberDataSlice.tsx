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
            provider : "",
            street: "",
            addressDetail: "",
            imageId:""
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
                isSocial: action.payload.social,
                provider: action.payload.provider,
                zipcode: action.payload.zipcode,
                street: action.payload.street,
                addressDetail: action.payload.addressDetail,
                gender: action.payload.gender,
                imageId: action.payload.uid
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
                gender : action.payload.gender,
                email: action.payload.email,
                phoneNo: action.payload.phoneNo,
                isSocial: action.payload.isSocial,
                zipcode: action.payload.zipcode,
                street: action.payload.street,
                addressDetail: action.payload.addressDetail,
                imageUrl: action.payload.imageUrl,
                imageName: action.payload.imageName
            };
        },
        postMemberDataFailure: (state) => {
            state.loading = false;
        },
        deleteMemberDataRequest: (state) => {
            state.loading = true;
        },
        deleteMemberDataSuccess: (state, action) => {
            state.userData = {
                userId: "",
                username: "",
                nickname: "",
                birth: "",
                email: "",
                phoneNo: "",
                isSocial: false,
                provider: "",
                zipcode: "",
                street: "",
                addressDetail: "",
                imageUrl: "",
                imageName: "",
                gender: 0,
            };
            state.loading = false;
        },
        deleteMemberDataFailure: (state) => {
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

export const deleteMemberDataRequest = memberDataSlice.actions.deleteMemberDataRequest;
export const deleteMemberDataSuccess = memberDataSlice.actions.deleteMemberDataSuccess;
export const deleteMemberDataFailure = memberDataSlice.actions.deleteMemberDataFailure;

export default memberDataSlice.reducer;