import axios from "axios";
import { memberDataFailure, memberDataRequest, memberDataSuccess } from "./slice/memberDataSlice";
import Config from "react-native-config";

//get signed member data
const getMemberData = async (dispatch: any, token: any): Promise<any> => {
    
    dispatch(memberDataRequest());
    let bearer = '';
    if (typeof (token) === 'string') {
        bearer = `Bearer ${token}`;
    } else {
        bearer = `Bearer ${JSON.parse(token)}`;
    }

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
        console.log(res.data);
        dispatch(memberDataSuccess(res.data));
        console.log('success get member data');
        
        return Promise.resolve();
    }).catch((error) => {
        dispatch(memberDataFailure());
        console.log("failed get member data")
        
        return Promise.reject();
    });
};

export default getMemberData;