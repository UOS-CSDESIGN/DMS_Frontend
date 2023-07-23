import React from 'react';
import {Pressable, StyleSheet,Text,TextInput, View, ScrollView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PetGenderComponent from './PetGenderComponent';
import BirthComponent from './BirthComponent';
import Picture from './PictureComponent';
import BreedAuto from './breedAutoComponent';

type AnimalAddProps = {
  name : string;
  birth : string;
  showBirth : boolean;
  gender : number;
  showGender : boolean;
  breed : string;
  showBreed : boolean;
  weight : string;
  showWeight : boolean;
  animalID : string;
  showAnimalID : boolean;
  picture : string;
  showPicture : boolean;
  imageUrl : string;
  imageName : string;
  showButton : boolean;
  onChangeName : (name : string) => void;
  onChangeBirth : (birth : string) => void;
  onChangeGender : (gender : number) => void;
  onChangeBreed : (breed : string) => void;
  onChangeWeight : (weight : string) => void;
  onChangeAnimalId : (animalID : string) => void;
  onChangePicture : (picture : string) => void;
  onSubmit : () => void;  
}

function Animal(props : AnimalAddProps) {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.ScrollView}
    >
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>이름</Text>
        <TextInput 
          style = {styles.textInput}
          value = {props.name}
          onChangeText = {props.onChangeName}/>
      </View>
      {props.showBirth &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>생일</Text>
        <View style = {styles.innerWrapper}>
          <Text style = {styles.innerText}>생일 : {props.birth}</Text>
          <BirthComponent onBirthSelected={props.onChangeBirth}/> 
        </View>
      </Animatable.View>}
      {props.showGender &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>성별</Text>
        <PetGenderComponent onGenderChange={props.onChangeGender}/>
      </Animatable.View>}
      {props.showBreed &&
      <View style = {styles.wrapper}>
        <Text style = {styles.text}>견종</Text>
          <BreedAuto onSelectItem={props.onChangeBreed} />
      </View>}
      {props.showWeight &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>몸무게</Text>
        <TextInput
          style = {styles.textInput}
          value = {props.weight}
          onChangeText = {props.onChangeWeight}
          keyboardType = 'numeric'/>
      </Animatable.View>}
      {props.showAnimalID &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>강아지 등록번호</Text>
        <TextInput
          style = {styles.textInput}
          value = {props.animalID}
          onChangeText = {props.onChangeAnimalId}
          keyboardType = 'decimal-pad'/>
      </Animatable.View>}
      {props.showPicture &&
      <Animatable.View animation = "slideInLeft"
       style = {styles.wrapper}>
        <Text style = {styles.text}>사진</Text>
        <Picture onPictureSelected={props.onChangePicture}/>
        {props.picture ? <Image 
        source = {{uri : props.picture}}
        style = {styles.image}/> : null}
      </Animatable.View>}
      {props.showButton &&
      <Animatable.View animation= "fadeIn"
       style = {styles.button}>
        <Pressable
         style = {styles.submit}
         onPress = {props.onSubmit}>
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
