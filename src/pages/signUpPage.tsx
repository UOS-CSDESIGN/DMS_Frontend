import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import User from '../model/User/User';
import { useDispatch } from 'react-redux';
import postSignup from '../model/User/postSignup';
import SignUp from '../components/SignUpComponent';
import ButtonComponent from '../components/ButtonComponent';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpPage'>

function SignUpPage({navigation} : SignUpScreenProps){
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordconfirm] = useState<string>('');
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
    const [canGoNext, setCanGoNext] = useState<boolean>(false);
    useEffect(() => {
        if(userId && password && passwordConfirm && username && nickname 
            && gender && birth && email && phoneNo && zipcode && street
            && addressDetail && imageUrl && imageName){
                setCanGoNext(true);
            }
        else{
            setCanGoNext(false);
        }
    },[imageName])

    const dispatch = useDispatch();

    const onChangeUserId = useCallback((text:string) => {
      setUserId(text);
      }, []);
    const onChangeUsername = useCallback((text : string) => {
      setUsername(text);
    }, []);  
    const onChangePassword = useCallback((text:string) => {
      setPassword(text);
    }, []);
    const onChangePasswordConfirm = useCallback((text:string) =>{
      setPasswordconfirm(text);
    }, []);
    const onChangeNickname = useCallback((text:string) => {
      setNickname(text.trim());
    }, []);
    const onChangeGender = useCallback((gender : number) =>{
      setGender(gender);
    }, [])
    const onChangeBirth = useCallback((birth : string) => {
      setBirth(birth);
      console.log(birth);
    }, []);
    const onChangeEmail = useCallback((text:string) => {
      setEmail(text);
    }, []);
    const onChangePhoneNo = useCallback((text:string)=> {
      setPhoneNo(text.trim());
    }, []);
    const onChangeZipCode = useCallback((address : {zonecode : string, street : string})=> {
      setZipcode(address.zonecode);
      setStreet(address.street);
    }, [zipcode, street]);
    const onChangeAddressDetail = useCallback((text:string)=>{
      setAddressDetail(text)
    }, []);
    const onChangeImage = useCallback((selectedImage : any)=>{
      if (selectedImage!==null) {
        setImageUrl(selectedImage);
        if(selectedImage){
          setImageName(imageUrl.split("/").pop()||'');
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

    const onSubmit = useCallback(async () => { 
      const user  = new User(
        userId, username, password, nickname, gender, birth, email, phoneNo, isSocial, "",zipcode, 
        street, addressDetail, imageUrl, imageName
      );
      postSignup(user, dispatch);
    }, [userId, username, password, nickname, gender, birth, email, phoneNo, zipcode, street, addressDetail, imageUrl, imageName]);
    
    return(
        <ScrollView style = {styles.SignUpPage}>
            <View style = {styles.SignUpWrapper}>
                <SignUp
                userId={userId}
                onChangeUserId = {onChangeUserId}
                password={password}
                onChangePassword={onChangePassword}
                passwordConfirm={passwordConfirm}
                onChangePasswordConfirm={onChangePasswordConfirm}
                username={username}
                onChangeUsername={onChangeUsername}
                nickname={nickname}
                onChangeNickname={onChangeNickname}
                gender={gender}
                onChangeGender={onChangeGender}
                birth={birth}
                onChangeBirth={onChangeBirth}
                email={email}
                onChangeEmail={onChangeEmail}
                phoneNo={phoneNo}
                onChangePhoneNo={onChangePhoneNo}
                zipcode={zipcode}
                onChangeZipCode={onChangeZipCode}
                street = {street}
                addressDetail={addressDetail}
                onChangeAddressDetail={onChangeAddressDetail}
                imageUrl={imageUrl}
                imageName={imageName}
                onChangeImage={onChangeImage}
                canGoNext = {canGoNext}/>
            </View>
            <View style = {styles.button}>
              <ButtonComponent
                canGoNext = {canGoNext}
                onSubmit={onSubmit}
                buttonName='회원가입하기'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  SignUpPage : {
    flexGrow : 1,
  },
  SignUpWrapper : {
    flex : 1,
  },
  button : {
    alignItems : 'center',
    backgroundColor : 'snow',
  },
})

export default SignUpPage;