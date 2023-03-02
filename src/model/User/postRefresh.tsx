import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import axios, { AxiosResponse } from 'axios';
import { loginFailure, loginSuccess } from "./slice/loginSlice";

const postRefresh = async () => {
    const refresh = useSelector((state: RootState) => state.login.refreshToken);
    const access = useSelector((state: RootState) => state.login.accessToken);

    const dispatch = useDispatch();

    try {
        const res: AxiosResponse = await axios.post("http://25.15.132.100:8080/api/refershToken",
            {
                refreshToken: refresh,
                accessToken: access
            },//여기가 json형태로 바꾸든, 아니면 헤더에 넣든 해야될듯...
            {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': 'http://25.15.132.100:8080',
                    
                },
            }
        )
        dispatch((loginSuccess(res)));
    } catch (e) {
        dispatch(loginFailure());
        throw e;
    }
};
export default postRefresh;