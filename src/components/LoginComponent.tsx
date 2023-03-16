import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Linking
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import axios, {AxiosError} from 'axios';
import SignUp from './SignUpComponent';
import CheckBox from '@react-native-community/checkbox';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import User from '../model/User/User';
import postLogin from '../model/User/postLogin';
import { useDispatch, useSelector } from 'react-redux';
import getMemberData from '../model/User/getMemberData';
import { RootState } from '../model';
import SocialLoginComponent from './SocialLoginComponent';


type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login({navigation}: LogInScreenProps){
    const [loading ,setLoading] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [selected, isSelected] = useState<boolean>(false);

  const dispatch = useDispatch();


    const userIdRef = useRef<TextInput | null>(null);
    const passwordRef = useRef<TextInput | null>(null);

    const canGoNext = userId && password;

    const onChangeUserId = useCallback((text: string)=> {
      setUserId(text.trim());
    }, []);
    const onChangePassword = useCallback((text: string) => {
      setPassword(text.trim());
    }, []);

    const onSubmit = useCallback(() => {
      const user = new FormData();
      user.append("userId", userId);
      user.append("password", password);
      postLogin(user, dispatch);
    },[userId, password, dispatch])
      
  const token = useSelector((state: RootState) => state.login.accessToken);
  const user = useSelector((state: RootState) => state.memberData.userData);
    const onSubmitToken = useCallback(()=>{
      getMemberData(dispatch, token);
    },[dispatch, token]);
    
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);  

  const toFind = useCallback(() => {
    navigation.navigate('Find');
  }, [navigation]);
  const toAnimal = useCallback(() => {
    navigation.navigate('Animal');
  }, [navigation]);
  return (
    <View style={styles.loginPage}>
      <View style={styles.greeting}>
        <Text style={styles.greetingLogo}>반갑습니다 8am입니다.</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeUserId}
          placeholder="아이디"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          value={userId}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={userIdRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.loginStateWrapper}>
        <CheckBox
          disabled={false}
          value={selected}
          onValueChange={(newValue) => isSelected(newValue)} />
        <Text style={styles.loginState}>로그인 상태유지</Text>
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          style={
            canGoNext
              ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
              : styles.loginButton
          }
          disabled={!canGoNext || loading}
          onPress={onSubmit}>
          {loading ? (<ActivityIndicator color="white" />) :
            (<Text style={styles.loginButtonText}>로그인</Text>)}
        </Pressable>
      </View>
      <View style={styles.signUpAndFind}>
        <Pressable onPress={}>
          <Text style={styles.signUpAndFindText}>회원가입</Text>
        </Pressable>
        <Pressable onPress={toFind}>
          <Text style={styles.signUpAndFindText}>아이디 · 비밀번호 찾기</Text>
        </Pressable>
      </View>
      
        <SocialLoginComponent />
      
      <View style={styles.buttonZone}>
        <Pressable style={styles.loginButton}
          onPress={onSubmitToken}>
          <Text style={styles.loginButtonText}>버튼</Text>
        </Pressable>
      </View>
      <View style={styles.buttonZone}>
        <Pressable style={styles.loginButton}
          onPress={toAnimal}>
          <Text style={styles.loginButtonText}>애완견</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPage : {
    color : "snow",
    paddingVertical : '5%',
  },
  greeting : {
    paddingTop : 10,
    paddingBottom : 25,
    alignItems : "center",
  },
  greetingLogo : {
    fontSize : 20,
    fontWeight : "500",
    color : 'black',
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor : 'white',
  },
  inputWrapper: {
    marginHorizontal : 20,
    padding : 1,
  },
  loginStateWrapper : {
    paddingHorizontal : 13,
    flexDirection : 'row',
  },
  loginState : {
    color : 'black',
    paddingTop : 6,
    paddingHorizontal : 3,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 145,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
    fontSize : 14,
    paddingHorziontal : 100,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
  },
  signUpAndFind : {
    marginTop : 10,
    flexDirection : 'row',
    alignItems : "center",
    justifyContent : 'center',
  },
  signUpAndFindText : {
    fontSize : 12,
    paddingHorizontal : 15,
    color : 'gray', 
  },
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
})

export default Login;
