import User from "./User";
import axios, { AxiosError } from "axios";
// code
// 200: OK
// 400: id modified
const postUserModify = async (user: User, token:any) => {

    const bearer = `Bearer ${JSON.parse(token)}`;
    console.log(bearer);
    await axios.post("http://25.12.74.132:8080/member/modify",
        user.modifiedData,
        {
            headers: {
                'Content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': "http://25.12.74.132:8080",
                Authorization: bearer,
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