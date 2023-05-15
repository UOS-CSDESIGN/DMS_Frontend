import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerToggleButton} from '@react-navigation/drawer'
import {useState} from 'react';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Main from './components/mainComponent';
import MyPage from './components/MyPageComponent';
import Animal from './components/AnimalComponent';
import SocialGoogle from './components/socialGoogle';
import Find from './components/FindComponent';
import MultiProfile from './components/MultiProfileComponent';
import ObesityPage from './pages/obesityPage';
import { Pressable } from 'react-native';
import {Text} from 'react-native'


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MyPage : undefined;
  Find : undefined;
  Animal : undefined;
  Main : undefined;
  SocialGoogle : undefined;
  MultiProfile : undefined;
  Shop : undefined;
  Community : undefined;
  ObesityPage : undefined;
  MapPage : undefined;
  navbar : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const option = {
  headerLeft : () => null,
  headerRight : () => <DrawerButton/>,
  headerBackVisible : true 
}



function DrawerButton(){
  return(
    <Pressable onPress = {MainDrawerNavigator}>
      <Text>메뉴</Text>
    </Pressable>
  )
}


function MainStackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{...option}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{...option}}
      />
      <Stack.Screen
        name = "MyPage"
        component = {MyPage}
        options={{...option}}
      />
      <Stack.Screen
        name = "Animal"
        component = {Animal}
        options={{...option}}
        />
      <Stack.Screen
        name = "Main"
        component = {Main}
        options={{
          headerLeft : () => null,
          headerRight : () => <DrawerToggleButton/>,
          headerBackVisible : true }}/>
      <Stack.Screen
        name = "SocialGoogle"
        component = {SocialGoogle}
        options={{
          headerLeft : () => null,
          headerRight : () => <DrawerToggleButton/>,
          headerBackVisible : true }}/>
      <Stack.Screen
        name = "Find"
        component = {Find}
        options={{
          headerLeft : () => null,
          headerRight : () => <DrawerToggleButton/>,
          headerBackVisible : true }}/>
      <Stack.Screen
        name = "MultiProfile"
        component = {MultiProfile}
        options={{
          headerLeft : () => null,
          headerRight : () => <DrawerToggleButton/>,
          headerBackVisible : true }}/>
      <Stack.Screen
        name = "ObesityPage"
        component = {ObesityPage}
        options={{
          headerLeft : () => null,
          headerRight : () => <DrawerToggleButton/>,
          headerBackVisible : true }}/>
  </Stack.Navigator>
  )
}



function MainDrawerNavigator(){
  return(
    <Drawer.Navigator
     backBehavior="history"
     screenOptions={{
      drawerPosition : 'right',
      headerShown : false,
     }}>
      <Drawer.Screen name = "MyPage" component={MyPage}/>
      {/* <Drawer.Screen name = "ObesityPage" component={ObesityPage}/> */}

    </Drawer.Navigator>
  )
}

function AppInner() {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}

export default AppInner;