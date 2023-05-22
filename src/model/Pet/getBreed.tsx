
import axios, { AxiosError } from "axios";
import { getBreedFailure, getBreedRequest, getBreedSuccess } from "./slice/petBreedSlice";
import Config from "react-native-config";

const getBreed = async (dispatch:any) => {
    
    dispatch(getBreedRequest());

    const url = `${Config.SPRING_API}/pet/getBreedList`;

    await axios.get(url,
    ).then((res) => {
        dispatch(getBreedSuccess(res.data));
    }).catch((error:AxiosError) => {
        dispatch(getBreedFailure());
        //page was overflowed
        if (error.status === 404) {
            return false;
        }
        throw error;
    })
}

export default getBreed;