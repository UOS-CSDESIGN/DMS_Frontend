import User from "./User";
import axios, { AxiosError } from "axios";
import Config from "react-native-config";
// code
// 200: OK
// 400: id modified
const postUserModify = async (user: User, token:any) => {

    const bearer = `Bearer ${JSON.parse(token)}`;
    console.log(user);
    const url = `${Config.SPRING_API}/member/modify`
    await axios.post(url,
        user.modifiedData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': "http://25.14.225.33:8080",
                Authorization: bearer,
            },
            transformRequest: (data, headers) => {
                return data;
            },
        }
    ).then((res) => {
        console.log("success modify data");
    }).catch((error:AxiosError) => {
        if (error.status === 400) {
            console.log("modified id");
        } else {
            console.log("another error");
            console.log(error);
            console.log(user.modifiedData);
        }
    })
}
export default postUserModify;