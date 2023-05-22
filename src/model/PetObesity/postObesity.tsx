import Config from "react-native-config";
import axios from "axios";
import PetObesity from "./PetObesity";
import { postObesityRequeset, postObesitySuccess, postObestiyFailure } from "./slice/petObesitySlice";

async function postObesity(petObesity:PetObesity, token: string, dispatch: any): Promise<any> {
    
    const url = `${Config.SRPING_API}/`;
    const bearer = `Bearer${JSON.parse(token)}`;

    dispatch(postObesityRequeset());
    await axios.post(url,
        petObesity.postData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: bearer,
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        dispatch(postObesitySuccess());
        console.log(res.data);
        return Promise.resolve();
    }).catch((err) => {
        dispatch(postObestiyFailure());
        console.log(err);
        return Promise.reject();
    })
};
export default postObesity;