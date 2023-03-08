import React, {useEffect, useState} from 'react';
import {View, PermissionsAndroid, Platform, Pressable, StyleSheet, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert} from 'react-native';

interface PictureProps {
  onPictureSelected : (url : string | undefined) => void;
}

function Picture({onPictureSelected} : PictureProps){
  const androidPermission = async () => {
    const allowCamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title : "Camera App Permission",
        message : "Camera App needs access to your camera",
        buttonNeutral : "Ask me Later",
        buttonNegative : "Cancel",
        buttonPositive : "Ok",
      }
    );
    const allowStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title : "Camera App Permission",
        message : "Camera App needs access to your camera",
        buttonNeutral : "Ask me Later",
        buttonNegative : "Cancel",
        buttonPositive : "Ok",
      }
    );
    if(allowCamera === PermissionsAndroid.RESULTS.GRANTED && allowStorage === PermissionsAndroid.RESULTS.GRANTED){
        console.log("접근 허용");
    }
    else{
        console.log("접근 거절");
    }
  }

  const handlePress = async() => {
    await androidPermission();
    Alert.alert(
      "무엇으로 찍으실 건가요?",
      "옵션을 선택해주세요",
      [
        {
          text: "카메라로 찍기",
          onPress: async() =>{
            const result = await launchCamera({
              mediaType : 'photo', 
              cameraType : 'back',
              saveToPhotos : true, 
            });
              if (result.didCancel){ 
                return null;
              }
              if(result.assets && result.assets.length >0){
                const tempUrl = result.assets[0]?.uri;
                if(tempUrl === null){
                  return null;
                }
                onPictureSelected(tempUrl);
              }
          }
        },
        {
          text: "앨범에서 선택",
          onPress: async() =>{
            const result = await launchImageLibrary();
            if (result.didCancel){
              return null;
            } 
            if(result.assets && result.assets.length >0){
              const tempUrl = result.assets[0]?.uri;
              if(tempUrl === null){
                return null;
              }
              onPictureSelected(tempUrl);
            }
          }
        },
      ],
      {cancelable: false}
    );
  }
  return(
    <View style = {styles.wrapper}>
      <Pressable
        onPress = {handlePress}>
        <Text style = {styles.pictureText}>사진 가져오기</Text>
      </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
  wrapper : {
    backgroundColor : 'snow',
  },
  pictureText : {
    fontSize : 16,
    fontWeight : 'bold',
  }
})

export default Picture;
