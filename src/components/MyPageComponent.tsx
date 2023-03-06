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
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';
import Config from 'react-native-config';
import axios, {AxiosError} from 'axios';
import BirthComponent from './BirthComponent';
import GenderComponent from './genderComponent';
import Picture from './PictureComponent';

type MyPageScreenProps = NativeStackScreenProps<RootStackParamList, 'MyPage'>;

function MyPage(){
    return(
        <ScrollView>
            <View>
                <Text style = {styles.text}>회원가입 수정</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 5,
        flexDirection : 'row',
      },
      textInput: {
        fontWeight : 'bold',
        fontSize : 12,
      },
      text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical : 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      button : {
        alignItems : 'center',
      },
})

export default MyPage;
