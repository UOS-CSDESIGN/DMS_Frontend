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
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

type AnimalScreenProps = NativeStackScreenProps<RootStackParamList, 'Animal'>;


function Animal({navigation}: AnimalScreenProps) {
  const [breed, setBreed] = useState(null);
  return (
    <View style = {styles.wrapper}>
      <Text>견종</Text>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onSelectItem={setBreed}
        dataSet={[
          {id : 1, title : ''},
          {id : 2, title : ''},
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