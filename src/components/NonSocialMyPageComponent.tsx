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
        picture: '',
    });
    const [editedMyPageProps, setEditedMyPageProps] = useState({
      name : '',
      nickname : '',
      password : '',
      passwordConfirm : '',
      isSocial : false,
      gender : '',
      birth : '',
      email : '',
      editEmail : false,
      phoneNo : '',
      zipcode : '',
      street : '',
      addressDetail : '',
      picture : '',
    });
    const onChangeName = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, name : text}));
      setEditedMyPageProps((prevState) => ({...prevState, name : text}));
    }
    const onChangeNickname = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, nickname : text}));
      setEditedMyPageProps((prevState) => ({...prevState, nickname : text}));
    }
    const onChangePassword = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, password : text}));
      setEditedMyPageProps((prevState) => ({...prevState, password : text}));
    }
    const onChangePasswordConfirm = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, passwordConfirm : text}));
      setEditedMyPageProps((prevState) => ({...prevState, passwordConfirm : text}));
    }
    const onChangeGender = ((text : number) => {
      const gender = text === 1 ? "남성" : "여성";
      setMyPageProps((prevState) => ({ ...prevState, gender : gender}));
      console.log(myPageProps.gender);
      setEditedMyPageProps((prevState) => ({ ...prevState, gender : gender}));
    })
    const onChangeBirth = ((text : string) => {
      setMyPageProps((prevState) => ({...prevState, birth : text}));
      setEditedMyPageProps((prevState) => ({...prevState, birth : text}))
    })
    const onChangeEmail = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, email : text}));
      setEditedMyPageProps((prevState) => ({...prevState, email : text}));
    }
    const onChangePhoneNo = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, phoneNo : text}));
      setEditedMyPageProps((prevState) => ({...prevState, phoneNo : text}));
    }
    const onChangeZipcode = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, zipcode : text}));
      setEditedMyPageProps((prevState) => ({...prevState, zipcode : text}));
    }
    const onChangeStreet = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, street : text}));
      setEditedMyPageProps((prevState) => ({...prevState, street : text}));
    }
    const onChangeaddressDetail = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, addressDetail : text}));
      setEditedMyPageProps((prevState) => ({...prevState, addressDetail : text}));
    }
    const onChangePicture = (text : string) => {
      setMyPageProps((prevState) => ({...prevState, picture : text}));
      setEditedMyPageProps((prevState) => ({...prevState, picture : text}));
    }

    const dispatch = useDispatch();

    const onSocialLogin = useCallback(() => {

    }, [])
    const token = useSelector((state:RootState)=>state.login.accessToken);
    const userData = useSelector((state:RootState)=>state.memberData.userData);
  const onSubmit = useCallback(() => {

    const user = new User(
      userData.userId, editedMyPageProps.name, "", editedMyPageProps.nickname,
      userData.gender, editedMyPageProps.birth, editedMyPageProps.email, editedMyPageProps.phoneNo,
      userData.isSocial, editedMyPageProps.zipcode, "", editedMyPageProps.street, editedMyPageProps.addressDetail,
      editedMyPageProps.picture, editedMyPageProps.picture.split("/").pop()||''
    );
    postUserModify(user, token);
    }, []);
    useEffect(() => {
      getMemberData(dispatch, token);
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
        picture:userData.imageUrl,
        editEmail : true,
      })
    },[])
    if(true){
      return(
        <ScrollView>
          <View>
            <Pressable
             style = {styles.socialLoginButtonZone}
             onPress = {onSocialLogin}>
              <Text style = {styles.buttonText}>소셜 로그인 연동</Text>
             </Pressable>
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
            onChangeZipcode = {onChangeZipcode}
            street = {myPageProps.street}
            onChangeStreet = {onChangeStreet}
            addressDetail={myPageProps.addressDetail}
            onChangeAddressDetail = {onChangeaddressDetail}
            picture = {myPageProps.picture}
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