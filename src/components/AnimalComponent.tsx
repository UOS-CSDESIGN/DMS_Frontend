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
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import * as Animatable from 'react-native-animatable';
import GenderComponent from './genderComponent';
import BirthComponent from './BirthComponent';
import Picture from './PictureComponent';
import BreedAuto from './breedAutoComponent';
import Pet from '../model/Pet/Pet';

type AnimalScreenProps = NativeStackScreenProps<RootStackParamList, 'Animal'>;


function Animal({ navigation }: AnimalScreenProps) {
  const [name, setName] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [showBirth, setShowBirth] = useState<boolean>(false);
  const [gender, setGender] = useState<number>(0);
  const [showGender, setShowGender] = useState<boolean>(false);
  const [breed, setBreed] = useState<string>('');
  const [showBreed, setShowBreed] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>('');
  const [showWeight, setShowWeight] = useState<boolean>(false);
  const [animalID, setAnimalID] = useState<string>('');
  const [showAnimalID, setShowAnimalID] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageName, setImageName] = useState<string>('');
  const [showPicture, setShowPicture] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  const onChangeName = (value: string) => {
    setName(value);
    setShowBirth(true);
  }
  const onChangeBirth = (value: string) => {
    setBirth(value);
    setShowGender(true);
  }
  const onChangeGender = useCallback((gender: number) => {
    setGender(gender);
    setShowBreed(true);
    console.log(gender);
  }, []);
  const onChangeBreed = (value: string) => {
    setBreed(value);
    setShowWeight(true);
  }
  const onChangeWeight = (value: string) => {
    setWeight(value);
    setShowAnimalID(true);
  }
  const onChangeAnimalId = (value: string) => {
    setAnimalID(value);
    setShowPicture(true);
  }
  const onChangePicture = (value: string) => {
    setPicture(value);
    if (value !== null) {
      setImageUrl(value);
      if (imageUrl !== undefined) {
        const tempName = imageUrl.split("/").pop();
        setImageName(tempName || '');
      }
    } else {
      console.log('Selected image does not have assets');
    }
    setShowButton(true);
  }

  const onSubmit = useCallback(() => {
    console.log(breed);
    const pet = new Pet(
      animalID, name, birth, gender, parseInt(breed, 10)+1,
      parseInt(weight,10), 0, 0, 0, "", imageUrl, imageName
    );
    console.log(pet.registerFormData);
  }, [animalID, name, birth, gender, breed, weight, imageName, imageUrl]);


  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.ScrollView}
    >
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이름</Text>
        <TextInput 
          style = {styles.textInput}
          value = {name}
          onChangeText = {onChangeName}/>
      </View>
      {showBirth &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>생일</Text>
        <View style = {styles.innerWrapper}>
          <Text style = {styles.innerText}>생일 : {birth}</Text>
          <BirthComponent onBirthSelected={onChangeBirth}/> 
        </View>
      </Animatable.View>}
      {showGender &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>성별</Text>
        <GenderComponent onGenderChange={onChangeGender}/>
      </Animatable.View>}
      {showBreed &&
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>견종</Text>
          <BreedAuto onSelectItem={onChangeBreed} />
      </View>}
      {showWeight &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>몸무게</Text>
        <TextInput
          style = {styles.textInput}
          value = {weight}
          onChangeText = {onChangeWeight}
          keyboardType = 'numeric'/>
      </Animatable.View>}
      {showAnimalID &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>강아지 등록번호</Text>
        <TextInput
          style = {styles.textInput}
          value = {animalID}
          onChangeText = {onChangeAnimalId}
          keyboardType = 'decimal-pad'/>
      </Animatable.View>}
      {showPicture &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>사진</Text>
        <Picture onPictureSelected={onChangePicture}/>
        {picture ? <Image 
        source = {{uri : picture}}
        style = {styles.image}/> : null}
      </Animatable.View>}
      {showButton &&
      <Animatable.View animation= "fadeIn"
       style = {styles.button}>
        <Pressable
         style = {styles.submit}
         onPress = {onSubmit}>
          <Text style = {styles.submitButton}>완료</Text>
        </Pressable>
      </Animatable.View>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView : {
    backgroundColor : 'snow',
    paddingTop : '5%',
    paddingHorizontal : '5%',
  },
  wrapper: {
    paddingLeft : 10,
    paddingVertical : 5,
    paddingTop : 5,
  },
  innerWrapper : {
    flexDirection : 'row',
    backgroundColor : 'white',
  },
  innerText : {
    marginRight : 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop : 3,
  },
  textInput: {
    marginTop : 5,
    marginRight : 30,
    height: 40,
    borderBottomWidth : 1,
    borderBottomColor : 'gray',
    backgroundColor : 'white',
  },
  image : {
    width : 200,
    height : 200,
    marginBottom : 10,
  },
  button : {
    alignItems : 'center',
  },
  submit : {
    backgroundColor: 'blue',
    borderBottomColor : 'black',
    borderRadius : 5,
    fontSize : 14,
    paddingHorizontal : 20,
    marginBottom : 30,
  },
  submitButton : {
    fontSize : 18,
  }
})

export default Animal;
