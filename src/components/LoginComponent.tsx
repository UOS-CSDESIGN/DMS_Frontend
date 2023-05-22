import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView
} from 'react-native';

interface login{
  onChangeUserId: (text: string) => void
  onChangePassword: (text: string) => void 
  userId : string;
  password : string;
  userIdRef : any;
  passwordRef : any;
  onSubmit : () => void;
}
function Login(props : login){
  return (
    <View style={styles.loginPage}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={props.onChangeUserId}
          placeholder="아이디"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          textContentType="emailAddress"
          value={props.userId}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref = {props.userIdRef}
          onSubmitEditing={() => props.passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          onChangeText={props.onChangePassword}
          value={props.password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          ref={props.passwordRef}
          returnKeyType="send"
          clearButtonMode="while-editing"
          onSubmitEditing={props.onSubmit}
          blurOnSubmit={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPage : {
    color : "snow",
    paddingVertical : '5%',
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
})

export default Login;
