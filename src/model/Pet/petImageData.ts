import { List } from "reselect/es/types";
import { RootState } from "..";
import PetImage from "./PetImage";
const petImageData = (petId:string, petData:List) => {
    
    let images: List = [];
    let returnData: List = [];
    for (let i = 0; i < petData.length; i++){
        if (petData[i] === petId) {
            images = images.concat(petData[i].images);
        }
    }
    for (let i = 0; i < images.length; i++){
        returnData = returnData.concat(new PetImage(
            images[i].id, images[i].uuid, images[i].fileName, images[i].fileUrl
        ));
    }
    return returnData;
}
export default petImageData;