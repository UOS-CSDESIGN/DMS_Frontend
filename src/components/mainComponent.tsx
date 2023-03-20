import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-circular-action-menu';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>

function Main({navigation} : MainScreenProps){
  const [isPicture, setIsPicture] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age , setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('');
  const [weight, setWeight] = useState<number>(0);
  const [obesity, setObesity] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onChangeEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

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

  const openObesity = useRef(navigation.navigate('Obesity'));
  const openButton = () => {
    Animated.timing(openObesity, {
      toValue : 1,
      duration : 5000,
      useNativeDriver : true,
    }).start();
  }

    return(
      <View>
        <View>
        {picture ? <Image 
          source = {{uri : picture}}
          style = {styles.image}/> : null}
        </View>
        <View style = {styles.wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.description}>이름 : </Text>
          </View>
          <View style = {styles.descriptionView2}>
            {isEditName ? (
              <TextInput
              style = {styles.textInput}
              value = {tempName}
              onChangeText = {onChangeNameText}
              onBlur = {onSaveName}/>
            ) : <Text style = {styles.userDescription}>{name}</Text>}
          </View>
          {isEdit ? <Pressable
          onPress = {onChangeName}
          style = {styles.pencil}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable> : null}
        </View>
        <View style = {styles. wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.description}>나이 : </Text>
          </View>
          <View style ={styles.descriptionView2}>
            {isEditAge ? (
              <TextInput
              style = {styles.textInput}
              value = {tempAge}
              onChangeText = {onChangeAgeText}
              keyboardType = 'number-pad'
              onBlur = {onSaveAge}/>
            ) : <Text style = {styles.userDescription}>{age}</Text>}
          </View>
          {isEdit ?<Pressable
          onPress = {onChangeAge}
          style = {styles.pencil}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable> : null}
        </View>
        <View style = {styles.wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.description}>성별 :</Text>
          </View>
          <View style = {styles.descriptionView2}>
            {isEditGender ? (
              <TextInput
              style = {styles.textInput}
              value = {tempGender}
              onChangeText = {onChangeGenderText}
              onBlur = {onSaveGender}/>
            ) : <Text style = {styles.userDescription}>{gender}</Text>}
          </View>
          {isEdit ? <Pressable
          onPress = {onChangeGender}
          style = {styles.pencil}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable> : null}
        </View>
        <View style = {styles.wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.description}>몸무게 : </Text>
          </View>
          <View style = {styles.descriptionView2}>
            {isEditWeight ? (
              <TextInput
              style = {styles.textInput}
              value = {tempWeight}
              onChangeText = {onChangeWeightText}
              onBlur = {onSaveWeight}
              keyboardType= 'number-pad'/>
            ) : <Text style = {styles.userDescription}>{weight}</Text>}
          </View>
          {isEdit ?<Pressable
          onPress = {onChangeWeight}
          style = {styles.pencil}>
            <Icon name = 'pencil' size = {20} color = '#000'/>
          </Pressable> : null}
        </View>
        <View style = {styles.wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.userDescription}>비만도 : {obesity} </Text>
          </View>
        </View>
        <View>
          <Pressable 
          onPress = {onChangeEdit}
          style = {styles.editButton}>
            <Text style = {styles.editButtonText}>수정</Text>
          </Pressable>
        </View>
        <Animated.View>
          <ActionButton>
            <ActionButton.Item
             buttonColor = "gray"
             onPress = {openButton}>
            </ActionButton.Item>
          </ActionButton>
        </Animated.View>
      </View>
    )
}

const styles = StyleSheet.create({
  image : {
    width : 200,
    height : 200,
  },
  descriptionView : {
    height : 30,
  },
  descriptionView2 : {
    height : 30,
    flex : 1,
  },
  wrapper : {
    flexDirection : 'row',
    marginHorizontal : 30,
    marginVertical : 5,
    alignItems : 'center',
  },
  description : {
    fontSize : 16,
    color : 'black',
    fontWeight : '400',
    marginTop : 'auto',
  },
  userDescription : {
    color : 'black', 
    fontSize : 16,
    marginTop : 'auto',
  },
  textInput : {
    borderBottomColor : 'black',
    borderBottomWidth : StyleSheet.hairlineWidth,
    width : '100%',
    fontSize : 16,
    paddingLeft : 0,
    paddingBottom : 0,
    marginTop : 'auto',
  },
  pencil : {
    marginLeft : 'auto',
  },
  editButton : {
    alignItems : 'center',
  },
  editButtonText : {
    fontSize : 16,
    color : 'black',
    borderRadius : 5,
    backgroundColor : 'gray',
  }
})

export default Main;