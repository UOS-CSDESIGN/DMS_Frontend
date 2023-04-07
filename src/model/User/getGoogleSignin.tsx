import { User } from "@react-native-google-signin/google-signin";
import axios, { AxiosError } from "axios";
import getMemberData from "./getMemberData";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import Config from "react-native-config";

/**
 * @param userInfo : google social infomation
 * @param dispatch : login redux dispatcher
 * @param user : user store
 * @param token : access toek store
 * @returns 200: already exist mail, 201: default goolge social, 202: need more info
 */

//get accessToken by passing id_Token and checking if needs signup.
const getGoogleSignin = async (userInfo: User, dispatch: any, user:any) => {

    dispatch(loginRequest());

    console.log(`${Config.SPRING_API}/api/oauth2/google?id_token=${userInfo.idToken}`);
    const url = `${Config.SPRING_API}/api/oauth2/google?id_token=${userInfo.idToken}`;
    return await axios.get(url,
        {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin":`${Config.SPRING_API}`,
            }
        })
        .then((res) => {
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            getMemberData(dispatch, JSON.stringify(res.data.accessToken));
            console.log(res.data);
            if (res.status === 200) {
                //go to main
                return 200;
            }
            else if (res.status === 201) {
                //not signed
                console.log('is here');
                return 201;
            }
            else if (res.status === 202) {
                //alert
                //link to google social 
                return 200;
            }
        })
        .catch((error:AxiosError) => {
            dispatch(loginFailure());
            console.log(error);
            console.log(error.message);
            console.log("endOfgoogleFUnction")
            throw error;
        });
}
export default getGoogleSignin;