import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../AppInner';
import {PostType} from '../model/Community/Post';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatComponent from '../components/ChatComponent';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getPost from '../model/Community/getPost';
import getReply from '../model/Community/getReply';
import {RootState} from '../model';
import {ReplyType} from '../model/Community/slice/replySlice';
import postReply from '../model/Community/postReply';
import getPreviewPost from '../model/Community/getPreviewPost';
import {AxiosError} from 'axios';
import getPostImage from '../model/Community/getPostImages';

type PostScreenProps = NativeStackScreenProps<RootParamList, 'PostPage'>;

function PostPage({navigation}: PostScreenProps) {
  const [post, setPost] = useState<PostType>();
  const [comment, setComment] = useState<ReplyType[]>([]);

  const [input, setInput] = useState<string>('');

  const keyExtractor = (item: any) => item.id.toString();

  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.login.accessToken);

  const boardId = useSelector(
    (state: RootState) => state.postPreview.boardInfo.boardId,
  );
  const postId = useSelector(
    (state: RootState) => state.postPreview.postInfo.postId,
  );
  const writerId = useSelector(
    (state: RootState) => state.memberData.userData.userId,
  );
  const replyId = useSelector(
    (state: RootState) => state.reply.replyId
  );
  const [postSet, setPostSet] = useState<boolean>(false);
  const [commentSet, setCommentSet] = useState<boolean>(false);
  const postData = useSelector((state: RootState) => state.post);
  const expire = useSelector((state: RootState) => state.login.expTime);
  const commentList: ReplyType[] = useSelector(
    (state: RootState) => state.reply.items,
  );
  useEffect(() => {
    const date = new Date();
    async function func() {
      await getPost(boardId, postId, dispatch)
        .then(() => {
          setPostSet(true);
        })
        .catch(() => {
          setPostSet(false);
        });
      await getReply(boardId, postId, token, dispatch)
        .then(() => {
          setCommentSet(true);
        })
        .catch(() => {
          setCommentSet(false);
        });
    }
    func();
  }, []);
  useEffect(() => {
    setPost(prev => {
      return {
        ...prev,
        postId: postData.postId,
        boardId: postData.boardId,
        title: postData.title,
        content: postData.content,
        modifiedDate: postData.modifiedDate,
        likeCounts: postData.likeCounts,
        viewCounts: postData.viewCounts,
        writerId: postData.writerId,
        imageUuid: postData.imageUuid,
        image: postData.image,
        writerName: postData.writerName,
        modified: postData.modified,
      };
    });
  }, [postData, postSet]);
  useEffect(() => {
    setComment(commentList);
  }, [commentList, commentSet, comment, setComment]);
  const onChange = useCallback(
    (text: string) => {
      setInput(text);
    },
    [input],
  );

  const onCommnet = useCallback(async () => {
    const data: any = {
      content: input,
      writerId: writerId,
      parentCommentId: 0,
      postId: postId,
      commentId: 0,
    };
    await postReply(boardId, postId, token, dispatch, data).then(() => {
      async function func() {
        await getReply(boardId, postId, token, dispatch)
          .then(() => {
            setCommentSet(true);
          })
          .catch(() => {
            setCommentSet(false);
          });
      }
      func();
      setInput('');
    });
  }, [input, boardId, postId, token, dispatch]);

  const reComment = useCallback(async () => {
    console.log('commentId', replyId);
    const data: any = {
      content: input,
      writerId: writerId,
      parentCommentId: replyId,
      postId: postId,
    };
    await postReply(boardId, postId, token, dispatch, data)
      .then(() => {
        async function func() {
          await getReply(boardId, postId, token, dispatch)
            .then(() => {
              setCommentSet(true);
            })
            .catch((err: AxiosError) => {
              setCommentSet(false);
            });
        }
        func();
        setInput('');
      })
      .catch(() => {
        console.log('f');
      });
  }, [input, boardId, replyId, postId, writerId, token, dispatch]);

  return (
    <View style={styles.PostPage}>
      <View>
        <View style={styles.PostNameWrapper}>
          <Text style={styles.PostNameText}>게시판</Text>
        </View>
        <View style={styles.PostInfoWrapper}>
          <Icon name="person-circle-outline" size={40} color="gray" />
          <View style={styles.PostInfoInnerWrapper}>
            <Text style={styles.PostInfoText}>{post?.writerName}</Text>
            <Text style={styles.PostInfoText}>{post?.modifiedDate}</Text>
          </View>
        </View>
        <View style={styles.PostWrapper}>
          <View style={styles.PostInnerWrapper}>
            <Text style={styles.PostTitleText}>{post?.title}</Text>
          </View>
          <Text style={styles.PostDescriptionText}>{post?.content}</Text>
        </View>
      </View>
      <View style={styles.CommentInputWrapper}>
        <TextInput
          style={styles.CommentInput}
          value={input}
          placeholder="comment"
          onChangeText={onChange}
          maxLength={30}
        />
        <Pressable style={styles.CommentButton} onPress={onCommnet}>
          <Icon name="upload" size={18} color="A4A4A4" />
        </Pressable>
      </View>
      <SafeAreaView>
        <View>
          <FlatList
            data={comment}
            renderItem={({item}: any) => (
              <ChatComponent
                name={item.writerName}
                content={item.content}
                id={item.commentId}
                modifiedDate={item.modifiedDate}
                token={token}
                input={input}
                boardId={boardId}
                postId={postId}
                writerId={writerId}
                onPressReChat={reComment}
                onPressOptions={onCommnet}
                onPressRecommend={onCommnet}
              />
            )}
            //keyExtractor = {keyExtractor}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  PostPage: {
    backgroundColor: 'snow',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
  PostNameWrapper: {},
  PostNameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  PostInfoWrapper: {
    paddingVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  PostInfoInnerWrapper: {
    paddingHorizontal: '1%',
  },
  PostInfoText: {
    color: 'black',
    fontWeight: '500',
  },
  PostWrapper: {
    paddingHorizontal: '2.5%',
    paddingVertical: '1%',
  },
  PostInnerWrapper: {
    paddingVertical: '2%',
  },
  PostTitleText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  PostDescriptionText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
  CommentInputWrapper: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  CommentInput: {
    color: 'black',
    flex: 7,
    fontWeight: '600',
  },
  CommentButton: {
    flex: 1,
    marginRight: '2%',
    marginLeft: '2%',
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#D8D8D8',
    borderWidth: 10,
    borderRadius: 10,
    borderColor: '#D8D8D8',
  },
  CommentButtonText: {
    textAlign: 'center',
    color: '#A4A4A4',
    marginLeft: '1%',
    fontWeight: '300',
  },
});

export default PostPage;
