import axios, { AxiosError } from "axios"
import Config from "react-native-config"
import { logoutFailure, logoutRequest, logoutSuccess } from "./slice/loginSlice";
import { deleteMemberDataFailure, deleteMemberDataRequest, deleteMemberDataSuccess } from "./slice/memberDataSlice";
import qs from "qs";


const deleteMemberData = async (dispatch: any, token: any, pw: string, isSocial:boolean):Promise<any> => {

    dispatch(logoutRequest());
    dispatch(deleteMemberDataRequest());
    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config.SPRING_API}/member/delete`;
    if (isSocial === false) {
        axios.delete(
            url,
            {
                data: qs.stringify({ password: pw }),
                headers: {
                    Authorization: bearer,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                transformRequest: (data, headers) => {
                    console.log("before send data", data);
                    return data;
                }
            }
        ).then((res) => {
            console.log(res.data);
            dispatch(deleteMemberDataSuccess(res.data));
            dispatch(logoutSuccess());

            return Promise.resolve();
        }).catch((error: AxiosError) => {
            console.log(error.message);
            dispatch(deleteMemberDataFailure());
            dispatch(logoutFailure());
            return Promise.reject();
        })
    } else if (isSocial === true) {
        
    }
};
export default deleteMemberData;