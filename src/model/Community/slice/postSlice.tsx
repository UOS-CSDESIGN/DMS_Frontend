import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../Post";

const initialState: PostType = {
    postId: 0,
    boardId: 0,
    title: '',
    content: '',
    modifiedDate: '',
    likeCounts: 0,
    viewCounts: 0,
    writerId: '',
    writerName: '',
    image: [],
    modified: false,
};
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPostItemSuccess: (state, action) => {
            state.postId = action.payload.postId;
            state.boardId = action.payload.boardId;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.modifiedDate =
                action.payload.modifiedDate.split('T')[0].concat(' ').concat(action.payload.modifiedDate.split('T')[1].split('.')[0]);
            state.likeCounts = action.payload.likeCounts;
            state.viewCounts = action.payload.viewCounts;
            state.writerId = action.payload.writerId;
            state.writerName = action.payload.writerName;
            state.image = action.payload.image;
            state.modified = action.payload.modified;
            console.log("in reducer");
            console.log(state);
        }
    }
});

export default postSlice.reducer;

export const getPostItemSuccess = postSlice.actions.getPostItemSuccess;