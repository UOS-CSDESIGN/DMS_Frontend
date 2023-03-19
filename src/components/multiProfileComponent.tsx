import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { RootStackParamList } from "../AppInner";
import Main from "./mainComponent";
import Animal from "./AnimalComponent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Dimensions} from "react-native";

const height = Dimensions.get('screen').height;

type MultiProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'MultiProfile'>;


function MultiProfile({navigation} : MultiProfileScreenProps){
    type IData = {
        picture : string;
        name : string;
        age : number;
        gender : string;
        weight : number;
        obesity : number;
    };
    const [list, setList] = useState<IData[]>([]);
    const onChangeList = (data : IData) => {
        setList([...list,data]);
    }

    const toAnimal = useCallback(() =>{
      navigation.navigate('Animal');
    }, [navigation]);

    const [index, setIndex] = useState<number>(4);
    const views = [];
    for(let i = 1; i<index;i++){
        views.push(<Main key = {i} 
            onPictureChange={(picture : string) => {
              onChangeList({...list[i],picture});
            }}
            onNameChange = {(name : string) => {
              onChangeList({...list[i],name});
            }}
            onAgeChange={(age : number) => {
              onChangeList({...list[i],age});
            }}
            onGenderChange={(gender : string) => {
              onChangeList({...list[i],gender});
            }}
            onWeightChange={(weight : number) => {
              onChangeList({...list[i],weight})
            }}/>)
    }
    views.push(
      <View
       style = {styles.buttonZone}
       key = {index+1}>
        <Pressable
         onPress = {toAnimal}
         style = {styles.button}>
          <FontAwesomeIcon icon={faPlusCircle} size = {40} color = "#ce800c"/>
          <Text style = {styles.text}>동물을 추가하시려면</Text>
          <Text style = {styles.text}>버튼을 눌러주세요</Text>
        </Pressable>
      </View>
    ); 

    return(
        <Swiper loop = {false}>
            {views}
        </Swiper>
    )
}

const styles = StyleSheet.create({
  buttonZone : {
    marginTop : 200,
    alignItems : 'center',
  },
  button : {
    justifyContent : 'center',
    alignItems : 'center',
  },
  text : {
    fontSize : 15,
    fontWeight : '500',
    color : 'black',
    }
})

export default MultiProfile;