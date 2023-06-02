class PetObesity{
    petId: number;
    date: number;
    weight: number;
    touchRip: number;
    seeRip: number;
    touchBelly: number;
    seeWeistUp: number;
    seeWeistSide: number;
    imageUrl: string;
    imageName: string;

    constructor(
        petId: number, date: number, weight: number,
        touchRip: number, seeRip: number, touchBelly: number, seeWeistUp: number, seeWeistSide: number,
        imageUrl: string, imageName: string
    ) {
        this.petId = petId;
        this.date = date;
        this.weight = weight;

        this.touchRip = touchRip;
        this.seeRip = seeRip;
        this.touchBelly = touchBelly;
        this.seeWeistUp = seeWeistUp;
        this.seeWeistSide = seeWeistSide;

        this.imageUrl = imageUrl;
        this.imageName = imageName;
    }

    get postData() {
        
        let data: FormData = new FormData();
        let file = {};

        data.append("petId", this.petId);
        data.append("weight", this.weight);
        data.append("touchRip", this.touchRip);
        data.append("seeRip", this.seeRip);
        data.append("touchBelly", this.touchBelly);
        data.append("seeWeistUp", this.seeWeistUp);
        data.append("seeWeistSide", this.seeWeistSide);
        file = {
            uri: this.imageUrl,
            type: "multipart/form-data",
            name: this.imageName,
        }
        data.append("images", file);

        return data;
    }
}
export default PetObesity;