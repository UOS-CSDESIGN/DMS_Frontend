import { User } from "@react-native-google-signin/google-signin";
import axios from "axios";
import getMemberData from "./getMemberData";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import { RootStackParamList } from "../../AppInner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
/**
 * @param userInfo : google social infomation
 * @param dispatch : login redux dispatcher
 * @param user : user store
 * @param token : access toek store
 * @returns true-no more info needed false-get more info needed
 */
//get accessToken by passing id_Token and checking if needs signup.
const getGoogleSignin = async (userInfo: User, dispatch: any, user:any, token:string) => {

    dispatch(loginRequest());
    const res = await axios.get(`http://25.12.74.132:8080/api/oauth2/google?id_token=${userInfo.idToken}`,
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
            //add more condition for not signuped
            if (user.addressDetail === "") {
                console.log('is here');
                return false;
            }else{
                return true;
            }
        })
        .catch((error) => {
            dispatch(loginFailure());
            console.log(error);
            throw error;
        });
        console.log('promise return');
        console.log(res);
        return res;
}
export default getGoogleSignin;