import Config from "react-native-config";
import { PostType } from "./Post";
import axios, { AxiosError } from "axios";

async function postPosting(token: string|null, dispatch: any, boardId:number, data:FormData
): Promise<PostType|string> {
    if (token === null) {
        return new Promise(function (resolve, reject) {
            reject("there is any token");
        })
    }
    const uri = `${Config.SPRING_API}/board/${boardId}/register?boardId=${boardId}`;
    const bearer = `Bearer ${token}`;

    console.log(uri);
    console.log(bearer);
    
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
                console.log(data);
                return data;
            }
        },
        
    ).then((res) => {
        console.log("post Posting success");

        const data: PostType = {
            
        };

        return new Promise<PostType>(function (resolve, reject) {
            resolve(data);
        });

    }).catch((err:AxiosError) => {
        console.log("post Posting err");
        console.log(err);

        return new Promise<string>(function (resolve, reject) {
            reject(err.message);
        });
    });

    return new Promise<string>(function (resolve, reject) {
        reject("nothing occured");
    })
};
export default postPosting;