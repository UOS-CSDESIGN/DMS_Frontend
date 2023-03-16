import axios from "axios";
import { memberDataFailure, memberDataRequest, memberDataSuccess } from "./slice/memberDataSlice";

//get signed member data
const getMemberData = async (dispatch:any, token:any) => {
    dispatch(memberDataRequest());
    console.log(`Bearer : ${token}`);
    await axios.get("http://25.12.74.132:8080/member/getMemberData",
        {
            headers: {
                //Authorization key value must be assigned literal
                Authorization: `Bearer ${token}`
            },
        }
    ).then((res) => {
        dispatch(memberDataSuccess(res));
        console.log('success get member data');
    }).catch((error) => {
        dispatch(memberDataFailure());
        console.log("failed get member data")
        throw error;
    });
};

export default getMemberData;