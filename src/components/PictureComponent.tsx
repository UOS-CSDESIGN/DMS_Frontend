import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert} from 'react-native';

function Picture(){
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
                const localUri = result.assets[0].uri;
                const uriPath = localUri.split("//").pop();
                const imageName = localUri.split("/").pop();
            }
          },
          {
            text: "앨범에서 선택",
            onPress: async() =>{
              const result = await launchImageLibrary();
              if (result.didCancel){
                return null;
              } 
              const localUri = result.assets[0].uri;
              const uriPath = localUri.split("//").pop();
              const imageName = localUri.split("/").pop();
            }
          },
        ],
        {cancelable: false}
      );
}

export default Picture;
