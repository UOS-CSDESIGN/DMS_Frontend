import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItem, DrawerToggleButton} from '@react-navigation/drawer'
import {useState} from 'react';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Main from './components/mainComponent';
import MyPage from './components/MyPageComponent';
import SocialMyPage from './components/SocialMyPageComponent';
import Animal from './components/AnimalComponent';
import SocialGoogle from './components/socialGoogle';
import NonSocialMyPage from './components/NonSocialMyPageComponent';
import NonSocialWithdrawal from './components/NonSocialWithdrawalComponent';
import SocialWithdrawal from './components/SocialWithdrawalComponent';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
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

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

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

function MainStackNavigator(){
  return(
    <Stack.Navigator initialRouteName='Root'>
      <Stack.Screen
          name="Root"
          component={MainDrawerNavigator}
          options={{...optionStack}}/>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{...optionStack}}/>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "MyPage"
        component = {MyPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "Animal"
        component = {Animal}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "Main"
        component = {Main}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "SocialGoogle"
        component = {SocialGoogle}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "Find"
        component = {Find}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "MultiProfile"
        component = {MultiProfile}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "ObesityPage"
        component = {ObesityPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "ObesityDetailPage"
        component = {ObesityDetailPage}
        options={{...optionStack}}/>
      <Stack.Screen
        name = "CommunityPage"
        component = {CommunityPage}
        options={{...optionStack}}/>
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
        name = "MultiProfile"
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
    </Drawer.Navigator>
  )
}

function AppInner() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <NavigationContainer>
        <MainStackNavigator/> 
    </NavigationContainer>
  )
}

{/* <NavigationContainer>
{isLoggedIn? 
  <MainStackNavigator/> : 
  <Stack.Navigator>
    <Stack.Screen name = "Login" component={Login}/>
  </Stack.Navigator>
}
</NavigationContainer> */}

export default AppInner;