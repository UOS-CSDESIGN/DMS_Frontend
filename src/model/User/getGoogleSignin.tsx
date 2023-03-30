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
    return await axios.get(`${Config.SPRING_API}/api/oauth2/google?id_token=${userInfo.idToken}`,
        {
            withCredentials: true,
            headers: {
                //"Access-Control-Allow-Origin":`${Config.SPRING_API}`,
            }
        })
        .then((res) => {
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            getMemberData(dispatch, JSON.stringify(res.data.accessToken));
            //status 201 : default google social
            //status 202 : successful google social
            if (res.status === 201) {
                if (user.addressDetail === "") {
                    //not signed
                    console.log('is here');
                    return 201;
                } else {
                    //signed
                    return 202;
                }
            }
            //status 200 : gmail already exist
            else if (res.status === 200) {
                //alert
                //link to google social 
                return 200;
            }
        })
        .catch((error:AxiosError) => {
            dispatch(loginFailure());
            console.log(error.code);
            console.log(error.toJSON);
            throw error;
        });
}
export default getGoogleSignin;