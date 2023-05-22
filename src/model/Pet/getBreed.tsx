import axios, { AxiosError } from "axios";
import { getBreedFailure, getBreedRequest, getBreedSuccess } from "./slice/petBreedSlice";
import Config from "react-native-config";
/**
 * @param page current page from store petBreedSlice 
 * @param dispatch redux action function
 * @param token asscess token
 * @param breedList breed List
 * @returns breed List consist of breedId and breedType
 */
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