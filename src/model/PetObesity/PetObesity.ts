class PetObesity{
    petId: number;
    date: number;
    survey: number;
    imageUrl: string;
    imageName: string;

    constructor(
        petId:number, date:number, survey:number, imageUrl:string, imageName:string
    ) {
        this.petId = petId;
        this.date = date;
        this.survey = survey;
        this.imageUrl = imageUrl;
        this.imageName = imageName;
    }

    get postData() {
        
        let data: FormData = new FormData();
        let file = {};

        data.append("petId", this.petId);
        data.append("date", this.date);
        data.append("survey", this.survey);
        file = {
            uri: this.imageUrl,
            type: "multipart/form-data",
            name: this.imageName,
        }
        data.append("obesityImage", file);

        return data;
    }
}
export default PetObesity;