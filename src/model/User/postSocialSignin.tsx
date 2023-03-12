import { User } from "@react-native-google-signin/google-signin";
import axios from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";

const postSocialSignin = async (userInfo: User, dispatch: any) => {

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
            console.log(JSON.stringify(res.data.accessToken));
            //add implement of signup
            //checking status code
        })
        .catch((error) => {
            dispatch(loginFailure());
            throw error;
        });
    
}
export default postSocialSignin;