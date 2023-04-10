import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import MyPage from './MyPageComponent';
import getMemberData from '../model/User/getMemberData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../model';
import User from '../model/User/User';
import postUserModify from '../model/User/postUserModify';
import SocialLoginComponent from './SocialLoginComponent';
import { Switch } from 'react-native-switch'; 

type NonSocialMyPageScreenProps  = NativeStackScreenProps<RootStackParamList, 'NonSocialMyPage'>

function NonSocialMyPage({navigation} : NonSocialMyPageScreenProps){
  const [myPageProps, setMyPageProps] = useState({
      name: '',
      nickname: '',
      password: '',
      passwordConfirm : '',
      isSocial : false,
      gender: '',
      birth: '',
      email: '',
      editEmail : false,
      phoneNo: '',
      zipcode: '',
      street: '',
      addressDetail: '',
      imageUrl: '',
      imageName : '',
    });
    const [gender, setGender] = useState<number>(0);
    const [switchState, setSwitchState] = useState<boolean>(false);
    const onChangeSwitch = () => {
      setSwitchState(true);
      Alert.alert(
        "소셜 로그인 연동",
        "소셜 로그인 연동을 하시겠습니까?",
        [{text : "예" , onPress : () => navigation.navigate('SocialGoogle')},
         {text : "아니오", onPress : () => setSwitchState(false)}]
      )
    }
    const onChangeName = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, name : text}));
    }
    const onChangeNickname = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, nickname : text}));
      console.log(myPageProps.nickname);
      console.log(myPageProps);
    }
    const onChangePassword = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, password : text}));
    }
    const onChangePasswordConfirm = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, passwordConfirm : text}));
    }
    const onChangeGender = ((text : number) => {
      const gender = text === 1 ? "남성" : "여성";
      setMyPageProps((prevState) => ({ ...prevState, gender : gender}));
      gender === "남성" ? setGender(1) : setGender(2); 
      })
    const onChangeBirth = ((text : string) => {
      setMyPageProps((prevState) => ({...prevState, birth : text}));
    })
    const onChangeEmail = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, email : text}));
    }
    const onChangePhoneNo = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, phoneNo : text}));
    }
    const onChangeAddress = (text : {zonecode : string , street : string}) => {
      setMyPageProps((prevState) => ({...prevState, zipcode : text.zonecode}))
      setMyPageProps((prevState) => ({...prevState, street : text.street}))
    }
    const onChangeZipcode = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, zipcode : text}));
    }
    const onChangeStreet = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, street : text}));
    }
    const onChangeaddressDetail = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, addressDetail : text}));
    }
    const onChangePicture = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, imageUrl : text}));
    }

    const dispatch = useDispatch();

    const token = useSelector((state:RootState)=>state.login.accessToken);
    const userData = useSelector((state:RootState)=>state.memberData.userData);

    useEffect(() => {
      getMemberData(dispatch, token);
    },[]);
    useEffect(() => {
      setMyPageProps({
        name:userData.username,
        nickname:userData.nickname,
        password :"",
        passwordConfirm : "",
        isSocial : false,
        gender:userData.gender === 1? "남성" : "여성",
        birth:userData.birth,
        email:userData.email,
        phoneNo:userData.phoneNo,
        zipcode:userData.zipcode,
        street:userData.street,
        addressDetail:userData.addressDetail,
        imageUrl:userData.imageUrl,
        imageName : userData.imageName,
        editEmail : true,
      });
    }, [userData])
    useEffect(() => {
      console.log("called in component effect: " , myPageProps)
    }, [myPageProps]);

    const onSubmit = useCallback(() => {
      if (myPageProps.imageUrl) {
        myPageProps.imageName = (myPageProps.imageUrl.split("/").pop()) || '';
      }
      const user = new User(
        userData.userId, myPageProps.name, "", myPageProps.nickname,
        gender, myPageProps.birth, myPageProps.email, myPageProps.phoneNo,
        userData.isSocial, myPageProps.zipcode, "", myPageProps.street, myPageProps.addressDetail,
        myPageProps.imageUrl, myPageProps. imageName 
      );
      postUserModify(user, token);
    }, [userData.userId, myPageProps.name, myPageProps.nickname, gender, myPageProps.birth,
       myPageProps.email, myPageProps.phoneNo, userData.isSocial, myPageProps.zipcode, myPageProps.street,
       myPageProps.addressDetail, myPageProps.imageUrl, myPageProps.imageName]);

    if(myPageProps){
      return(
        <ScrollView>
          <View>
            <SocialLoginComponent
              toAnimal={() => {
                navigation.navigate('NonSocialMyPage');
              }}
              toSignup={() => {
                navigation.navigate('NonSocialMyPage');
              }}/>
            <Switch
              value={switchState}
              onValueChange={onChangeSwitch}/>
          </View>
          <View>
            <MyPage
            name = {myPageProps.name}
            onChangeName = {onChangeName}
            nickname = {myPageProps.nickname}
            onChangeNickname = {onChangeNickname}
            password = {myPageProps.password}
            onChangePassword = {onChangePassword}
            passwordConfirm= {myPageProps.passwordConfirm}
            onChangePasswordConfirm = {onChangePasswordConfirm}
            gender = {myPageProps.gender}
            onChangeGender = {onChangeGender}
            birth = {myPageProps.birth}
            onChangeBirth = {onChangeBirth}
            isSocial = {myPageProps.isSocial}
            email = {myPageProps.email}
            onChangeEmail = {onChangeEmail}
            phoneNo = {myPageProps.phoneNo}
            onChangePhoneNo = {onChangePhoneNo}
            zipcode = {myPageProps.zipcode}
            onChangeAddress = {onChangeAddress}
            onChangeZipcode = {onChangeZipcode}
            street = {myPageProps.street}
            onChangeStreet = {onChangeStreet}
            addressDetail={myPageProps.addressDetail}
            onChangeAddressDetail = {onChangeaddressDetail}
            picture = {myPageProps.imageUrl}
            onChangePicture = {onChangePicture}/>
          </View>
          <View>
            <Pressable
             style = {styles.buttonZone}
             onPress = {onSubmit}>
              <Text style = {styles.buttonText}>수정하기</Text>
            </Pressable>
          </View>
        </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
  socialLoginButtonZone : {
    backgroundColor : '#1C76E9',
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : 100,
    borderWidth : 1,
    borderColor : "gray",
    borderRadius : 5,
  },
  buttonZone : {
    backgroundColor : '#1C76E9',
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : 140,
    borderWidth : 1,
    borderColor : "gray",
    borderRadius : 5,
  },
  buttonText : {
    fontSize : 20,
  }
})

export default NonSocialMyPage;