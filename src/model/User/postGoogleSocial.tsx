/**
 * 
 * @param url :"if google account exist in spring server redirect"
 * @param alterUrl :"if not exist in spring server redirect"
 */
import { Linking } from "react-native";
import { socailFailure, socialRequest, socialSuccess } from "./slice/googleSocialSlice";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";

const postGoogleSocal = async (
    url: string, alterUrl: string,
    stateCode: string, isSocial: boolean, dispatch: any) => {
    
    dispatch(socialRequest());
    dispatch(loginRequest());

    await Linking.openURL(url)
        .then((res) => {
            //pass stateus code (ex. 400, 200)
            dispatch(socialSuccess(res.status));
            if (stateCode === '200') {
                //pass token
                dispatch(loginSuccess(res.data));
            }
        })
        .catch((err) => {
            dispatch(socailFailure());
            dispatch(loginFailure());
            console.error("err ocurred");
        })
    if (stateCode === '400') {
        //implement logic for not exist google social
    }

}

export default postGoogleSocal;