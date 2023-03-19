import { User } from "@react-native-google-signin/google-signin";
import axios from "axios";
import getMemberData from "./getMemberData";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import { RootStackParamList } from "../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
/**
 * @param userInfo : google social infomation
 * @param dispatch : login redux dispatcher
 * @param user : user store
 * @param token : access toek store
 * @returns true-no more info needed false-get more info needed
 */
//get accessToken by passing id_Token and checking if needs signup.
const getGoogleSignin = async (userInfo: User, dispatch: any, user:any, token:string, navigation:any) => {

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
            getMemberData(dispatch, JSON.stringify(res.data.accessToken));
            //add implement of signup
            //checking status code
            if (user.addressDetail === null) {
                navigation.navigate('SocialGoogle');
            }
    
        //add branch to signup if info more needs
        //if not to main

            //must be checking 23.03.16 user object get from server
            console.log(user);
        })
        .catch((error) => {
            dispatch(loginFailure());
            console.log(error);
            throw error;
        });
}
export default getGoogleSignin;