
import Pet from "../Pet";

const toPet = (data: any) => {
    return (
        new Pet(
            data.petId, data.name, data.birth, data.gender,
            data.breedId, data.weight, data.obesity, data.calorieGoal,
            data.petPicUrl, data.petPicName
        )
    );
};

export default toPet;