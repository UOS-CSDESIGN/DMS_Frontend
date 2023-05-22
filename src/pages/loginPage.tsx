import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Login from '../components/LoginComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../model';
import SocialLoginComponent from '../components/SocialLoginComponent';
import deleteMemberData from '../model/User/deleteMemberData';
import CheckBox from '@react-native-community/checkbox';
import ButtonComponent from '../components/ButtonComponent';
import postLogin from '../model/User/postLogin';
import { Dimensions } from 'react-native';

type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function LoginPage({navigation} : LogInScreenProps){
    const [userId, setUserId] = useState<string>('');
    const userIdRef = useRef<TextInput | null>(null);
    const [password, setPassword] = useState<string>('');
    const passwordRef = useRef<TextInput | null>(null);
    const [selected, setSelected] = useState<boolean>(false);
    const onChangeUserId = useCallback((text : string) => {
        setUserId(text);
    },[])
    const onChangePassword = useCallback((text : string) => {
        setPassword(text);
    },[])

    const toAnimal = useCallback(() => {
        navigation.navigate('Animal');
    },[navigation])
    const toSocialSignUp = useCallback(() => {
        navigation.navigate('SocialGoogle');
    },[navigation])
    const toSignUp = useCallback(() => {
        navigation.navigate('SignUpPage');
    },[navigation])
    const toFind = useCallback(() => {
        navigation.navigate('Find');
    },[navigation])

    const [canGoNext,setCanGoNext] = useState<boolean>(false);
    useEffect(() => {
        if(userId && password){
            setCanGoNext(true);
        }
        else{
            setCanGoNext(false);
        }
    },[userId,password])

    const dispatch = useDispatch();
    const token = useSelector((state : RootState) => state.login.accessToken);
    const user = useSelector((state : RootState) => state.memberData.userData);
    const onSubmit = useCallback(async () => {
        const user = new FormData();
        user.append("userId", userId);
        user.append("password", password);
        await postLogin(user, dispatch)
          .then((value) => {
            navigation.navigate("Main");
          })
          .catch((error) => {
            //alert
            navigation.navigate('LoginPage');
          });
      }, [userId, password, dispatch, navigation]);
      
      const onDeleteMember = useCallback(async () => {
        deleteMemberData(dispatch, token, "");
      }, [dispatch, token]);

    return(
        <ScrollView style = {styles.LoginPage}>
          <View style={styles.GreetingWrapper}>
            <Text style={styles.greetingLogo}>반갑습니다 8am입니다.</Text>
          </View>
            <View style = {styles.LoginBoxWrapper}>
              <View style = {styles.LoginBoxInner}>
                <Login
                  onChangeUserId={onChangeUserId}
                  onChangePassword={onChangePassword}
                  userId={userId} 
                  password={password}
                  userIdRef = {userIdRef}
                  passwordRef = {passwordRef}
                  onSubmit={onSubmit}/>
              </View>
              <View style = {styles.loginStateWrapper}>
                <CheckBox
                  disabled={false}
                  value={selected}
                  onValueChange={(value) => setSelected(value)} />
                <Text style={styles.loginStateText}>로그인 상태유지</Text>
              </View>
            </View>
            <View style = {styles.ButtonWrapper}>
              <ButtonComponent
              canGoNext = {canGoNext} 
              onSubmit={onSubmit}
              buttonName='로그인'/>
            </View>
            <View style = {styles.SignUpAndFindWrapper}>
                <View>
                  <Pressable onPress = {toSignUp}>
                    <Text style = {styles.signUpAndFindText}>회원가입</Text>
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress = {toFind}>
                    <Text style = {styles.signUpAndFindText}>아이디 · 비밀번호 찾기</Text>
                  </Pressable>
                </View>
            </View>
            <View style = {styles.SocialLoginWrapper}>
              <SocialLoginComponent
                toAnimal = {toAnimal}
                toSignup = {toSocialSignUp}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    LoginPage : {
        flex : 1,
        backgroundColor : 'snow',
        paddingTop : height/20,
        paddingBottom : height/4,
    },
    GreetingWrapper : {
        marginTop : height/20,
        flex : 1,
        alignItems : "center",
    },
    greetingLogo : {
        fontSize : 20,
        fontWeight : "500",
        color : 'black',
    },
    LoginBoxWrapper : {
        flex : 3,
    },
    LoginBoxInner : {
        flex : 3
    },
    loginStateWrapper : {
        marginHorizontal : width/26,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
    },
    loginStateText : {
        color : 'black',
    },
    ButtonWrapper : {
        flex : 1,
        marginHorizontal : width/30,
    },
    SignUpAndFindWrapper : {
        flex : 0.4,
        flexDirection : "row",
        justifyContent : 'space-between',
        marginHorizontal : width/10,
    },
    signUpAndFindText : {
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : 'center',
    },
    SocialLoginWrapper : {
        flex : 0.8,
    },
})

export default LoginPage;