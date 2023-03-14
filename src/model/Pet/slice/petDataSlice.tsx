import { createSlice } from "@reduxjs/toolkit";

const petDataSlice = createSlice({
    name: "petData",
    initialState: {
        petData: [{}],
        loading: false,
    },
    reducers: {
        getPetDataRequest: (state) => {
            state.loading = true;
        },
        getPetDataSuccess: (state, action) => {
            state.loading = false;
            
            state.petData = state.petData.concat({
                id: action.payload.id,
                name: action.payload.name,
                birthdate: action.payload.birthdate,
                gender: action.payload.gender,
                breed: action.payload.breed,
                weight: action.payload.weight,
                memberId: action.payload.memberId,
                calorieGoal: action.payload.calorieGoal,
                petPicUrl: action.payload.petPicUrl,
                petPicName: action.payload.petPicName,
                obesity: action.payload.obesity,
            });
        },
        getPetDataFailure: (state) => {
            state.loading = false;
        }
    }
});
export const getPetDataRequest = petDataSlice.actions.getPetDataRequest;
export const getPetDataSuccess = petDataSlice.actions.getPetDataSuccess;
export const getPetDataFailure = petDataSlice.actions.getPetDataFailure;

export default petDataSlice.reducer;