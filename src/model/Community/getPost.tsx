import axios from "axios";
import { PostType } from "./Post";
import Config from "react-native-config";


async function getPost(postId: number, token: string | null, dispatch: any): Promise<PostType|string>{
    
    const url: string = `${Config.SPRING_API}/`
    
    axios.get(url)
        .then((res) => {
            console.log(res.data);
            const data = {

            }; 
            return new Promise<PostType>(function (resolve, reject) {
                resolve(data);
            })
        })
        .catch((err) => {
            console.log(err);
            
        });
    return new Promise<PostType>(function (resolve, reject) {
        reject("error");
    })
    
}