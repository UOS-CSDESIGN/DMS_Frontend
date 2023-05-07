import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import Picture from './PictureComponent';
import User from '../model/User/User';
import GenderComponent from './genderComponent';
import { useDispatch } from 'react-redux';
import postSignup from '../model/User/postSignup';
import ZipCode from './ZipCodeComponent';
import BirthComponent from './BirthComponent';


type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;


function SignUp({navigation}: SignUpScreenProps) {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordconfirm, setPasswordconfirm] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<number>(0);
  const [birth, setBirth] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [isSocial, setIsSocial] = useState<boolean>(false);
  const [zipcode, setZipcode] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [addressDetail, setAddressDetail] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageName, setImageName] = useState<string>('');

  const dispatch = useDispatch();
  

  const onChangeUserId = useCallback((text:string) => {
    setUserId(text.trim());
  }, []);
  const onChangePassword = useCallback((text:string) => {
    setPassword(text.trim());
  }, []);
  const onChangePasswordConfirm = useCallback((text:string) =>{
    setPasswordconfirm(text.trim());
  }, []);
  const onChangeUsername = useCallback((text : string) => {
    setUsername(text.trim());
  }, []);
  const onChangeNickname = useCallback((text:string) => {
    setNickname(text.trim());
  }, []);
  const onChangeGender = useCallback((gender : number) =>{
    setGender(gender);
    console.log(gender);
  }, [])
  const onChangeBirth = useCallback((date : string) => {
    setBirth(date);
    console.log(birth);
  }, []);
  const onChangeEmail = useCallback((text:string) => {
    setEmail(text.trim());
  }, []);
  const onChangePhoneNo = useCallback((text:string)=> {
    setPhoneNo(text.trim());
  }, []);
  const onChangeZipCode = useCallback((address : {zonecode : string, street : string})=> {
    setZipcode(address.zonecode);
    setStreet(address.street);
  }, [zipcode, street]);
  const onChangeDetailAddress = useCallback((text:string)=>{
    setAddressDetail(text.trim())
  }, []);
  const onChangeImage = useCallback(async() => async (selectedImage : any)=>{
    if (selectedImage!==null) {
      setImageUrl(selectedImage);
      if(selectedImage){
        await setImageName(imageUrl.split("/").pop()||'');
      }
    } else {
      console.log('Selected image does not have assets');
    }
  },[imageUrl, imageName]);
  useEffect(() => {
    setZipcode(zipcode);
    setImageName(imageName);
    console.log(imageName);
  }, [imageName]);

  const [token, setToken] = useState('');
  const toLogin = async () => {
    navigation.navigate('Login');
  }
  const onSubmit = useCallback(async () => { 
    const user  = new User(
      userId, username, password, nickname, gender, birth, email, phoneNo, isSocial, "",zipcode, 
      street, addressDetail, imageUrl, imageName
    );
    console.log(imageName);
    postSignup(user, dispatch);
  }, [userId, username, password, nickname, gender, birth, email, phoneNo, zipcode, street, addressDetail, imageUrl, imageName]);

  const canGoNext = userId && password && nickname && email && phoneNo && zipcode && street && addressDetail;
  return (
    <ScrollView style = {styles.SignUpPage}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>아이디</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeUserId}
          placeholder="아이디"
          placeholderTextColor="#666"
          value={userId}
          returnKeyType="next"
          clearButtonMode="while-editing"
          blurOnSubmit={false}
        />
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이름</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangeUsername}
          placeholder = "이름"
          placeholderTextColor = "#666"
          value = {username}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>비밀번호</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangePassword}
          placeholder = "비밀번호"
          placeholderTextColor = "#666"
          secureTextEntry = {true}
          value = {password}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>비밀번호 확인</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangePasswordConfirm}
          secureTextEntry = {true}
          value = {passwordconfirm}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>별명</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangeNickname}
          placeholder = "별명"
          placeholderTextColor = "#666"
          value = {nickname}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapperGender}>
        <Text style = {styles.text}>성별</Text>
        <GenderComponent onGenderChange = {onChangeGender}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>생년월일</Text>
        <View style = {styles.wrapperComponent}>
          <Text style = {[styles.data, {paddingRight : birth ? 15 : 0}]}>생일 : {birth} </Text>
          <BirthComponent onBirthSelected={onChangeBirth}/>
        </View>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이메일</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangeEmail}
          placeholder= '이메일'
          placeholderTextColor = "#666"
          value = {email}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          keyboardType = "email-address"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>전화번호</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangePhoneNo}
          placeholder = "- 없이 입력"
          placeholderTextColor = "#666"
          value = {phoneNo}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          keyboardType = "number-pad"/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>우편번호</Text>
        <View style = {styles.wrapperComponent}>
        <Text style={[styles.value, { paddingRight: zipcode ? 15 : 0 }]}>우편번호 : {zipcode}</Text>
          <ZipCode onAddressSelected={onChangeZipCode}/>
        </View>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>주소</Text>
        <Text>주소 : {street}</Text>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>상세주소</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangeDetailAddress}
          placeholder = "상세주소"
          placeholderTextColor = "#666"
          value = {addressDetail}
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>사진</Text>
        <Picture onPictureSelected = {onChangeImage}/>
        {imageUrl ? <Image 
        source = {{uri : imageUrl}}
        style = {styles.image}/> : null}
      </View>
      <View style = {styles.button}>
        <Pressable
          style = {canGoNext ? StyleSheet.compose(styles.signUpButton, styles.signUpButtonActive)
          : styles.signUpButton}
          //disabled = {!canGoNext || loading}
          onPress = {onSubmit}>
         <Text style = {styles.signUpButtonText}>회원가입하기</Text>
        </Pressable>
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
  button : {
    alignItems : 'center',
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
  signUpButton : {
    backgroundColor : 'gray',
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 5,
    marginBottom : 10,
  },
  signUpButtonActive:{
    backgroundColor : 'blue',
  },
  signUpButtonText:{
    color : 'white',
    fontSize : 16,
  },
  image : {
    width : 200,
    height : 200,
  }
});

export default SignUp;