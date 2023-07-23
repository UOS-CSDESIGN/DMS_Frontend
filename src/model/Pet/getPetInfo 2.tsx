import Pet from "./Pet";

export interface petInfoType{
    petId: number;
    petName: string;
}
function getPetInfo(petList:Pet[]): petInfoType[] {
    let returnList:petInfoType[] = [];

    petList.map((item: any) => {
        const pet = {
            petId: item.petId,
            petName: item.petName
        };
        returnList.concat(pet);
    });

    return returnList;
};
export default getPetInfo;