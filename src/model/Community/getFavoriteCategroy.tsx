import axios from "axios";
import Config from "react-native-config";
import { getFavoriteCategoryFailure, getFavoriteCategoryRequest, getFavoriteCategorySuccess } from "./slice/categorySlice";


async function getFavoriteCategory(token: string, dispatch: any): Promise<any>{

    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config.SPRING_API}/`;

    dispatch(getFavoriteCategoryRequest());
    await axios.get(
        url,
        {
            headers: {
                Authorization: bearer,
            }
        },
    ).then((res) => {
        dispatch(getFavoriteCategorySuccess(res.data));
        
        return Promise.resolve();
    }).catch((error) => {
        dispatch(getFavoriteCategoryFailure());
        
        return Promise.reject();
    });
}

export default getFavoriteCategory;