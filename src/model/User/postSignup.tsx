import axios from "axios";
import { signupFailure, signupRequest, signupSuccess } from "./slice/signupSlice";
import User from "./User";

const postSignup = async (user: User, dispatch:any) => {
    dispatch(signupRequest());
    await axios.post("http://103.51.189.103:8080/member/signup",
        user.signupData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
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
        console.log(error)
        console.log("signup failed");
    })
};
export default postSignup;