import { createSlice } from "@reduxjs/toolkit";
import { PreviewType } from "../Post";

interface PostList{
    items: PreviewType[];
}

const initialState: PostList = {
    items: []
};

const postPreviewSlice = createSlice({
    name: 'Preview',
    initialState,
    reducers: {
        getPostSuccess: (state, action) => {
            state.items = action.payload.map((element: any) => (
                {
                    postId: element.postId,
                    title: element.title,
                    modifiedDate: element.modifiedDate,
                    likeCounts: element.likeCounts,
                    writerName: element.writerName,
                    writeId: element.writerId,
                    commentCount: element.commentCount
                }
            ));
        },
        getPostFailure: (state, action){
            console.log("error occured");
            console.log(action.payload);
        }
    }
});

export default postPreviewSlice.reducer;
export const getPostSuccess = postPreviewSlice.actions.getPostSuccess;
export const getPostFailure = postPreviewSlice.actions.getPostFailure;