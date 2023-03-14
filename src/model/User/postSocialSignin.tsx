import { User } from "@react-native-google-signin/google-signin";
import axios from "axios";
import getMemberData from "./getMemberData";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
/**
 * @param userInfo : google social infomation
 * @param dispatch : login redux dispatcher
 * @param user : user store
 * @param token : access toek store
 * @returns true-no more info needed false-get more info needed
 */
const postSocialSignin = async (userInfo: User, dispatch: any, user:any, token:any) => {

    dispatch(loginRequest());
    await axios.get(`http://25.12.74.132:8080/api/oauth2/google?id_token=${userInfo.idToken}`,
        {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin":"http://25.12.74.132:8080",
            }
        })
        .then((res) => {
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            console.log("Access Token!!")
            console.log(JSON.stringify(res.data.accessToken));
            //add implement of signup
            //checking status code
        })
        .catch((error) => {
            dispatch(loginFailure());
            console.log("failed");
            throw error;
        });
    getMemberData(dispatch, token);

    if (user.userData.addressDetail === "") {
        console.log("useData not available");
        return false;
    }
    else {
        console.log("userData available");
        return true;
    }
}
export default postSocialSignin;