import axios, { AxiosError } from "axios"
import Config from "react-native-config"
import { logoutFailure, logoutRequest, logoutSuccess } from "./slice/loginSlice";
import { deleteMemberDataFailure, deleteMemberDataRequest, deleteMemberDataSuccess } from "./slice/memberDataSlice";
import qs from "qs";


const deleteMemberData = async (dispatch: any, token: any, password: string) => {
    
    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${Config.SPRING_API}/member/delete`;
    console.log(typeof(password));
    
    dispatch(logoutRequest());
    dispatch(deleteMemberDataRequest());
    const data = { "password": (password==="" ? null:password)  };
    
    let formdata = new FormData();
    formdata.append("password", "124abcd");
    
    axios.delete(
        url,
        {
            data : qs.stringify(data),
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
    }).catch((error: AxiosError) => {
        console.log(error.message);
        dispatch(deleteMemberDataFailure());
        dispatch(logoutFailure());
    })
};
export default deleteMemberData;