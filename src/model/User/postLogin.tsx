import axios, { Axios, AxiosError } from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import Config from "react-native-config";

async function postLogin(user: FormData, dispatch: any):Promise<any> {
    //Hooks must be top of the component
    //So, useDispatch passed from parameter dispatch
    dispatch(loginRequest());
    const url = `${Config.SPRING_API}/member/login`
    await axios.post(url,
        user,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
        return Promise.resolve(0);
    }).catch((error: AxiosError) => {
        dispatch(loginFailure());
        console.log("login error");
        console.log(error);
        return Promise.reject(1);
    });
    
};
export default postLogin;