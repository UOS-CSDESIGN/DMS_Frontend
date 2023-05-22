import axios from "axios";
import Config from "react-native-config";
import { logoutFailure, logoutRequest, logoutSuccess } from "./slice/loginSlice";

async function getLogout(token: string, dispatch:any): Promise<any> {
    
    const url = `${Config.SPRING_API}/api/logout`;
    const bearer = `Bearer ${JSON.parse(token)}`;

    dispatch(logoutRequest());
    await axios.get(url, {
        withCredentials: true,
        headers: {
            Authorization: bearer,
            'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
        }
    }).then((res) => {

        dispatch(logoutSuccess());
        console.log("logout success");

        return Promise.resolve();
    }).catch((err) => {
        dispatch(logoutFailure());
        console.log("logout Failure");

        return Promise.reject();
    });
}
export default getLogout;