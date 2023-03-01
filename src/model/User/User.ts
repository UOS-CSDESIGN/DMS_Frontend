class User{
    userId: string;
    username: string;
    password: string;
    nickname: string;
    gender: number;
    birth: string;
    email: string;
    phoneNo: string;
    isSocial: boolean;
    zipCode: number;
    street: string;
    addressDetail: string;
    imageUrl: string;
    imageName: string;
    
    constructor(
        userId: string, username: string, password: string,
        nickname: string, gender:number, birth: string, email: string,
        phoneNo: string, isSocial: boolean, zipCode: number,
        street: string, addressDetail: string, imageUrl: string, imageName: string
    ) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.phoneNo = phoneNo;
        this.isSocial = isSocial;
        this.zipCode = zipCode;
        this.street = street;
        this.addressDetail = addressDetail;
        this.imageUrl = imageUrl;
        this.imageName = imageName;
    }
    get signupData() {

        let data: FormData = new FormData();
        let file = {};

        data.append("userId", this.userId);
        data.append("password", this.password);
        data.append("username", this.username);
        data.append("nickname", this.nickname);
        data.append("email", this.email);
        data.append("phoneNo", this.phoneNo);
        if (this.imageUrl !== "" && this.imageName !=="") {
            file = {
                uri: this.imageUrl,
                type: 'multipart/form-data',
                name: this.imageName
            }
            data.append("memberImage", file);
        }
        else {
            data.append("memberImage", null);
        }
        
        return data;
    }
    get loginData() {
        let data: FormData = new FormData();
        data.append("userId", this.userId);
        data.append("password", this.password);
        return data;
    }
}
export default User;