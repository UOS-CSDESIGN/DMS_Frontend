//need fields about Pet main
//name
//birthdate
//gender
//breed
//weight
//obesity
//memberId
//calorieGoal
//imageUrl & name
class Pet{
    //Is id random data from Spring Server?
    id: number;
    name: string;
    birthdate: number;
    gender: number;
    breed: string;
    weight: string;
    memberId: string;
    calorieGoal: number;
    petPicUrl: string;
    petPicName: string;
    obesity: number;

    constructor(
        id: number, name: string, birthdate: number, gender: number,
        breed: string, weigth: string, memberId: string, calorieGoal: number,
        petPicUrl:string, petPicName: string, obesity: number
    ) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.breed = breed;
        this.weight = weigth;
        this.memberId = memberId;
        this.calorieGoal = calorieGoal;
        this.petPicUrl = petPicUrl;
        this.petPicName = petPicName;
        this.obesity = obesity;
    }
    get formDataWithId() {
        let data = new FormData();

        data.append("id", this.id);
        data.append("name", this.name);
        data.append("birthdate", this.birthdate);
        data.append("gender", this.gender);
        data.append("breed", this.gender);
        data.append("weight", this.weight);
        data.append("memberId", this.memberId);
        data.append("calorieGoal", this.calorieGoal);
        //petImage(multipart/form-data)
        if (!(this.petPicUrl === "" && this.petPicUrl === "")) {
            const imageFile = {
                url: this.petPicUrl,
                type: 'multipart/form-data',
                name: this.petPicName,
            }
            //key value may be changed
            data.append("PetDogImage", imageFile);
        }
        return data;
    }
    get formDataWithoutId() {
        let data = new FormData();

        data.append("name", this.name);
        data.append("birthdate", this.birthdate);
        data.append("gender", this.gender);
        data.append("breed", this.gender);
        data.append("weight", this.weight);
        data.append("memberId", this.memberId);
        data.append("calorieGoal", this.calorieGoal);
        //petImage(multipart/form-data)
        if (!(this.petPicUrl === "" && this.petPicUrl === "")) {
            const imageFile = {
                url: this.petPicUrl,
                type: 'multipart/form-data',
                name: this.petPicName,
            }
            //key value may be changed
            data.append("PetDogImage", imageFile);
        }
        return data;
    }
}
export default Pet;