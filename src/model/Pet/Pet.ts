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
    birth: number;
    gender: number;
    breedType: string;
    breedId: string;
    weight: string;
    obesity: number;
    calorieGoal: number;
    image: any;
    constructor(
        id: number, name: string, birth: number, gender: number,
        breedType: string, breedId: string, weigth: string, obesity: number, calorieGoal: number,
        petPicId:number, petPicUuid:string, petPicUrl:string, petPicName: string
    ) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.breedType = breedType;
        this.breedId = breedId;
        this.weight = weigth;
        this.calorieGoal = calorieGoal;
        this.image = {
            id: petPicId,
            uuid: petPicUuid,
            fileName: petPicName,
            fileUrl: petPicUrl
        };
        this.obesity = obesity;
    }
    get registerFormData() {
        let data = new FormData();

        data.append("name", this.name);
        data.append("birth", this.birth);
        data.append("gender", this.gender);
        data.append("breedId", this.breedId);
        data.append("weight", this.weight);
        //petImage(multipart/form-data)
        //profileImage
        if (!(this.image.fileUrl === "" && this.image.fileName === "")) {
            const imageFile = {
                url: this.image.fileUrl,
                type: 'multipart/form-data',
                name: this.image.fileName,
            }
            //key value may be changed
            data.append("PetDogImage", imageFile);
        }
        return data;
    }
}
export default Pet;