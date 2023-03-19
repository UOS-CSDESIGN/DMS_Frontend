import axios from "axios";
import { signupFailure, signupRequest, signupSuccess } from "./slice/signupSlice";
import User from "./User";

const postSignup = async (user: User, dispatch:any) => {
    dispatch(signupRequest());
    await axios.post("http://25.12.74.132:8080/member/signup",
        user.signupData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': 'http://25.12.74.132:8080',
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        dispatch(signupSuccess(res.data));
        console.log("signup success");
    }).catch((error) => {
        dispatch(signupFailure());
        console.log("signup failed");
    })
};
export default postSignup;