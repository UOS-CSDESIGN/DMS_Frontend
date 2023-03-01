import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import axios from "axios";
import { memberDataFailure, memberDataRequest, memberDataSuccess } from "./slice/memberDataSlice";

const getMemberData = async () => {
    const token = useSelector((state: RootState) => state.login.accessToken);
    const dispatch = useDispatch();
    dispatch(memberDataRequest());
    try {
        const res: AxiosResponse = await axios.get("http://25.15.132.100:8080/api/refreshToken",
            {
                headers: {
                    'Authorization': 'Bearer' + token
                },
            }
        )
        dispatch(memberDataSuccess(res));
    } catch (e) {
        dispatch(memberDataFailure());
        throw e;
    }
};

export default getMemberData;