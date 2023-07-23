import { ReplyType } from './slice/replySlice';
import Config from 'react-native-config';
import axios, { AxiosError } from 'axios';

async function postReply(boardId: number, postId: number,
    token: string|null, dispatch: any, reply: any): Promise<any>{

    if (token === null) {
        return Promise.reject();
    }
    const bearer = `Bearer ${token}`;
    let data: FormData = new FormData();

    data.append('content', reply.content);
    data.append('writerId', reply.writerId);
    data.append('postId', reply.postId);

    if (reply.commentId !== 0) {
        data.append('parentId', reply.commentId);
    } else {
        console.log("root comment input");
    }
    const url = `${Config.SPRING_API}/board/${boardId}/comment/add?boardId=${boardId}&postId=${postId}`;

    console.log(data);
    await axios.post(url,
        data,
        {
            headers: {
                Authorization: bearer,
                'Content-Type':'multipart/form-data'
            }
        }).then((res) => {
            console.log("post reply success");

            return Promise.resolve();
        }).catch((err:AxiosError) => {
            console.log("post reply error");
            console.log(err.code);
            console.log(err)
            console.log(err.message);
            return Promise.reject();
        });
};
export default postReply;