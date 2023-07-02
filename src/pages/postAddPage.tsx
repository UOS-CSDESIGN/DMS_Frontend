import {View, Text, StyleSheet, Pressable, TextInput, Image} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import { useCallback, useState } from 'react';
import Picture from '../components/PictureComponent';

type PostAddScreenProps = NativeStackScreenProps<RootStackParamList, 'PostAddPage'>

function PostAddPage({navigation} : PostAddScreenProps){
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [picture, setPicture] = useState<string[]>([]);

    const onSubmit = useCallback(() => {
        //title이랑 content에 게시판 ID, 게시물 ID 추가해서 보내기
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

    const onChangePicture = useCallback((picture : string) => {
        setPicture(prevPicture => [...prevPicture, picture]);
    },[picture])
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
                <View style = {styles.PostAddContentInnerWrapper}>
                    <TextInput
                        style = {styles.ContentTextInput}
                        placeholder = '내용을 입력하세요'
                        value = {content}
                        onChangeText = {onChangeContent}
                        keyboardType = 'email-address'
                        multiline/>
                </View>
                {picture ?
                    <View style = {styles.PictureWrapper}>
                        {picture.map((image : string, index : number) => (
                            <Image key = {index} source = {{uri : image}} style = {styles.image}/> 
                        ))}
                    </View> : null}
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
            <View>
                <Picture onPictureSelected={onChangePicture}/>
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
    PostAddContentInnerWrapper : {

    },
    PictureWrapper : {

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
    },
    image : {
        width : '40%',
        height : '60%'
    }
})

export default PostAddPage;