import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Main from './components/mainComponent';
import MyPage from './components/MyPageComponent';
import SocialMyPage from './components/SocialMyPageComponent';
import Animal from './components/AnimalComponent';
import SocialGoogle from './components/socialGoogle';
import Find from './components/FindComponent';
import MultiProfile from './components/MultiProfileComponent';
import Album from './components/AlbumComponent';

export type BottomTabParamList = {
  Shop : undefined;
  Community : undefined;
  Obesity : undefined;
  MapPage : undefined;
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MyPage : undefined;
  Find : undefined;
  Animal : undefined;
  Main : undefined;
  SocialGoogle : undefined;
  MultiProfile : undefined;
  Album : undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Main"
            component={Main}
            options={{title: '메인페이지'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
          <Stack.Screen
            name = "SocialMyPage"
            component = {SocialMyPage}
            options = {{title : '소셜마이페이지'}}/>
          <Stack.Screen
            name = "NonSocialMyPage"
            component = {NonSocialMyPage}
            options = {{title : '비소셜마이페이지'}}/>
          <Stack.Screen
            name = "Animal"
            component = {Animal}
            options = {{title : '애완견'}}
            />
          <Stack.Screen
            name = "Main"
            component = {Main}
            options = {{title : '메인페이지'}}/>
          <Stack.Screen
            name = "SocialGoogle"
            component = {SocialGoogle}
            options = {{title : '구글로그인'}}/>
          <Stack.Screen
            name = "Find"
            component = {Find}
            options = {{title : '아이디 · 비밀번호 찾기'}}/>
          <Stack.Screen
            name = "MultiProfile"
            component = {MultiProfile}
            options = {{title : '멀티프로필'}}/>
          <Stack.Screen
            name = "Album"
            component = {Album}
            options = {{title : '앨범'}}/>
        </Stack.Navigator>
        
      )}
    </NavigationContainer>
  );
}

export default AppInner;