import axios, { AxiosError, AxiosResponse } from "axios";
import Config from "react-native-config";
import { getReplyFailure, getReplySuccess } from "./slice/replySlice";


async function getReply(boardId: number, postId:number, token:string|null, dispatch:any):Promise<any> {
    
    const url = `${Config.SPRING_API}/board/${boardId}/readComment?boardId=${boardId}&postId=${postId}`;

    if (boardId === 0) {
        return Promise.reject();
    }
    if (postId === 0) {
        return Promise.reject();
    }
    await axios.get(url)
        .then((res) => {
            
            dispatch(getReplySuccess(res.data));
            
            return Promise.resolve();
        })
        .catch((err: AxiosError) => {
            console.log(err);

            dispatch(getReplyFailure(err.message));
            return Promise.reject();
        });
}

export default getReply;