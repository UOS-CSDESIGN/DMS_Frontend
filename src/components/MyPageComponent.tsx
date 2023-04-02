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

export type MyPageProps = {
  name : string;
  nickname : string;
  password : string;
  gender : string;
  birth : string;
  email : string;
  phoneNo : string;
  zipcode : string;
  street : string;
  addressDetail : string;
  picture : string;
}


function MyPage(props : MyPageProps){
  const [name, setName] = useState<string>(props.name);
  const [nickname, setNickname] = useState<string>(props.nickname);
  const [password, setPassword] = useState<string>(props.password);
  const [gender, setGender] = useState<string>(props.gender);
  const [birth, setBirth] = useState<string>(props.birth);
  const [email, setEmail] = useState<string>(props.email);
  const [phoneNo, setPhoneNo] = useState<string>(props.phoneNo);
  const [zipcode, setZipcode] = useState<string>(props.zipcode);
  const [street, setStreet] = useState<string>(props.street);
  const [addressDetail, setAddressDetail] = useState<string>(props.addressDetail);
  const [picture, setPicture] = useState<string>(props.picture);

    return(
        <ScrollView>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>이름</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.name}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>별명</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.nickname}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>비밀번호</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.password}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>성별</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.gender}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>생년월일</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.birth}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>이메일</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.email}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>휴대전화</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.phoneNo}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>우편번호</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.zipcode}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>도로명주소</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.street}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>상세주소</Text>
            <TextInput
             style = {styles.textInput}
             placeholder = {props.addressDetail}/>
          </View>
          <View style = {styles.wrapper}>
            <Text style = {styles.text}>프로필사진</Text>
          </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        padding: 5,
        flexDirection : 'row',
      },
      text :{
      },
      textInput: {
      },
      button : {
        alignItems : 'center',
      },
})

export default MyPage;
