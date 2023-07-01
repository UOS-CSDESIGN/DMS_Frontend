import axios from "axios";
import Config from "react-native-config";
import { getPostFailure, getPostSuccess } from "./slice/postPreviewSlice";

async function getPreviewPost(boardId:number,token: string|null, dispatch: any): Promise<any>{
    
    const url = `${Config.SPRING_API}/board/${boardId}/list`;

    if (token == null) {
        return Promise.reject();
    }

    await axios.get(
        url,
    ).then((res) => {
        console.log(res.data);
        dispatch(getPostSuccess(res.data));

        return Promise.resolve();
    }).catch((error) => {
        console.log("error");
        dispatch(getPostFailure(error));

        return Promise.reject();
    });
}
export default getPreviewPost;