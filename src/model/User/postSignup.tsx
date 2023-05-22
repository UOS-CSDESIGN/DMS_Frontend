import axios from "axios";
import { signupFailure, signupRequest, signupSuccess } from "./slice/signupSlice";
import User from "./User";
import Config from "react-native-config";

const postSignup = async (user: User, dispatch:any, toLogin:any) => {
    dispatch(signupRequest());
    await axios.post(`${Config.SPRING_API}/member/signup`,
        user.signupData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        dispatch(signupSuccess(res.data));
        console.log("signup success");
        toLogin();
    }).catch((error) => {
        dispatch(signupFailure());
        console.log(error)
        console.log("signup failed");
    })
};
export default postSignup;