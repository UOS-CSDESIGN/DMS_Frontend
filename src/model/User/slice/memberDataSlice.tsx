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
            zipCode: 0,
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
                zipCode: action.payload.zipCode,
                street: action.payload.street,
                addressDetail: action.payload.addressDetail,
                imageUrl: action.payload.imageUrl,
                imageName: action.payload.imageName
            };
        },
        memberDataFailure: (state) => {
            state.loading = false;
        }
    }
});
export const memberDataRequest = memberDataSlice.actions.memberDataRequest;
export const memberDataSuccess = memberDataSlice.actions.memberDataSuccess;
export const memberDataFailure = memberDataSlice.actions.memberDataFailure;

export default memberDataSlice.reducer;