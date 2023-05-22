import { getPetDataFailure, getPetDataRequest, getPetDataSuccess } from "./slice/petDataSlice";
import axios from "axios";
import Pet from "./Pet";

import petDataMapper from "./mapper/petDataMapper";
import Config from "react-native-config";

const getPetData = async (dispatch:any, token:any) => {
        
    const bearer = `Bearer ${JSON.parse(token)}`;
    dispatch(getPetDataRequest());

    const url = `${Config.SPRING_API}/pet/getPetList`;
    await axios.get(url,
        {
            headers: {
                Authorization: bearer,
            },

        }
    ).then((res) => {
        dispatch(getPetDataSuccess(res.data));
        console.log("success get pet data");
        console.log(res.data);
        return petDataMapper(res.data);
    }).catch((error) => {
        dispatch(getPetDataFailure());
        console.log("failed get pet data");
        console.log(error);
    });
}
export default getPetData;