import axios, { AxiosError } from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import Config from "react-native-config";

const postLogin = async (user: FormData, dispatch: any, navigation:any) => {
    //Hooks must be top of the component
    //So, useDispatch passed from parameter dispatch
    console.log(user);
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
        )
        .then((res)=>{
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            console.log(JSON.stringify(res.data.accessToken));
            navigation();
        })
        .catch((error:AxiosError)=>{
            dispatch(loginFailure());
            console.log("login error");
            console.log(error);
            throw error;
        });
        
};
export default postLogin;