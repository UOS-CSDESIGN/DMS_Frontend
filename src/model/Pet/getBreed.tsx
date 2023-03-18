import axios from "axios";
import { getBreedFailure, getBreedRequest, getBreedSuccess } from "./slice/petBreedSlice";
/**
 * @param page current page from store petBreedSlice 
 * @param dispatch redux action function
 * @param token asscess token
 * @param breedList breed List
 * @returns breed List consist of breedId and breedType
 */
const getBreed = async (page:number, dispatch:any, token:any, breedList:any) => {
    
    const bearer = `Bearer ${JSON.parse(token)}`;

    dispatch(getBreedRequest());
    await axios.get(`http://25.12.74.132:8080/pet/getBreedPage?page=${page}`,
        {
            headers: {
                Authorization: bearer,
            },
        },
    ).then((res) => {
        dispatch(getBreedSuccess(res.data));
        //add EOF of breed List
        //breedId를 어케암?
        if (res.data.currentPage) {
            
        }
    }).catch((error) => {
        dispatch(getBreedFailure());
        throw error;
    })
}

export default getBreed;