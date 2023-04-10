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
    petId : number;
    name: string;
    birth: string;
    gender: number;
    breedId: number;
    weight: number;
    obesity: number;
    calorieGoal: number;
    petPicUrl : string;
    petPicName : string;
    constructor(
        petId: number, name: string, birth: string, gender: number,
        breedId: number, weight: number, obesity: number, calorieGoal: number,
        petPicUrl:string, petPicName: string
    ) {
        this.petId = petId;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.breedId = breedId;
        this.weight = weight;
        this.calorieGoal = calorieGoal;
        this.petPicUrl = petPicUrl;
        this.petPicName = petPicName;
        this.obesity = obesity;
    }
    get registerFormData() {
        let data = new FormData();
        let file = {};

        data.append("petId", this.petId);
        data.append("name", this.name);
        data.append("birth", this.birth);
        data.append("gender", this.gender);
        data.append("breedId", this.breedId);
        data.append("weight", this.weight);
        //petImage(multipart/form-data)
        //profileImage
        if (!(this.petPicUrl === "" || this.petPicName === "")) {
            file = {
                uri: this.petPicUrl,
                type: 'multipart/form-data',
                name: this.petPicName,
            }
            console.log(file);
            //key value may be changed
            data.append("petDogImage", file);
        }
        return data;
    }
}
export default Pet;