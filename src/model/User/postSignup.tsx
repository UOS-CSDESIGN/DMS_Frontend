import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { loginFailure } from "./loginSlice";
import { signupRequest, signupSuccess } from "./signupSlice";
import User from "./User";

const postSignup = async (user: User) => {
    const msg = useSelector((state: RootState) => state.singup.message);
    const dispatch = useDispatch();

    dispatch(signupRequest());
    try {
        const res: AxiosResponse = await axios.post("http://25.15.132.100:8080/member/signup",
            user.signupData,
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'http://25.15.132.100:8080',
                },
                transformRequest: (data, headers) => {
                    return data;
                },
            }
        );
        dispatch(signupSuccess(res.data));
    } catch (e) {
        dispatch(loginFailure());
        throw e;
    }
};
export default postSignup;