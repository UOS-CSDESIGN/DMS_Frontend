import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../AppInner";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCallback, useState } from "react";

type CommunityMyPageScreenProps = NativeStackScreenProps<RootParamList, 'CommunityMyPage'>

function CommunityMyPage({navigation} : CommunityMyPageScreenProps){
    const [userData, setUserData] = useState<string[]>([]);
    const [userId, setUserId] = useState<string>('lsj001018');
    const [username, setUsername] = useState<string>('이승주');
    const [nickname, setNickname] = useState<string>('허주');

    const toChangeName = useCallback(() => {

    },[navigation])
    const toRestrict = useCallback(() => {

    },[navigation])
    const toCommunityInstruction = useCallback(() => {
        navigation.navigate('InstructionPage');
    },[navigation])

    return(
        <View style = {styles.CommunityMyPageWrapper}>
            <View style ={styles.CommunityPageIconWrapper}>
                <View style = {styles.UserIconWrapper}>
                    <Icon name = "person-sharp" size = {30} color = "skyblue"/>
                </View>
                <View style = {styles.UserDescriptionWrapper}>
                    <Text>{userId}</Text>
                    <Text>{username}/{nickname}</Text>
                </View>
            </View>
            <View style = {styles.CommunityOptionWrapper}>
                <View style = {styles.CommunityOptionInnerWrapper}>
                    <Text style = {styles.CommunityOptionText}>커뮤니티 옵션</Text>
                    <Pressable
                     style = {styles.CommunityOptionButton}
                     onPress = {toChangeName}>
                        <Text style = {styles.OptionText}>닉네임 변경</Text>
                    </Pressable>
                    <Pressable
                     style = {styles.CommunityOptionButton}
                     onPress = {toRestrict}>
                        <Text style = {styles.OptionText}>이용 제한 내역</Text>
                    </Pressable>
                    <Pressable
                     style = {styles.CommunityOptionButton}
                     onPress = {toCommunityInstruction}>
                        <Text style = {styles.OptionText}>커뮤니티 이용규칙</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CommunityMyPageWrapper : {
        backgroundColor : 'snow',
    },
    CommunityPageIconWrapper : {
        borderWidth : 1,
        marginHorizontal : '4%',
        marginBottom : '5%',
        paddingVertical : '3%',
        borderRadius : 10,
        flexDirection : 'row',
    },
    UserIconWrapper : {
        paddingHorizontal : '2%',
        paddingRight : '4%',
        justifyContent : 'center',
    },
    UserDescriptionWrapper : {
        alignItems : 'center',
    },
    CommunityOptionWrapper : {
        borderWidth : 1,
        marginHorizontal : '4%',
        paddingVertical : '3%',
        borderRadius : 10,   
    },
    CommunityOptionInnerWrapper : {
        paddingHorizontal : '2%',
    },
    CommunityOptionText : {
        color : 'black',
        fontWeight : '600',
        fontSize : 16,
    },
    OptionText : {
        color : 'black',
    },
    CommunityOptionButton : {
        paddingHorizontal : '1%',
        marginVertical : '1%',
    }
})

export default CommunityMyPage;