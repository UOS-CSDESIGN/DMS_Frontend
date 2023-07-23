import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import { getBoardFailure, getBoardSuccess } from "./slice/boardSlice";

async function getCategory(token:string, dispatch:any):Promise<any> {
    
    //const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config.SPRING_API}/board/list`;

    await axios.get(url)
        .then((res) => {
            dispatch(getBoardSuccess(res.data));

            return Promise.resolve();
        }).
        catch((error: AxiosError) => {
            dispatch(getBoardFailure(error));
        
            return Promise.reject();
        });
}

export default getCategory;