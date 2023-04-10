import { postPetDataFailure, postPetDataRequest, postPetDataSuccess } from "./slice/petDataSlice";
import axios, { AxiosError } from 'axios';
import Pet from "./Pet";
import Config from "react-native-config";

const postPetRegister = async (pet: Pet, dispatch: any, token:any) => {
    dispatch(postPetDataRequest());
    console.log(pet.petPicUrl);

    const bearer = `Bearer ${JSON.parse(token)}`;
    await axios.post(`${Config.SPRING_API}/pet/dog/register`,
        pet.registerFormData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: bearer,
                'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
            },
        },
    ).then((res) => {
        dispatch(postPetDataSuccess());
        //getPetData(dispatch, token);
        console.log("success post pet data");
        console.log(res.data);

    }).catch((error: AxiosError) => {
        dispatch(postPetDataFailure());
        console.log("failed post pet data");
        console.log(error);
        console.log(error.message);
        
        throw error;
    });
};

export default postPetRegister;