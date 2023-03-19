class image {
    id: number;
    uuid: string;
    fileName: string;
    fileUrl: string;

    constructor(
        id: number, uuid: string, fileName: string, fileUrl: string
    ) {
        this.id = id;
        this.uuid = uuid;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
    get imageFile(){
        return ({
            fileName: this.fileName,
            fileUrl: this.fileUrl
        });
    }
    get imageObj(){
        return ({
            id: this.id,
            uuid: this.uuid,
            fileName: this.fileName,
            fileUrl: this.fileUrl,
        });
    }
}
export default image;