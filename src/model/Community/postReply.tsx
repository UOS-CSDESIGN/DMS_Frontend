import PostReply from './PostReply';
import COnfig from 'react-native-config';
import axios from 'axios';

async function postReply (reply:PostReply, token:string, dispatch:any):Promise<any>{

    const bearer = `Bearer ${JSON.parse(token)}`;
    const url = `${COnfig.SPRING_API}/`;

    await axios.post(url,
        reply.jsonData,
        {
            headers: {
                Authorization: bearer,
            }
        }).then((res) => {
            console.log("post reply success");

            return Promise.resolve();
        }).catch((err) => {
            console.log("post reply error");

            return Promise.reject();
        });
};
export default postReply;