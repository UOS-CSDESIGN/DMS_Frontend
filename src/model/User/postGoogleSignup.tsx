import User from "./User";

//transform user json data to User object
const postGoogleSignup = (dispatch: any, userData: any) => {

    //fix code allocate undefined data to appropriate data
    const user = new User(
        userData.id, userData.name, userData.password,
        userData.nickname, userData.gender, userData.birth, userData.email,
        userData.phoneNo, userData.isSocial, userData.zipcode, userData.street,
        userData.addressDetail, userData.imageUrl, userData.imageNmae
    );

    return user;
}
export default postGoogleSignup;