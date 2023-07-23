import Config from "react-native-config";
import axios, { AxiosError } from "axios";

async function postPosting(token: string|null, dispatch: any, boardId:number, data:FormData): Promise<any> {
    if (token === null) {
        return new Promise(function (resolve, reject) {
            reject("there is any token");
        })
    }
    const uri = `${Config.SPRING_API}/board/${boardId}/register?boardId=${boardId}`;
    const bearer = `Bearer ${token}`;

    console.log(uri);
    console.log(bearer);
    console.log(data);
    
    await axios.post(
        uri,
        data,
        {
            headers: {
                Authorization: bearer,
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': `${Config.SPRING_API}`,
            },
            transformRequest: (data, header) => {
                return data;
            }
        },
    ).then((res) => {
        console.log("post Posting success");

        return Promise.resolve();
    }).catch((err:AxiosError) => {
        console.log("post Posting err");
        console.log(err);

        return Promise.reject();
    });
};
export default postPosting;