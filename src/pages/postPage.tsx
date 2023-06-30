import { View, Text, StyleSheet} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import Post from '../model/Community/Post';
import Icon from 'react-native-vector-icons/Ionicons';

type PostScreenProps = NativeStackScreenProps<RootStackParamList, 'PostPage'>


function PostPage({navigation} : PostScreenProps){
    const postData : Post = [];
    return(
        <View style = {styles.PostPage}>
            <View>
                <View style = {styles.PostNameWrapper}>
                    <Text style = {styles.PostNameText}>게시판</Text>
                </View>
                <View style = {styles.PostInfoWrapper}>
                    <Icon name = "person-circle-outline" size = {40} color = "gray"/>
                    <View style = {styles.PostInfoInnerWrapper}>
                        <Text style = {styles.PostInfoText}>이승주</Text>
                        <Text style = {styles.PostInfoText}>2023/06/30 18:10</Text>
                    </View>
                </View>
                <View style = {styles.PostWrapper}>
                    <View style = {styles.PostInnerWrapper}>
                        <Text style = {styles.PostTitleText}>치킨 뭐 먹을까</Text>
                    </View>
                    <Text style = {styles.PostDescriptionText}>간장치킨 vs 후라이드</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostPage : {
        backgroundColor : 'snow',
        paddingVertical : '5%',
        paddingHorizontal : '3%',
    },
    PostNameWrapper : {
        
    },
    PostNameText : {
        color : 'black',
        fontSize : 16,
        fontWeight : '600'
    },
    PostInfoWrapper : {
        paddingVertical : '3%',
        flexDirection : 'row',
        alignItems : 'center',
    },
    PostInfoInnerWrapper : {
        paddingHorizontal : '1%',
    },
    PostInfoText : {
        color : 'black',
        fontWeight : '500',
    },
    PostWrapper : {
        paddingHorizontal : '2.5%',
        paddingVertical : '1%',
    },
    PostInnerWrapper : {
        paddingVertical : '2%',
    },
    PostTitleText : {
        color : 'black',
        fontWeight : '600',
        fontSize : 16,
    },
    PostDescriptionText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 14,
    }
})

export default PostPage;