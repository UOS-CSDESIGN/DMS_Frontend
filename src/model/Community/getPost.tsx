import axios from 'axios';
import {PostType} from './Post';
import Config from 'react-native-config';
import {getPostItemSuccess} from './slice/postSlice';
import getPostImage from './getPostImages';

async function getPost(
  boardId: number,
  postId: number,
  dispatch: any,
): Promise<any> {
  const url: string = `${Config.SPRING_API}/board/${boardId}/read?boardId=${boardId}&postId=${postId}`;

  const getImage = async (uuid: string) => {
    await getPostImage(dispatch, uuid)
      .then(res => {
        console.log('get images', res.data);
      })
      .catch(() => {
        console.log('failed get images');
      });
  };
  if (boardId === 0) {
    return Promise.reject();
  }
  if (postId === 0) {
    return Promise.reject();
  }
  await axios.get(url)
    .then((res) => {
      dispatch(getPostItemSuccess(res.data));
      const uuids:string[] = res.data.imageUuid;
      uuids.map((item)=>{
        getImage(item);
      });
      return Promise.resolve();
    })
    .catch(err => {
      console.log(err);

      return Promise.reject();
    });
}

export default getPost;
