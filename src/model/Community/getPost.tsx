import axios from "axios";
import { PostType } from "./Post";
import Config from "react-native-config";
import { getPostItemSuccess } from "./slice/postSlice";


async function getPost(boardId: number, postId: number, dispatch:any): Promise<any>{
    
    const url: string = `${Config.SPRING_API}/board/${boardId}/read?boardId=${boardId}&postId=${postId}`;
    if (boardId === 0) {
        return Promise.reject();
    }
    if (postId === 0) {
        return Promise.reject();
    }
    await axios.get(url)
        .then((res) => {
            dispatch(getPostItemSuccess(res.data));
            
            return Promise.resolve();
        })
        .catch((err) => {
            console.log(err);

            return Promise.reject();            
        });
    
}

export default getPost;