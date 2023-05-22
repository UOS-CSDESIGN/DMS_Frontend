import axios from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";

const postLogin = async (user: FormData, dispatch: any) => {
    //Hooks must be top of the component
    //So, useDispatch passed from parameter dispatch

    dispatch(loginRequest());
        await axios.post("http://localhost:8080/member/login",
            user,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
                },
                transformRequest: (data, headers) => {
                    return data;
                },
            }
        )
        .then((res)=>{
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            console.log(JSON.stringify(res.data.accessToken));
        })
        .catch((error)=>{
            dispatch(loginFailure());
            throw error;
        });
        
};
export default postLogin;