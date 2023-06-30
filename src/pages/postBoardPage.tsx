import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import {View, Text, Pressable, StyleSheet, SafeAreaView, FlatList} from "react-native"
import { useCallback } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { postType } from "../model/Community/Post";
import PostAddButtonComponent from "../components/PostAddButtonComponent";

type PostBoardScreenProps = NativeStackScreenProps<RootStackParamList, 'PostBoardPage'>


function PostBoardPage({navigation} : PostBoardScreenProps){
    const boardData : postType = []; //게시판 data 여기로 가져오기
    const data = [
        { id : 1, title : '안녕', content : '반가워'},
        { id : 2, title : '뭐해', content : '아무것도 안해'},
        { id : 3, title : '그래', content : '그래'},
        { id : 4, title : '오늘 뭐해', content : '글쎄'},
    ]

    const renderItem = ({item} : any) => (
        <Pressable onPress = {toPost}>
            <View style = {styles.PostDataWrapper}>
                <Text style = {styles.PostDataTitle}>{item.title}</Text>
                <Text style = {styles.PostDataText}>{item.content}</Text>
                <View style = {styles.IconAndCountWrapper}>
                    <Icon name = 'chatbox' size = {18}/>
                    <Text style = {styles.CountText}>3</Text>
                </View>
            </View>
        </Pressable>
    )
    const toPost = useCallback(() => {
        navigation.navigate('PostPage')
    },[navigation])

    const keyExtractor = (item : any) => item.id.toString();
    const onPress = useCallback(() => {
        navigation.navigate("PostAddPage")
    },[])

    return(
        <SafeAreaView style = {styles.PostBoardPage}>
            <View style = {styles.PostBoardNameWrapper}>
                <Text style = {styles.PostBoardNameText}>게시판</Text>
            </View>
            <View style = {styles.PostWrapper}>
                <FlatList
                    data = {data}
                    renderItem = {renderItem}
                    keyExtractor = {keyExtractor}
                />
            </View>
            <View>
                <PostAddButtonComponent onPress = {onPress}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    PostBoardPage : {
        backgroundColor : 'snow',
        paddingVertical : '5%',
        paddingHorizontal : '3%',
    },
    PostBoardNameWrapper : {
        
    },
    PostBoardNameText : {
        color : 'black',
        fontSize : 16,
        fontWeight : '600'
    },
    PostWrapper : {

    },
    PostDataWrapper : {
        borderBottomWidth : 1,
        paddingVertical : '1%',
    },
    PostDataTitle : {
        color : 'black',
        fontWeight : '600',
        fontSize : 15,
    },
    PostDataText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 13,
    },
    IconAndCountWrapper : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    CountText : {
        paddingHorizontal : '2%',
        paddingBottom : '0.8%'
    }
})

export default PostBoardPage;