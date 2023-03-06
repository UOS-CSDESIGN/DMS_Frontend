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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList, RootStackParamList } from '../AppInner';

type MainScreenProps = createBottomTabNavigator<BottomTabParamList, 'Main'>;

function Main({navigation} : MainScreenProps){
    return(
        <View>

        </View>
    )
}

export default Main;