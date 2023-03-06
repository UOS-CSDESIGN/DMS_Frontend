import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Main from './components/mainComponent';
import MyPage from './components/MyPageComponent';
import Animal from './components/AnimalComponent';

export type BottomTabParamList = {
  Main : undefined;
  Shop : undefined;
  Community : undefined;
  Obesity : undefined;
  Map : undefined;
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MyPage : undefined;
  googleSignUp : undefined;
  Find : undefined;
  Animal : undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();
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
            name = "MyPage"
            component = {MyPage}
            options = {{title : '마이페이지'}}
          />
          <Stack.Screen
            name = "Animal"
            component = {Animal}
            options = {{title : '애완견'}}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;