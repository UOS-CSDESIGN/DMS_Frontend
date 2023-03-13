class User{
    userId: string;
    username: string;
    password: string;
    nickname: string;
    gender : number;
    birth: number;
    email: string;
    phoneNo: string;
    isSocial: boolean;
    zipcode: number;
    street: string;
    addressDetail: string;
    imageUrl: string;
    imageName: string;
    
    constructor(
        userId: string, username: string, password: string,
        nickname: string,  gender : number, birth: number, email: string,
        phoneNo: string, isSocial: boolean, zipcode: number,
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
        this.zipcode = zipcode;
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
        data.append("gender", this.gender);
        data.append("birth", this.birth);
        data.append("isSocial", this.isSocial);
        data.append("email", this.email);
        data.append("phoneNo", this.phoneNo);
        data.append("zipcode", this.zipcode);
        data.append("street", this.street);
        data.append("addressDetail", this.addressDetail);
        data.append("imageUrl", this.imageUrl);
        data.append("imageName", this.imageName);

        if (!(this.imageUrl === "" || this.imageName ==="")) {
            file = {
                uri: this.imageUrl,
                type: 'multipart/form-data',
                name: this.imageName
            }
            data.append("memberImage", file);
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