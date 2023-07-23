import axios, { Axios, AxiosError } from "axios";
import { loginFailure, loginRequest, loginSuccess } from "./slice/loginSlice";
import Config from "react-native-config";
import jwt_decode from "jwt-decode";
import postRefresh from "./postRefresh";
import getMemberData from "./getMemberData";
import { useState } from "react";

async function postLogin(user: FormData, dispatch: any):Promise<any> {
    //Hooks must be top of the component
    //So, useDispatch passed from parameter dispatch
    dispatch(loginRequest());
    const url = `${Config.SPRING_API}/member/login`;
    let token = '';
    await axios.post(url,
        user,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        const auth: string = res.headers.authorization.substring(7);
        const data = jwt_decode(auth);
        token = auth;
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
        dispatch(loginSuccess(loginInfo));
        
        
        //return Promise.resolve(0);
    }).catch((error: AxiosError) => {
        dispatch(loginFailure());
        console.log("login error");
        console.log(error);
        return Promise.reject(1);
    });
    await getMemberData(dispatch, token)
        .then((res) => {
            return Promise.resolve();
        }).catch((err) => {
            return Promise.reject();
        });
    
};
export default postLogin;