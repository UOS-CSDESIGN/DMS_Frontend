import axios from "axios";
import Config from "react-native-config";
import PetObesity from "./PetObesity";
import { getObesityFailure, getObesityRequest, getObesitySuccess } from "./slice/petObesitySlice";

async function getObesity(PetObesity: PetObesity, token: string, dispatch: any):Promise<any> {
    
    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config}/`

    dispatch(getObesityRequest());
    await axios.post(url,
        PetObesity.postData,
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
        dispatch(getObesitySuccess(res.data));
        console.log("postObesity Success");

        return Promise.resolve();
    }).catch((error) => {
        dispatch(getObesityFailure());
        console.log("postObesity Failure");

        return Promise.reject();
    })
};
export default getObesity;