import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../AppInner";
import { useCallback, useState } from "react";
import { GoogleSignin, statusCodes, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import Config from "react-native-config";
import deleteMemberData from "../model/User/deleteMemberData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";

function Withdrawl(props : any){
    const [password, setPassword] = useState<string>('');
    const [data, setData] = useState<any>(null);

    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.login.accessToken);
    const idtoken = useSelector((state: RootState) => state.login.idToken);
    //isSocial true -> google signin button, false-> password input
    const isSocial = useSelector((state: RootState) => state.memberData.userData.isSocial);

    const onChangePassword = useCallback((text : string) => {
        setPassword(text);
        setData(password);
    }, [password]);
    const onSubmit = useCallback(() => {
        setData("asdf1234");
        console.log(data);
        console.log(password);
        deleteMemberData(dispatch, token, data, isSocial);
    }, [token, dispatch, data, password,idtoken]);  

    

    return(
        <View style = {styles.screen}>
            <View style = {styles.wrapperView}>
                <Text style = {styles.topicText}>회원탈퇴 안내</Text>
                <Text style = {styles.descriptionText}>
                    저희 서비스를 이용해주셔서 감사합니다. 불편하셨던 점이나 불만사항을 알려주시면
                    적극적으로 반영해서 고객님의 불편함을 해결해 드리려 노력하겠습니다.
                </Text>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.topicText}>
                    회원탈퇴 시 고려사항을 숙지해 주시기 바랍니다.
                </Text>
            </View>
            {props.password ? <View style = {styles.wrapperView}>
                <Text style = {styles.topicText}>
                    비밀번호를 입력하세요
                </Text>
            </View> : null}
           {props.password ?<View> 
                <TextInput
                 style = {styles.textInput}
                 placeholder = "비밀번호"
                 onChangeText = {onChangePassword}/>
            </View> : null
            }
            <View style = {styles.wrapperView}>
                <Text style = {styles.topicText}>
                    정말로 회원을 탈퇴하시겠습니까?
                </Text>
            </View>
            <View style = {styles.wrapperView} >
                <View style = {styles.buttonZone}>
                    <Pressable style = {styles.buttonZoneYes} onPress = {onSubmit}>
                        <Text style = {styles.buttonYes}>예</Text>
                    </Pressable>
                    <Pressable style = {styles.buttonZoneNo}>
                        <Text style = {styles.buttonNo}>아니오</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    socialLoginButton : {
        marginTop : 20,
        paddingHorizontal : 20,
        justifyContent : "center",
        alignItems : "center",
      },
      googleButton : {
        width : 312,
        height : 48,
      },
    screen : {
        marginHorizontal : 15,
    },
    wrapperView : {
        paddingVertical : 10,
    },
    topicText : {
        color : 'black',
        fontSize : 18,
        fontWeight : '600',
    },
    descriptionText : {
        fontSize : 14,
        
    },
    textInput : {

    },
    wrapper : {
        flexDirection : 'row',
    },
    buttonZone : {
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal : 80,
    },
    buttonZoneYes : {
        backgroundColor : 'red',
        borderBottomColor : 'black',
        borderRadius : 10,
    },
    buttonZoneNo : {
        backgroundColor : 'gainsboro',
        borderBottomColor : 'black',
        borderRadius : 10,
    },
    buttonYes : {
        paddingHorizontal : 20,
        fontSize : 18,
        color : 'black',
    },
    buttonNo : {
        paddingHorizontal : 20,
        fontSize : 18,
        color : 'black',
    }
})

export default Withdrawl;