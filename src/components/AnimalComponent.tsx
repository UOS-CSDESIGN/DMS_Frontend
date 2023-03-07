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
  Image
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import AnimalModal from './AnimalModalComponent';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown'

type AnimalScreenProps = NativeStackScreenProps<RootStackParamList, 'Animal'>;


function Animal({navigation}: AnimalScreenProps) {
  const [breed, setBreed] = useState(null);
  return (
    <View style = {styles.wrapper}>
      <Text>견종</Text>
      <AutocompleteDropdown
        clearOnFocus = {false}
        closeOnBlur = {true}
        closeOnSubmit = {false}
        onSelectItem={setBreed}
        dataSet = {[
          {id : '1', title : '고든 세터'},
          {id : '2', title : '꼬똥 드 툴레아'},
          {id : '3', title : '골든두들'},
          {id : '4', title : '골든 리트리버'},
          {id : '5', title : '그레이트 데인'},
          {id : '6', title : '그레이트 스위스 마운틴 도그'},
          {id : '7', title : '그레이트 피레니즈'},
          {id : '8', title : '그레이하운드'},
          {id : '9', title : '그린란드견'},
          {id : '10', title : '글렌 오브 이말 테리어'},
          {id : '11', title : '기슈견'},
        ]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    flexDirection : 'row',
  },
})

export default Animal;