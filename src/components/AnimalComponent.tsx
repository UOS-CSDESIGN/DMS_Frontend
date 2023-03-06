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
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import AnimalModal from './AnimalModalComponent';

type AnimalScreenProps = NativeStackScreenProps<RootStackParamList, 'Animal'>;


function Animal({navigation}: AnimalScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  }

  return (
    <ScrollView style = {styles.AnimalAddPage}>
      <View style = {styles.AnimalAddZone}>
        <Text style = {styles.AnimalAddText}>등록된 애완견이 없습니다</Text>
        <Text style = {styles.AnimalAddText}>애완견을 추가해 주세요</Text>
      </View>
      <View  style = {styles.AddButtonZone}>
        <Button title = "추가하기" onPress = {showModal}/>
        <AnimalModal show = {modalVisible}
         handleClose={() => setModalVisible(false)}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  AnimalAddPage : {
    backgroundColor : 'snow',
    flex : 1,
  },
  AnimalAddZone : {
    marginTop : 30,
    alignItems : "center",
    flex : 1,
  },
  AnimalAddText : {
    fontSize : 16,
    fontWeight : "900"
  },
  AddButtonZone : {
    marginTop : 50,
    alignItems : "center",
    justifyContent : "center",
  },
  AddButton : {
    fontSize : 20,
  },
})

export default Animal;