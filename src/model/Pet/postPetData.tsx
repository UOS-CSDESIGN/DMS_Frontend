import { postPetDataFailure, postPetDataRequest, postPetDataSuccess } from "./slice/petDataSlice";
import axios from 'axios';
import Pet from "./Pet";

const postPetData = async (pet: Pet, dispatch: any, token:any) => {
    
    dispatch(postPetDataRequest());
    const bearer = `Bearer ${JSON.parse(token)}`;

    await axios.post("http://25.12.74.132:8080/pet/dog/register",
        pet.registerFormData,
        {
            headers: {
                Authorization: bearer,
            },
        },
    ).then((res) => {
        dispatch(postPetDataSuccess());
        console.log("success post pet data");
    }).catch((error) => {
        dispatch(postPetDataFailure());
        console.log("failed post pet data");
        
        throw error;
    });
};

export default postPetData;