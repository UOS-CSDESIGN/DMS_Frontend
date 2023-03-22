import { getPetDataFailure, getPetDataRequest, getPetDataSuccess } from "./slice/petDataSlice";
import axios from "axios";
import Pet from "./Pet";
import petDataMapper from "./mapper/petDataMapper";

const getPetData = async (dispatch:any, token:any) => {
        
    const bearer = `Bearer ${JSON.parse(token)}`;
    dispatch(getPetDataRequest());

    await axios.get("http://25.12.74.132:8080/pet/getPetList",
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