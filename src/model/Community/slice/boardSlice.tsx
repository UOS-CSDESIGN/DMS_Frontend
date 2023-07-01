import { createSlice } from "@reduxjs/toolkit";
import { Board } from "../Category";

interface BoardList{
    items: Board[];
};

const initialState: BoardList = {
    items: [],
}; 
const boardSlice = createSlice({
    name: 'Board',
    initialState,
    reducers: {
        getBoardSuccess: (state, action) => {
            state.items = action.payload.map((element: any) => (
                { boardId: element.boardId, boardName: element.boardName }
            ));
            console.log("getBoard Success");
        },
        getBoardFailure: (state, action) => {
            console.log("error occured");
            console.log(action.payload);
        }
    }
});

export default boardSlice.reducer;

export const getBoardSuccess = boardSlice.actions.getBoardSuccess;
export const getBoardFailure = boardSlice.actions.getBoardFailure;