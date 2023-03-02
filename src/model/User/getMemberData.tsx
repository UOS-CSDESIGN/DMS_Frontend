import axios from "axios";
import { memberDataFailure, memberDataRequest, memberDataSuccess } from "./slice/memberDataSlice";

const getMemberData = async (dispatch:any, token:any) => {
    dispatch(memberDataRequest());
    await axios.get("http://25.12.74.132:8080/api/refreshToken",
        {
            headers: {
                'Authorization': 'Bearer' + token
            },
        }
    ).then((res) => {
        dispatch(memberDataSuccess(res));
    }).catch((error) => {
        dispatch(memberDataFailure());
        throw error;
    });
};

export default getMemberData;