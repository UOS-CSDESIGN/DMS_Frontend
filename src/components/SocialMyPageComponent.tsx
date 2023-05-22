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
import MyPage from './MyPageComponent';

type SocialMyPageScreenProps  = NativeStackScreenProps<RootStackParamList, 'SocialMyPage'>

function SocialMyPage({navigation} : SocialMyPageScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default SocialMyPage;