import axios from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import Config from "react-native-config";

const postLogin = async (user: FormData, dispatch: any) => {
    //Hooks must be top of the component
    //So, useDispatch passed from parameter dispatch

    dispatch(loginRequest());
    return await axios.post(`${Config.SPRING_API}/member/login`,
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
            return true;
        })
        .catch((error)=>{
            dispatch(loginFailure());
            throw error;
        });
        
};
export default postLogin;