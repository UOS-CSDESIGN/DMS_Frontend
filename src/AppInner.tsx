import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import Main from './components/mainComponent';
import SocialMyPage from './components/SocialMyPageComponent';
import Animal from './components/AnimalComponent';
import SocialGoogle from './components/socialGoogle';
import NonSocialMyPage from './components/NonSocialMyPageComponent';
import NonSocialWithdrawal from './components/NonSocialWithdrawalComponent';
import SocialWithdrawal from './components/SocialWithdrawalComponent';

export type BottomTabParamList = {
  Shop : undefined;
  Community : undefined;
  Obesity : undefined;
  MapPage : undefined;
}

export type RootStackParamList = {
  LoginPage : undefined;
  SignUpPage : undefined;
  SocialMyPage : undefined;
  NonSocialMyPage : undefined;
  googleSignUp : undefined;
  Find : undefined;
  Animal : undefined;
  Main : undefined;
  SocialGoogle : undefined;
  NonSocialWithdrawal : undefined;
  SocialWithdrawal : undefined;
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
            name="LoginPage"
            component={LoginPage}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUpPage"
            component={SignUpPage}
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
            options = {{title : '소셜로그인'}}/>
          <Stack.Screen
            name = "NonSocialWithdrawal"
            component = {NonSocialWithdrawal}
            options = {{title : '비소셜회원탈퇴'}}/>
          <Stack.Screen
            name = "SocialWithdrawal"
            component = {SocialWithdrawal}
            options = {{title : '소셜회원탈퇴'}}/>
          
        </Stack.Navigator>
        
      )}
    </NavigationContainer>
  );
}

export default AppInner;