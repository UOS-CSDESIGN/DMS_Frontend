import Config from "react-native-config";
import Post from "./Post";
import axios from "axios";

async function postPosting(token: string, dispatch: any,
    //post: Post
    data:FormData
): Promise<any> {
    
    console.log(token);
    const uri = `${Config.SPRING_API}/board/1/register`;
    const bearer = `bearer ${token}`;
    console.log(uri);
    console.log(bearer);
    
    await axios.post(
        uri,
        data,
        {
            headers: {
                Authorization: bearer,
            },
            transformRequest: (data, header) => {
                return data;
            }
        },
        
    ).then((res) => {
        console.log("post Posting success");

        return Promise.resolve();
    }).catch((err) => {
        console.log("post Posting err");
        console.log(err);

        return Promise.reject();
    });
}
export default postPosting;