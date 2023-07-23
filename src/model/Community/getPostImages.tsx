import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import { getPostImageSuccess } from "./slice/postSlice";

async function getPostImage(dispatch:any, uuid:string):Promise<any>{

    const url = `${Config.SPRING_API}/api/post?uuid=${uuid}`;

    console.log("url",url);
    await axios.get(url,{
    }).then((res)=>{
        dispatch(getPostImageSuccess(res.data));
        return Promise.resolve();
    }).catch((err:AxiosError)=>{
        console.log(err);
        console.log(url);
        return Promise.reject();
    })
}

export default getPostImage;