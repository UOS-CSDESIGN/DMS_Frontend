import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import Picture from './PictureComponent';
import Icon from 'react-native-vector-icons/Ionicons'

type MainPageProps = {
  isPicture : boolean;
  picture : string;
  name : string;
  age : number;
  weight : number;
  obesity : number;
  isEdit : boolean;
  onChangeEdit : () => void;
  onChangePicture : (picture : string) => void;
  onChangeName : (name : string) => void;
  onChangeAge : (age : number) => void;
  onChangeWeight : (weight : number) => void;
  onChangeObesity : (obesity : number) => void;
}

function Main(props : MainPageProps){
    return(
      <View>
        <View>
          <Text style = {styles.description}>사진</Text>
          <Picture onPictureSelected={props.onChangePicture}/>
          {props.picture ? <Image 
          source = {{uri : props.picture}}
          style = {styles.image}/> : null}
        </View>
        <View style = {styles.wrapper}>
          <View style = {styles.descriptionView}>
            <Text style = {styles.description}>이름 : </Text>
          </View>
          <View style = {styles.descriptionView2}>
            {props.isEditName ? (
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