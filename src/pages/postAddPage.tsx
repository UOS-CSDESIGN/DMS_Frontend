import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import { useCallback, useState } from 'react';

type PostAddScreenProps = NativeStackScreenProps<RootStackParamList, 'PostAddPage'>

function PostAddPage({navigation} : PostAddScreenProps){
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onSubmit = useCallback(() => {
        //데이터 전송
    },[])

    const onChangeTitle = useCallback((text : string) => {
        setTitle(text);
    },[title]);

    const onChangeContent = useCallback((text : string) => {
        setContent(text);
    },[content])

    const toInstruction = useCallback(()=> {
        navigation.navigate("InstructionPage");
    },[navigation])
    return(
        <View style = {styles.PostAddPage}>
            <View style = {styles.PostAddTopWrapper}>
                <Text style = {styles.PostAddTopText}>글쓰기</Text>
                <Pressable
                 style = {styles.PostAddButton}
                 onPress = {onSubmit}>
                    <Text style = {styles.SubmitText}>완료</Text>
                </Pressable>
            </View>
            <View style = {styles.PostAddTitleWrapper}>
                <TextInput
                    style = {styles.TitleTextInput}
                    placeholder = '제목'
                    value = {title}
                    onChangeText = {onChangeTitle}
                    maxLength = {20}
                    />
            </View>
            <View style = {styles.PostAddContentWrapper}>
                <TextInput
                    style = {styles.ContentTextInput}
                    placeholder = '내용을 입력하세요'
                    value = {content}
                    onChangeText = {onChangeContent}
                    keyboardType = 'email-address'
                    multiline/>
            </View>
            <View style = {styles.PostInstructionWrapper}>
                <View>
                    <Pressable
                     onPress = {toInstruction}
                     style = {styles.InstructionButtonWrapper}>
                        <Text style = {styles.InstructionButton}>커뮤니티 이용규칙 전체 보기</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostAddPage : {
        paddingHorizontal : '3%',
        paddingVertical : '5%',
    },
    PostAddTopWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    PostAddTopText : {
        color : 'black',
        fontWeight : '600',
        fontSize : 16,
    },
    PostAddButton : {
        marginRight : '2%',
        backgroundColor : 'gray',
        paddingVertical : '1%',
        paddingHorizontal : '2%',
        borderWidth : 1,
        borderRadius : 13,
        borderColor : 'gray',
    },
    SubmitText : {
        color : 'black',
        fontWeight : '600',
    },
    PostAddTitleWrapper : {
        borderBottomWidth : 1,

    },
    PostAddContentWrapper : {

    },
    TitleTextInput : {

    },
    ContentTextInput : {

    },
    PostInstructionWrapper : {

    },
    InstructionButtonWrapper : {
        borderWidth : 1,
        borderRadius : 10,
        marginLeft : '40%',
    },
    InstructionButton : {
        textAlign : 'center',
        justifyContent : 'center',
        color : 'black',
    }
})

export default PostAddPage;