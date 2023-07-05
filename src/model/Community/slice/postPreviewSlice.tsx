import { createSlice } from "@reduxjs/toolkit";
import { PreviewType } from "../Post";

interface PostList{
    boardInfo: {
        boardId: number,
        boardName: string
    },
    postInfo: {
        postId: number,
        postName: string
    },
    items: PreviewType[];
}

const initialState: PostList = {
    boardInfo: {
        boardId: 0,
        boardName: ''
    },
    postInfo: {
        postId: 0,
        postName: ''
    },
    items: []
};

const postPreviewSlice = createSlice({
    name: 'Preview',
    initialState,
    reducers: {
        getPostSuccess: (state, action) => {
            state.items = [];
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
        getPostFailure: (state, action) => {
            console.log("error occured");
            console.log(action.payload);
            console.log('list of preview');
            console.log(state.items);
        },
        handlingBoardPress: (state, action) => {
            state.boardInfo = {
                boardId: 0,
                boardName: '',
            }
            state.boardInfo = {
                boardId: action.payload.id,
                boardName: action.payload.name
            };
        },
        handlingPostPress: (state, action) => {
            state.postInfo = {
                postId: 0,
                postName: '',
            }
            state.postInfo = {
                postId: action.payload.id,
                postName: action.payload.name
            };
        }
    }
});

export default postPreviewSlice.reducer;

export const getPostSuccess = postPreviewSlice.actions.getPostSuccess;
export const getPostFailure = postPreviewSlice.actions.getPostFailure;

export const handlingBoradPress = postPreviewSlice.actions.handlingBoardPress;
export const handlingPostPress = postPreviewSlice.actions.handlingPostPress;