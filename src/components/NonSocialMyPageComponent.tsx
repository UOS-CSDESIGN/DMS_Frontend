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
import { MyPageProps } from './MyPageComponent';
import getMemberData from '../model/User/getMemberData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../model';

type NonSocialMyPageScreenProps  = NativeStackScreenProps<RootStackParamList, 'NonSocialMyPage'>

function NonSocialMyPage({navigation} : NonSocialMyPageScreenProps){
    const [myPageProps, setMyPageProps] = useState<MyPageProps>({
        name: '',
        nickname: '',
        password: '',
        gender: '',
        birth: '',
        email: '',
        phoneNo: '',
        zipcode: '',
        street: '',
        addressDetail: '',
        picture: '',
    });

    const [edit, setEdit] = useState<boolean>(false); 
    const dispatch=useDispatch();
    const token = useSelector((state:RootState)=>state.login.accessToken);
    const userData = useSelector((state:RootState)=>state.memberData.userData);
    useEffect(() => {
      getMemberData(dispatch,token);
      setMyPageProps({
        name:userData.username,
        nickname:userData.nickname,
        password:"",
        gender:userData.gender=== 1? "male" : "female",
        birth:userData.birth,
        email:userData.email,
        phoneNo:userData.phoneNo,
        zipcode:userData.zipCode,
        street:userData.street,
        addressDetail:userData.addressDetail,
        picture:userData.imageUrl
      })
    },[])
    return(
        <MyPage
          name = {myPageProps.name}
          nickname = {myPageProps.nickname}
          password = {myPageProps.password}
          gender = {myPageProps.gender}
          birth = {myPageProps.birth}
          email = {myPageProps.email}
          phoneNo = {myPageProps.phoneNo}
          zipcode = {myPageProps.zipcode}
          street = {myPageProps.street}
          addressDetail={myPageProps.addressDetail}
          picture = {myPageProps.picture}/>
    )
}

export default NonSocialMyPage;