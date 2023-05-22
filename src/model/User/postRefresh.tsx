import axios, { AxiosError } from 'axios';
import { refreshFailure, refreshRequest, refreshSuccess } from "./slice/loginSlice";
import Config from "react-native-config";
import jwt_decode from "jwt-decode";
import moment from "moment";

//insert this function where main page at mounted time
//follow format
//axios.interceptors.request.use(postRefresh(params));
const postRefresh = async (dispatch: any, accessToken:string, refreshToken:string, exp: number) => {
    dispatch(refreshRequest());
    const url = `${Config.SPRING_API}/api/refreshToken`
    const bearer = `Bearer ${JSON.parse(refreshToken)}`;

    const currTime = new Date();
    const utc = currTime.getTime() +
        (currTime.getTimezoneOffset() * 60 * 1000);
    const expTime = new Date(utc + (9 * 60 * 60 * 1000) + exp / 1000);

    if (moment(expTime).diff(moment()) < 100) {
        console.log("token refresh occured");
        
        await axios.post(url,
            accessToken,
            {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
                    Authorization: bearer,
                }
            },
        ).then((res) => {
            const auth = res.headers.authorization.substring(7);
            const data = jwt_decode(auth);
        
            const currTime = new Date();
            const utc = currTime.getTime() +
                (currTime.getTimezoneOffset() * 60 * 1000);
            //utc + (9*60*60*1000) == korean locale
            const exp = new Date(utc + (9 * 60 * 60 * 1000) + data.exp / 1000);
        
            const refresh = res.headers["set-cookie"]?.toString().split(";");
            const loginInfo = {
                accessToken: auth,
                refreshToken: refresh[0].substring(14),
                exp: exp.getTime(),
            };
            dispatch(refreshSuccess(loginInfo));
        
            return Promise.resolve(0);
        }).catch((error: AxiosError) => {
            dispatch(refreshFailure());
            console.log("refresh error");
            console.log(error);
            return Promise.reject(1);
        });
    }
};
export default postRefresh;