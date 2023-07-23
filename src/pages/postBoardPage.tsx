import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../AppInner';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {PreviewType} from '../model/Community/Post';
import PostAddButtonComponent from '../components/PostAddButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../model';
import getPreviewPost from '../model/Community/getPreviewPost';
import {handlingPostPress} from '../model/Community/slice/postPreviewSlice';
import { useIsFocused } from '@react-navigation/native';

type PostBoardScreenProps = NativeStackScreenProps<
  RootParamList,
  'PostBoardPage'
>;

function PostBoardPage({navigation}: PostBoardScreenProps) {
  //게시판 data postData로 가져오기
  const [postData, setPostData] = useState<PreviewType[]>([]);

  const token = useSelector((state: RootState) => state.login.accessToken);
  const boardId = useSelector(
    (state: RootState) => state.postPreview.boardInfo.boardId,
  );
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  const [isSet, setIsSet] = useState<boolean>(false);
  const postList: PreviewType[] = useSelector(
    (state: RootState) => state.postPreview.items,
  );
  useEffect(() => {
    setPostData([]);
    async function func() {
      await getPreviewPost(boardId, token, dispatch)
        .then(() => {
          setIsSet(true);
        })
        .catch(() => {
          setIsSet(false);
        });
    }
    func();
  }, []);

  useEffect(()=>{
    setPostData([]);
    async function func() {
      await getPreviewPost(boardId, token, dispatch)
        .then(() => {
          setIsSet(true);
        })
        .catch(() => {
          setIsSet(false);
        });
    }
    func();
  },[isFocused]);

  useEffect(() => {
    setPostData(postList);
  }, [postList, postData, setPostData]);

  const renderItem = ({item}: any) => (
    <Pressable
      onPress={() => {
        dispatch(
          handlingPostPress({
            id: item.postId,
            name: item.title,
          }),
        );
        toPost();
      }}>
      <View style={styles.PostDataWrapper}>
        <Text style={styles.PostDataTitle}>{item.title}</Text>
        <Text style={styles.PostDataText}>{item.content}</Text>
        <View style={styles.IconAndCountWrapper}>
          <View style={styles.CountWrapper}>
            <Icon name="thumbs-up-outline" size={18} color="red" />
            <Text style={styles.CountText}>{item.likeCounts}</Text>
          </View>
          <View style={styles.CountWrapper}>
            <Icon name="chatbox" size={18} />
            <Text style={styles.CountText}>{item.commentCount}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const toPost = useCallback(() => {
    navigation.navigate('PostPage');
  }, [navigation]);

  const keyExtractor = (item: any) => item.id.toString();
  const onPress = useCallback(() => {
    navigation.navigate('PostAddPage');
  }, []);

  return (
    <SafeAreaView style={styles.PostBoardPage}>
      <View style={styles.PostBoardNameWrapper}>
        <Text style={styles.PostBoardNameText}>게시판</Text>
      </View>
      <View style={styles.PostWrapper}>
        <FlatList
          data={postData}
          renderItem={renderItem}
          onEndReachedThreshold={0.01}
          //keyExtractor = {keyExtractor}
        />
      </View>
      <View>
        <PostAddButtonComponent onPress={onPress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  PostBoardPage: {
    backgroundColor: 'snow',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
  PostBoardNameWrapper: {},
  PostBoardNameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  PostWrapper: {},
  PostDataWrapper: {
    borderBottomWidth: 1,
    paddingVertical: '1%',
  },
  PostDataTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  PostDataText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 13,
  },
  IconAndCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CountText: {
    paddingHorizontal: '2%',
    paddingBottom: '0.8%',
  },
});

export default PostBoardPage;
