import { List } from "reselect/es/types";
import Pet from "../Pet";

const petDataMapper = (petList: List) => {
    
    let returnList: List = [];

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
        returnList = returnList.concat(tmp);
    }
    return returnList;
}

export default petDataMapper;