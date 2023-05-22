import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Keyboard
} from 'react-native';
import Picture from './PictureComponent';
import GenderComponent from './genderComponent';
import ZipCode from './ZipCodeComponent';
import BirthComponent from './BirthComponent';

interface SignUpProps {
  userId : string;
  password : string;
  passwordConfirm : string;
  username : string;
  nickname : string;
  gender : number;
  birth : string;
  email : string;
  phoneNo : string;
  zipcode : string;
  street : string;
  addressDetail : string;
  imageUrl : string;
  imageName : string;
  canGoNext : boolean;
  onChangeUserId : (text : string) => void;
  onChangePassword : (text : string) => void;
  onChangePasswordConfirm : (text : string) => void;
  onChangeUsername : (text : string) => void;
  onChangeNickname : (text : string) => void;
  onChangeGender : (gender : number) => void;
  onChangeBirth : (text : string) => void;
  onChangeEmail : (text : string) => void;
  onChangePhoneNo : (text : string) => void;
  onChangeZipCode : (address : {
    zonecode : string,
    street : string }) => void;
  onChangeAddressDetail : (text : string) => void;
  onChangeImage : (text : string) => void;
}


function SignUp(props : SignUpProps) {
  return (
    <ScrollView style = {styles.SignUpPage}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>아이디</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={props.onChangeUserId}
          placeholder="아이디"
          placeholderTextColor="#666"
          value={props.userId}
          returnKeyType="next"
          clearButtonMode="while-editing"
          blurOnSubmit={false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이름</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangeUsername}
          placeholder = "이름"
          placeholderTextColor = "#666"
          value = {props.username}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>비밀번호</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangePassword}
          placeholder = "비밀번호"
          placeholderTextColor = "#666"
          secureTextEntry = {true}
          value = {props.password}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>비밀번호 확인</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangePasswordConfirm}
          secureTextEntry = {true}
          value = {props.passwordConfirm}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>별명</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangeNickname}
          placeholder = "별명"
          placeholderTextColor = "#666"
          value = {props.nickname}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapperGender}>
        <Text style = {styles.text}>성별</Text>
        <GenderComponent onGenderChange = {props.onChangeGender}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>생년월일</Text>
        <View style = {styles.wrapperComponent}>
          <Text style = {[styles.data, {paddingRight : props.birth ? 15 : 0}]}>생일 : {props.birth} </Text>
          <BirthComponent onBirthSelected={props.onChangeBirth}/>
        </View>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이메일</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangeEmail}
          placeholder= '이메일'
          placeholderTextColor = "#666"
          value = {props.email}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          keyboardType = "email-address"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>전화번호</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangePhoneNo}
          placeholder = "- 없이 입력"
          placeholderTextColor = "#666"
          value = {props.phoneNo}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          keyboardType = "number-pad"
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>우편번호</Text>
        <View style = {styles.wrapperComponent}>
        <Text style={[styles.value, { paddingRight: props.zipcode ? 15 : 0 }]}>우편번호 : {props.zipcode}</Text>
          <ZipCode onAddressSelected={props.onChangeZipCode}/>
        </View>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>주소</Text>
        <Text>주소 : {props.street}</Text>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>상세주소</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {props.onChangeAddressDetail}
          placeholder = "상세주소"
          placeholderTextColor = "#666"
          value = {props.addressDetail}
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          onSubmitEditing={()=>Keyboard.dismiss()}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>사진</Text>
        <Picture onPictureSelected = {props.onChangeImage}/>
        {props.imageUrl ? <Image 
        source = {{uri : props.imageUrl}}
        style = {styles.image}/> : null}
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  SignUpPage : {
    backgroundColor : 'snow',
    paddingVertical : '5%',
  },
  wrapper: {
    paddingLeft : 10,
    marginVertical : 5,
    paddingTop : 5,
  },
  textInput: {
    marginTop : 5,
    marginRight : 30,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor : 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop : 3,
  },
  birthButton : {
    marginLeft : 5,
  },
  zipCode : {
    flexDirection : 'row',
  },
  value : {
    paddingRight : 0,
  },
  photoZone : {
    alignItems : "center",
    justifyContent : "center",
    marginRight : 250,
    height : 30,
    backgroundColor : "gray", 
  },
  photo : {
    fontSize : 15,
  },
  wrapperGender : {
    paddingLeft : 10,
    marginVertical : 5,
    paddingTop : 5,
  },
  wrapperComponent : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  data : {
    color : 'black',
    justifyContent : 'center',
  },
  image : {
    width : 200,
    height : 200,
  }
});

export default SignUp;