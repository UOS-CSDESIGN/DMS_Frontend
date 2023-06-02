import Config from "react-native-config";
import Post from "./Post";
import axios from "axios";

async function postPosting(token: string, dispatch: any, post: Post):Promise<any> {
    
    const uri = `${Config.SPRING_API}/`;
    const bearer = `bearer ${JSON.parse(token)}`;

    await axios.post(
        uri,
        post.postItem,
        {
            headers: {
                Authorization: bearer,
            }
        }
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