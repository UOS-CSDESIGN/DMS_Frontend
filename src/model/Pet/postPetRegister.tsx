import { postPetDataFailure, postPetDataRequest, postPetDataSuccess } from "./slice/petDataSlice";
import axios, { AxiosError } from 'axios';
import Pet from "./Pet";
import getPetData from "./getPetData";
import Config from "react-native-config";

const postPetRegister = async (pet: Pet, dispatch: any, token:any) => {
    console.log(`${Config.SPRING_API}`);
    dispatch(postPetDataRequest());

    const bearer = `Bearer ${JSON.parse(token)}`;
    console.log(pet.registerFormData);
    console.log(bearer);
    await axios.post(`${Config.SPRING_API}/pet/dog/register`,
        pet.registerFormData,
        {
            headers: {
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