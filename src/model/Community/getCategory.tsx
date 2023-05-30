import axios from "axios";
import Config from "react-native-config";
import { getCategoryRequest, getCategorySuccess, getCategoryFailure } from "./slice/categorySlice";

async function getCategory(token:string, dispatch:any):Promise<any> {
    
    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config.SPRING_API}/`;

    dispatch(getCategoryRequest());
    await axios.get(
        url,
        {
            headers: {
                Authorization: bearer,
            }
        },
    ).then((res) => {
        dispatch(getCategorySuccess(res.data));
        
        return Promise.resolve();
    }).catch((error) => {
        dispatch(getCategoryFailure());
        
        return Promise.reject();
    });
}

export default getCategory;