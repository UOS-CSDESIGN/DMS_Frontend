import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { useCallback, useState } from "react"
import { NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import BirthComponent from "./BirthComponent";
import GenderComponent from "./genderComponent";
import ZipCode from "./ZipCodeComponent";
import Picture from "./PictureComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
import User from "../model/User/User";
import postUserModify from "../model/User/postUserModify";
import getMemberData from "../model/User/getMemberData";

type SocialScreenProps = NativeStackScreenProps<RootStackParamList, 'SocialGoogle'>;

interface ISocial {
    gender : number;
    birth : string;
    nickname : string;
    phoneNo : string;
    zipcode : string;
    street : string;
    addressDetail : string;
    imageUrl : string;
    imageName : string;
}


function SocialGoogle({ navigation }: SocialScreenProps) {
    
    const [gender, setGender] = useState<number>(0);
    const [birth, setBirth] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [phoneNo, setPhoneNo] = useState<string>('');
    const [zipcode, setZipcode] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [addressDetail, setAddressDetail] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageName, setImageName] = useState<string>('');

    const memberData = useSelector((state: RootState) => state.memberData.userData);
    const token = useSelector((state: RootState) => state.login.accessToken);
    const dispatch = useDispatch();
    const onChangeNickname = useCallback((nickname : string) => {
        setNickname(nickname);
    }, [nickname])

    const onChangeGender = useCallback((gender : number) => {
        setGender(gender);
        console.log(gender);
    }, [gender])

    const onChangeBirth = useCallback((birth : string) => {
        setBirth(birth);
    },[birth])
    
    const onChangePhoneNo = useCallback((phoneNo : string) => {
        setPhoneNo(phoneNo);
    }, [phoneNo]);

    const onChangeZipCode = useCallback((address : {zonecode : string, street : string})=> {
        setZipcode(address.zonecode);
        setStreet(address.street);
      }, [zipcode, street]);

    const onChangeAddressDetail = useCallback((addressDetail : string) => {
        setAddressDetail(addressDetail);
    }, [addressDetail]);

    const onChangeImage = useCallback((selectedImage : any)=>{
        if (selectedImage!==null) {
          setImageUrl(selectedImage);
          if(imageUrl!==undefined){
            const tempName = imageUrl.split("/").pop();
            setImageName(tempName || '');
          }
        } else {
          console.log('Selected image does not have assets');
        }
    }, [imageUrl, imageName]);

    const onSubmit = useCallback(async () => {
        const user = new User(
            memberData.userId, memberData.username, "",
            nickname, gender, birth, memberData.email, phoneNo, memberData.isSocial, memberData.provider,
            zipcode, street, addressDetail, imageUrl, imageName
        );
        const res = await postUserModify(user, token);
        getMemberData(dispatch, token);
        navigation.navigate('Animal');
    }, [navigation, memberData,
        gender, birth, nickname, phoneNo, zipcode, street, addressDetail, imageUrl, imageName]);
    
    const canGoNext = gender && birth && nickname && phoneNo && zipcode && street && addressDetail && imageUrl && imageName

    return(
        <ScrollView>
            <View>
                <Text>추가 정보를 입력해야 합니다.</Text>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>별명</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {nickname}
                 onChangeText = {onChangeNickname}/>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>성별</Text>
                <GenderComponent onGenderChange = {onChangeGender}/>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>생일</Text>
                <View style = {styles.wrapper}>
                    <Text>생일 : {birth}</Text>
                    <BirthComponent onBirthSelected={onChangeBirth}/>
                </View>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>전화번호</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {phoneNo}
                 onChangeText = {onChangePhoneNo}
                 keyboardType = 'number-pad'
                 />
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>우편번호</Text>
                <View style = {styles.wrapper}>
                    <Text style={[styles.value, { paddingRight: zipcode ? 15 : 0 }]}>우편번호 : {zipcode}</Text>
                    <ZipCode onAddressSelected={onChangeZipCode}/>
                </View>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>주소</Text>
                <View style = {styles.wrapper}>
                    <Text style = {[styles.value, {paddingRight : street ? 15 : 0}]}>주소 : {street}</Text>
                </View>
            </View>
            <View style = {styles.wrapperView}>
                <Text style = {styles.text}>상세주소</Text>
                <TextInput
                 style = {styles.textInput}
                 value = {addressDetail}
                 onChangeText = {onChangeAddressDetail}/>
            </View>
            <View style = {styles.wrapperView}>
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
    )

}

const styles = StyleSheet.create({
    wrapperView : {
        paddingLeft : 10,
        paddingVertical : 5,
    },
    textInput: {
        marginTop : 5,
        marginRight : 30,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor : 'white',
      },
      text : {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop : 3,
      },
      wrapper : {
        flexDirection : 'row',
      },
      value : {
        paddingRight : 0,
      },
      image : {
        width : 200,
        height : 200,
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
      button : {
        alignItems : 'center',
      },
})

export default SocialGoogle;
