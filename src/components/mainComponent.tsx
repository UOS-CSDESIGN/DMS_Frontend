import React, {useCallback, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import Icon from 'react-native-vector-icons/FontAwesome';

type MainBottomProps = NativeStackScreenProps<RootStackParamList, 'Main'>

function Main({navigation} : MainBottomProps){
  const [isPicture, setIsPicture] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age , setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [obesity, setObesity] = useState<number>(0);

  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>('');
  const onChangeName = useCallback(() => {
    setName('');
    setIsEditName(true);
  },[name])
  const onSaveName = useCallback(() =>{
    setName(tempName);
    setIsEditName(false);
    setTempName('');
  }, [tempName])
  const onChangeNameText = useCallback((name : string) => {
    setTempName(name)
  },[])


  const [isEditAge, setisEditAge] = useState<boolean>(false);
  const [tempAge, setTempAge] = useState<string>('');
  const onChangeAge = useCallback(() => {
    setAge(0);
    setisEditAge(true);
  }, [age]);
  const onSaveAge = useCallback(() => {
    setAge(parseInt(tempAge));
    setisEditAge(false);
    setTempAge('');
  },[tempAge])
  const onChangeAgeText = useCallback((age : string) =>{
    setTempAge(age);
  },[])


  const [isEditGender, setIsEditGender] = useState<boolean>(false);
  const [tempGender, setTempGender] = useState<string>('');
  const onChangeGender = useCallback(() => {
    setGender('');
    setIsEditGender(true);
  }, [gender]);
  const onSaveGender = useCallback(() => {
    setGender(tempGender);
    setIsEditGender(false);
    setTempGender('');
  }, [tempGender]);
  const onChangeGenderText = useCallback((gender : string) => {
    setTempGender(gender);
  },[])


  const [isEditWeight, setIsEditWeight] = useState<boolean>(false);
  const [tempWeight, setTempWeight] = useState<string>('');
  const onChangeWeight = useCallback(() => {
    setWeight(0);
    setIsEditWeight(true);
  }, [weight]);
  const onSaveWeight = useCallback(() => {
    setWeight(parseInt(tempWeight));
    setIsEditWeight(false);
    setTempWeight('');
  }, [tempWeight]);
  const onChangeWeightText = useCallback((weight : string) => {
    setTempWeight(weight);
  },[])


  const onChangeObesity = useCallback(() => {

  }, []);

    return(
      <View>
        <View>
        {picture ? <Image 
          source = {{uri : picture}}
          style = {styles.image}/> : null}
        </View>
        <View style = {styles.wrapper}>
          <Text style = {styles.description}>이름 : </Text>
          {isEditName ? (
            <TextInput
             style = {styles.textInput}
             value = {tempName}
             onChangeText = {onChangeNameText}
             onBlur = {onSaveName}/>
          ) : <Text>{name}</Text>}
          <Pressable onPress = {onChangeName}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable>
        </View>
        <View style = {styles. wrapper}>
          <Text style = {styles.description}>나이 : </Text>
          {isEditAge ? (
            <TextInput
             style = {styles.textInput}
             value = {tempAge}
             onChangeText = {onChangeAgeText}
             keyboardType = 'number-pad'
             onBlur = {onSaveAge}/>
          ) : <Text>{age}</Text>}
          <Pressable onPress = {onChangeAge}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable>
        </View>
        <View style = {styles.wrapper}>
          <Text style = {styles.description}>성별 :</Text>
          {isEditGender ? (
            <TextInput
             style = {styles.textInput}
             value = {tempGender}
             onChangeText = {onChangeGenderText}
             onBlur = {onSaveGender}/>
          ) : <Text>{gender}</Text>}
          <Pressable onPress = {onChangeGender}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable>
        </View>
        <View style = {styles.wrapper}>
          <Text style = {styles.description}>몸무게 : </Text>
          {isEditWeight ? (
            <TextInput
             style = {styles.textInput}
             value = {tempWeight}
             onChangeText = {onChangeWeightText}
             onBlur = {onSaveWeight}
             keyboardType= 'number-pad'/>
          ) : <Text>{weight}</Text>}
          <Pressable onPress = {onChangeWeight}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable>
        </View>
        <View style = {styles.wrapper}>
          <Text style = {styles.description}>비만도 : {obesity} </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  image : {
    width : 200,
    height : 200,
  },
  wrapper : {
    flexDirection : 'row',
    marginHorizontal : 30,
    paddingVertical : 7,
    alignItems : 'center',
  },
  description : {
    fontSize : 16,
    color : 'black',
    fontWeight : '400',
  },
  textInput : {
    fontSize : 15,
    paddingVertical : 10,
    height : 40,
    textAlignVertical : 'center'
  }
})

export default Main;