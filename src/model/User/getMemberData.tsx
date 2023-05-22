import axios from "axios";
import { memberDataFailure, memberDataRequest, memberDataSuccess } from "./slice/memberDataSlice";
import Config from "react-native-config";

//get signed member data
const getMemberData = async (dispatch:any, token:any) => {
    dispatch(memberDataRequest());

    const bearer = `Bearer ${JSON.parse(token)}`;

    const url = `${Config.SPRING_API}/member/getMemberData`;
    await axios.get(
        url,
        {
            headers: {
                //Authorization key value must be assigned literal
                Authorization: bearer,
            },
        }
    ).then((res) => {
        dispatch(memberDataSuccess(res.data));
        console.log(res.data);
        console.log('success get member data');
    }).catch((error) => {
        dispatch(memberDataFailure());
        console.log("failed get member data")
        throw error;
    });
};

export default getMemberData;