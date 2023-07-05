import { createSlice } from "@reduxjs/toolkit";

export interface ReplyType{
    commentId: number,
    postId: number,
    modifiedDate: string,
    childComments: string[],
    content: string,
    likeCounts: number,
    writerId: string,
    writerName: string,
    modified: boolean,
}
interface ReplyList{
    items: ReplyType[];
    replyId: number;
}

const initialState: ReplyList = {
    items: [],
    replyId: 0
}

const replySlice = createSlice({
    name: 'reply',
    initialState,
    reducers: {
        getReplySucces: (state, action) => {
            state.items = [];
            state.items = action.payload.map((element: any) => (
                {
                    commentId: element.commentId,
                    postId: element.postId,
                    modifiedDate:
                        element.modifiedDate.split('T')[0].concat(' ').concat(element.modifiedDate.split('T')[1].split('.')[0]),
                    childComments: element.childComments,
                    content: element.content,
                    likeCounts: element.likeCounts,
                    writerId: element.writerId,
                    writerName: element.writerName,
                    modified: element.modified,
                }
            ));
            console.log("in redux");
            console.log(state.items);
        },
        getReplyFailure: (state, action) => {
            console.log("error occur");
            console.log(action.payload);
            console.log("list of reply");
            console.log(state.items);
        },
        handlingonPress: (state, action) => {
            state.replyId = action.payload.id;
        }
    }
});

export default replySlice.reducer;

export const getReplySuccess = replySlice.actions.getReplySucces;
export const getReplyFailure = replySlice.actions.getReplyFailure;

export const handlingonPress = replySlice.actions.handlingonPress;