import { getPetDataFailure, getPetDataRequest, getPetDataSuccess } from "./slice/petDataSlice";
import axios from "axios";
import Pet from "./Pet";

const getPetData = async (dispatch:any, token:any, petList:any) => {
        
    const bearer = `Bearer ${JSON.parse(token)}`;
    dispatch(getPetDataRequest());
    let resList:any = [];
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
    }).catch((error) => {
        dispatch(getPetDataFailure());
        console.log("failed get pet data");
        console.log(error);
    });
    for (let i = 0; i < petList.length; i++){

        const tmp = new Pet(
            petList[i].id, petList[i].name, petList[i].birth,
            petList[i].gender, petList[i].breedId, petList[i].weight,
            petList[i].obesity, petList[i].calorieGoal,
            petList[i].images[0].id,
            petList[i].images[0].uuid,
            petList[i].images[0].fileUrl,
            petList[i].images[0].fileName
        );
        resList = resList.concat(tmp);
    }
    return resList;
}
export default getPetData;