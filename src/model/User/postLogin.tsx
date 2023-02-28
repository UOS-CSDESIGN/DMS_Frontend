import axios, {AxiosResponse} from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { loginFailure, loginRequest, loginSuccess } from "./loginSlice";
import User from "./User";

const postLogin = async (user: User) => {
    const token = useSelector((state:RootState) => state.login.accessToken);
    const dispatch = useDispatch();
    dispatch(loginRequest());
    try {
        const res:AxiosResponse = await axios.post("https://25.15.132.100:8080/member/login",
            user.loginData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'https://25.15.132.100:8080',
                },
                transformRequest: (data, headers) => {
                    return data;
                },
            }
        )
        dispatch(loginSuccess(res.data));
    } catch (e) {
        dispatch(loginFailure());
        throw e;
    }
};
export default postLogin;