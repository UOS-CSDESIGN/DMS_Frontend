import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootDrawerParamList } from "../AppInner";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCallback, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"
import Swiper from 'react-native-swiper'
import MainPicture from "../components/mainPictureComponent";
import MainName from "../components/mainNameComponent";
import MainAge from "../components/mainAgeComponent";
import MainGender from "../components/mainGenderComponent";
import MainWeight from "../components/mainWeightComponent";
import MainObesity from "../components/mainObesityComponent";

type MainScreenProps = NativeStackScreenProps<RootDrawerParamList, "MultiProfilePage">
type IData = {
    picture : string;
    name : string;
    age : number;
    gender : string;
    weight : number;
    obesity : number;
}

function MultiProfilePage({navigation} : MainScreenProps){
    const [list, setList] = useState<IData[]>([]);
    const onChangeList = (data : IData) => {
        setList([...list,data]);
    }
    const onChangePicture = useCallback(() => {

    },[])

    const toAnimal = useCallback(() => {
        navigation.navigate('Animal');
    },[navigation]);
    const [index, setIndex] = useState<number>(3);
    const views = [];
    for(let i = 0 ; i< index-1; i++){
        views.push(
        <View
         style = {styles.ProfileWrapper}
         key = {i}>
            <MainPicture picture = {list[i]?.picture} onChangePicture={onChangePicture}/>
            <MainName name = {list[i]?.name}/>
            <MainAge age = {list[i]?.age}/>
            <MainGender gender = {list[i]?.gender}/>
            <MainWeight weight = {list[i]?.weight}/>
            <MainObesity obesity = {list[i]?.obesity}/>
        </View>)
    }
    views.push(
        <View
         style = {styles.AnimalAddPage}
         key = {index}>
            <Pressable
                onPress = {toAnimal}
                style = {styles.buttonZone}>
                <Icon name = "add-circle-sharp" size = {40} color = "#ce800c"/>
                <Text style = {styles.text}>동물을 추가하시려면</Text>
                <Text style = {styles.text}>버튼을 눌러주세요</Text>
            </Pressable>
        </View>
    )
    return(
        <View style = {styles.SwiperWrapper}>
            <Swiper>
                <Text>동물을 추가하시려면</Text>
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    AnimalAddPage : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    buttonZone : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    ProfileWrapper : {
        paddingHorizontal : '5%',
        paddingVertical : '3%',
    },
    SwiperWrapper : {
    }
})

export default MultiProfilePage;