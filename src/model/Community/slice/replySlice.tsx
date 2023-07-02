import { ReplyType } from "../Reply";
import { createSlice } from "@reduxjs/toolkit";

interface ReplyList{
    items: ReplyType[];
}

const initialState: ReplyList = {
    items: []
}

const replySlice = createSlice({
    name: 'reply',
    initialState,
    reducers: {
        getReplySucces: (state, action) => {
            state.items = action.payload.map((element: any) => (
                {
                    id: element.id,
                    writerId: element.writerId,
                    writerName: element.writerName,
                    content: element.content,
                    modifiedDate: element.modifiedDate,
                }
            ));
        },
        getReplyFailure: (state, action) => {
            console.log("error occur");
            console.log(action.payload);
            console.log("list of reply");
            console.log(state.items);
        }
    }
});

export default replySlice.reducer;

export const getReplySuccess = replySlice.actions.getReplySucces;
export const getReplyFailure = replySlice.actions.getReplyFailure;