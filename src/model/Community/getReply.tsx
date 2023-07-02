import axios, { AxiosError, AxiosResponse } from "axios";
import Config from "react-native-config";
import { getReplyFailure, getReplySuccess } from "./slice/replySlice";


async function getReply(token:string|null, dispatch:any, id:number):Promise<number> {
    
    const url = `${Config.SPRING_API}/`;

    axios.get(url)
        .then((res: AxiosResponse) => {
            console.log(res.data);
            
            dispatch(getReplySuccess(res.data));

            return new Promise<number>(function (resolve, reject) {
                resolve(200);
            })
        })
        .catch((err: AxiosError) => {
            console.log(err);

            dispatch(getReplyFailure(err.message));
            return new Promise<number>(function (resolve, reject) {
                reject(400);
            })
        });
    
    return new Promise<number>(function (resolve, reject) {
        reject(300);
    })
}

export default getReply;