import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItem, DrawerToggleButton} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import Main from './components/mainComponent';
import MyPage from './components/MyPageComponent';
import AnimalAddPage from './pages/animalAddPage';
import SocialGoogle from './components/socialGoogle';
import Find from './components/FindComponent';
import MultiProfile from './components/MultiProfileComponent';
import ObesityPage from './pages/obesityPage';
import ObesityDetailPage from './pages/obesityDetailPage';
import CommunityPage from './pages/communityPage';
import { Alert, Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from './model';
import PostBoardPage from './pages/postBoardPage';
import PostPage from './pages/postPage';
import PostAddPage from './pages/postAddPage';
import InstructionPage from './pages/instructionPage';
import Icon from 'react-native-vector-icons/Fontisto';
import CommunityMyPage from './pages/communityMyPage';


export type RootStackParamList = {
  LoginPage: undefined;
  SignUpPage: undefined;
  FindPage : undefined;
  AnimalAddPage : undefined;
  Main : undefined;
  SocialGoogle : undefined;
  Shop : undefined;
  MapPage : undefined;
  Root: undefined;
  ObesityRegisterPage : undefined;
  ObesityTimePage : undefined;
  NonSocialMyPage: undefined;
  SocialMyPage: undefined;
  SocialWithdrawal: undefined;
  PostBoardPage : undefined;
  PostPage : undefined;
  PostAddPage : undefined;
  InstructionPage : undefined;
};

export type RootDrawerParamList = {
  MultiProfilePage : undefined;
  MyPage : undefined;
  ObesityPage : undefined;
  ObesityDetailPage : undefined;
  CommunityPage : undefined;
}

export type RootBottomParamList = {
  Community : undefined;
  CommunityMyPage : undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();
const BottomTab = createBottomTabNavigator();

const optionDrawer = {
  headerLeft : () => null,
  headerRight : () => <DrawerToggleButton/>,
  headerBackVisible : true,
}
const optionStack = {
  headerShown : false
}

/* function CustomDrawerContent(props : any) {
  const { navigation } = props;

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '로그아웃 하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '예',
          onPress: () => {
            // 로그아웃 로직 처리
            // 필요한 상태 업데이트 및 화면 이동 등을 수행
          },
        },
      ],
      { cancelable: false }
    );
  };
} */

function LoginStackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = "LoginPage"
        component = {LoginPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "SignUpPage"
        component = {SignUpPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "FindPage"
        component = {Find}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "SocialGoogle"
        component = {SocialGoogle}
        options={{...optionStack}}/>
    </Stack.Navigator>
  )
}

function MainStackNavigator(){
  return(
    <Stack.Navigator initialRouteName='Root'>
      <Stack.Screen
        name="Root"
        component={MainDrawerNavigator}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "AnimalAddPage"
        component = {AnimalAddPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "Main"
        component = {Main}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "PostBoardPage"
        component = {PostBoardPage}
        options={{...optionStack}}
      />
      <Stack.Screen
        name = "PostPage"
        component = {PostPage}
        options = {{...optionStack}}/>
      <Stack.Screen
        name = "PostAddPage"
        component = {PostAddPage}
        options = {{...optionStack}}/>
      <Stack.Screen
        name = "InstructionPage"
        component = {InstructionPage}
        options = {{...optionStack}}/>
  </Stack.Navigator>
  )
}



function MainDrawerNavigator(){
  return(
    <Drawer.Navigator
     backBehavior='history'
     screenOptions={{
      drawerPosition : 'right',
     }}>
      <Drawer.Screen
        name = "MultiProfilePage"
        component = {MultiProfile}
        options={{...optionDrawer}}/>
      <Drawer.Screen
        name = "MyPage"
        component = {MyPage}
        options={{...optionDrawer}}
      />
      <Drawer.Screen
        name = "ObesityPage"
        component = {ObesityPage}
        options={{...optionDrawer}}/>
      <Drawer.Screen
        name = "ObesityDetailPage"
        component = {ObesityDetailPage}
        options={{...optionDrawer}}/>
      <Drawer.Screen
        name = "CommunityPage"
        component = {BottomTabNavigator}
        options ={{...optionDrawer}}/>
    </Drawer.Navigator>
  )
}

function BottomTabNavigator(){
  return(
    <BottomTab.Navigator initialRouteName='CoummunityPage'>
      <BottomTab.Screen
        name = "Community"
        component = {CommunityPage}
        options = {{
          tabBarIcon : () => (
            <Icon name = "home" size = {24} color = "black"/>
          ),
        }}
      />
      <BottomTab.Screen
        name = "CommunityMyPage"
        component = {CommunityMyPage}
        options = {{
          tabBarIcon : () => (
            <Icon name = "person" size = {24} color = "black"/>
          ),
        }}/>
    </BottomTab.Navigator>
  )
}

function AppInner() {

  const token = useSelector((state: RootState) => state.login.accessToken);
  
  const isLogged = token ? true : false;
  //checking accessToken
  //  not login: null
  //  login    : stirng
  return (
    
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  ); 
}

/* {isLoggedIn ?
  <MainStackNavigator /> :
  <LoginStackNavigator/>
} */



export default AppInner;