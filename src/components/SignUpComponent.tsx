import React, {useCallback, useState} from 'react';
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
  Button
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import BirthComponent from './BirthComponent';
import Picture from './PictureComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import postLogin from '../model/User/postLogin';
import User from '../model/User/User';
import CheckBox from '@react-native-community/checkbox';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUp({navigation}: SignUpScreenProps) {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState(0);
  const [birth, setBirth] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageNmae] = useState('');

  const onChangeUserId = useCallback((text:string) => {
    setUserId(text.trim());
  }, []);
  const onChangePassword = useCallback((text:string) => {
    setPassword(text.trim());
  }, []);
  const onChangeUsername = useCallback((text : string) => {
    setUsername(text.trim());
  }, []);
  const onChangeNickname = useCallback((text:string) => {
    setNickname(text.trim());
  }, []);
  const onChangeBirth = useCallback((text:number) => {
    setBirth(text);
  }, []);
  const onChangeEmail = useCallback((text:string) => {
    setEmail(text.trim());
  }, []);
  const onChangePhoneNo = useCallback((text:string)=> {
    setPhoneNo(text.trim());
  }, []);
  const onChangeZipcode = useCallback((text:string)=> {
    setZipcode(text.trim());
  }, []);
  const onChangeStreet = useCallback((text:string)=> {
    setStreet(text.trim());
  }, []);
  const onChangeAddressDetail = useCallback((text:string)=> {
    setAddressDetail(text.trim());
  }, []);
  const onChangeImage = useCallback(()=>{
    const res = Picture();
    setImageUrl(res.imageUrl);
    setImageNmae(res.imageName);
  },[]);

  const [token, setToken] = useState('');
  const onSubmit = useCallback(async () => {
    // const user = {
    //   userId : userId,
    //   password : password,
    //   nickname : nickname,
    //   gender : gender,
    //   birth : birth,
    //   email : email,
    //   phoneNo : phoneNo,
    //   zipCode : zipcode,
    //   street : street,
    //   addressDetail : addressDetail,
    //   imageUrl : imageUrl,
    //   imageName : imageName
    // }
    const user  = new User(
      userId, password, username, nickname, gender, birth, email, phoneNo, false, zipcode, 
      street, addressDetail, imageUrl, imageName
    );
    if(loading){
      return
    }
    if (!userId || !userId.trim()) {
      return Alert.alert('알림', '아이디를 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    if (!nickname || !nickname.trim()) {
      return Alert.alert('알림', '이름을 입력해주세요.');
    }
    if (!gender) {
        return Alert.alert('알림', '성별을 선택해주세요.');
      }
    if (!birth) {
        return Alert.alert('알림', '생년월일을 입력해주세요.');
    }
    if (!email || !email.trim()) {
        return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!phoneNo || !phoneNo.trim()) {
        return Alert.alert('알림', '전화번호를 입력해주세요.');
    }
    if (!zipcode || zipcode.trim()) {
        return Alert.alert('알림', '우편번호를 입력해주세요.');
    }
    if (!street || !street.trim()) {
        return Alert.alert('알림', ' 도로명주소를 입력해주세요.');
    }
    if (!addressDetail|| !addressDetail.trim()) {
        return Alert.alert('알림', '상세주소를 입력해주세요.');
    }

    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        userId,
      )
    ) {
      return Alert.alert('알림', '올바른 아이디 형식이 아닙니다.');
    }
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,50}$/.test(password)) {
      return Alert.alert(
        '알림',
        '비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다.',
      );
    }
    postLogin(user);
  }, [navigation, userId, password, username, nickname, gender, birth, email, false, phoneNo, zipcode, street, addressDetail, imageUrl, imageName]);

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
          onChangeText = {onChangePassword}
          secureTextEntry = {true}
          value = {password}
          returnKeyType = "next"
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
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
        

      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>생년월일</Text>
        <Pressable onPress = {BirthComponent}>
          <Icon name = 'calendar'/>
        </Pressable>
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
        <TextInput
          style = {styles.textInput}
          value = {zipcode}
          onChangeText = {onChangeZipcode}
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}
          keyboardType = "number-pad"/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>상세주소</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {onChangeAddressDetail}
          placeholder = "상세주소"
          placeholderTextColor = "#666"
          value = {addressDetail}
          clearButtonMode = "while-editing"
          blurOnSubmit = {false}/>
      </View>
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>사진</Text>
        <Pressable
          style = {styles.photoZone}
          onPress = {Picture}>
          <Text style = {styles.photo}>사진 가져오기</Text>
        </Pressable>
      </View>
      <View style = {styles.button}>
        <Pressable
          style = {canGoNext ? StyleSheet.compose(styles.signUpButton, styles.signUpButtonActive)
          : styles.signUpButton}
          disabled = {!canGoNext || loading}
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
    flexDirection : 'row',
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
});

export default SignUp;