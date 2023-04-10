import React, {useCallback, useRef, useState} from 'react';
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
import BirthComponent from './BirthComponent';
import GenderComponent from './genderComponent';
import Picture from './PictureComponent';
import ZipCode from './ZipCodeComponent';

function MyPage(props : any){
    return(
        <ScrollView>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>이름</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "이름"
             value = {props.name}
             onChangeText={props.onChangeName}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>별명</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "별명"
             value = {props.nickname}
             onChangeText = {props.onChangeNickname}/>
          </View>
          {props.isSocial ? null
           : <View style = {styles.wrapper}>
              <Text style = {styles.text}>현재 비밀번호</Text>
              <TextInput
                style = {styles.textInput}
                placeholder = ''
                editable = {false}/>
             </View>}
          {props.isSocial ? null
           : <View style = {styles.wrapper}>
              <Text style = {styles.text}>재설정할 비밀번호</Text>
              <TextInput
                style = {styles.textInput}
                placeholder = ''
                editable = {true}
                value = {props.password}
                onChangeText = {props.onChangePassword}/>
            </View>}
          {props.isSocial ? null
           : <View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>비밀번호 확인</Text>
                <TextInput
                  style = {styles.textInput}
                  placeholder = ''
                  editable = {true}
                  value = {props.passwordConfirm}
                  onChangeText = {props.onChangePasswordConfirm}/>
              </View>
              {props.password && props.passwordConfirm && props.password === props.passwordConfirm ?
               <Text style={{ color: 'green' }}>일치합니다.</Text>
                : props.passwordConfirm? <Text style = {{color : 'red'}}>일치하지 않습니다.</Text> : null}
              </View>
          }
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>성별</Text>
            <TextInput
            style = {styles.textInput}
            placeholder = {props.gender}/>
            <GenderComponent onGenderChange={props.onChangeGender}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>생년월일</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.birth}
             editable = {false}/>
             <BirthComponent onBirthSelected={props.onChangeBirth}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>이메일</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "이메일"
             editable = {false}
             value = {props.email}
             onChangeText = {props.onChangeEmail}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>휴대전화</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "전화번호"
             value = {props.phoneNo}
             onChangeText = {props.onChangePhoneNo}/>
          </View>
          <View style = {styles.wrapperZipcode}>
            <Text style = {styles.text}>우편번호</Text>
            <View style = {styles.wrapperInnerZipcode}>
              <Text style={[styles.value, { paddingRight: props.zipcode ? 15 : 0 }]}>우편번호 : {props.zipcode}</Text>
              <ZipCode onAddressSelected={props.onChangeAddress}/>
            </View>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>도로명주소</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "도로명주소"
             value = {props.street}
             onChangeText = {props.onChangeStreet}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>상세주소</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = "상세주소"
             value = {props.addressDetail}
             onChangeText = {props.onChangeAddressDetail}/>
          </View>
          <View>
            <Text style = {styles.text}>프로필사진</Text>
            {props.picture && 
              <Image
               style = {styles.image}
               source={{uri : props.picture}}/>
            }
            <Picture onPictureSelected={props.onChangePicture}/>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        padding: 5,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
      },
    wrapperZipcode : {
      paddingLeft : 5,
      flexDirection : 'row',
      marginVertical : 20,
    },
    wrapperInnerZipcode : {
      flexDirection : 'row',
      alignItems : 'center',
    },
    value : {
      paddingLeft : 100,
      paddingRight : 0,
      fontSize : 15,
      fontWeight : '600'
    },
    text :{
      marginRight : 10,
      fontSize : 15,
      fontWeight : '600',
      marginLeft : 10,
    },
    textInput: {
      flex : 1,
      textAlign : 'right',
      borderColor : 'gray',
      borderWidth : 1,
      borderRadius : 10,
      marginHorizontal : 20,
      fontWeight : '600',
      fontSize : 15,
    },
    button : {
      alignItems : 'center',
    },
    image : {
      width : 200,
      height : 200,
    }
})

export default MyPage;
