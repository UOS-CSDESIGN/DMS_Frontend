import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";

const postLogin = async (user: FormData, dispatch:any) => {
    //const dispatch = useDispatch();
    dispatch(loginRequest());
        await axios.post("http://25.12.74.132:8080/member/login",
            user,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': 'http://25.12.74.132:8080',
                },
                transformRequest: (data, headers) => {
                    return data;
                },
            }
        )
        .then((res)=>{
            dispatch(loginSuccess(JSON.stringify(res.data.accessToken)));
            console.log(res);
        })
        .catch((error)=>{
            dispatch(loginFailure());
            console.log(error);
            throw error;
        });
        
};
export default postLogin;