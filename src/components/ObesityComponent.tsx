import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import { Text, View, Pressable, StyleSheet } from 'react-native'
import { useCallback, useEffect, useState } from "react";
import moment from 'moment';
import 'moment/locale/ko';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native";
import Picture from "./PictureComponent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


type ObesityScreenProps = NativeStackScreenProps<RootStackParamList, 'Obesity'>

function Obesity({navigation} : ObesityScreenProps){
    const [date, setDate] = useState<string>('');
    const currentDate = moment();
    const year = currentDate.format('YYYY');
    const month = currentDate.format('M');
    const day = currentDate.format('D');
    const dayName = currentDate.format('dddd');
    const FormDate = `${year}/${month}/${day}/${dayName}`;
    useEffect(() => {
        setDate(FormDate);
    }, [])
    
    const [noticeVisible, setNoticeVisible] = useState<boolean>(false);
    const showNoticeModal = useCallback(() => {
        setNoticeVisible(true);
    },[])
    
    const [picture, setPicture] = useState<string>('');
    //사진 받아오는 코드
    const [pictureVisible, setPictureVisible] = useState<boolean>(false);
    const showPictureModal = useCallback(() => {
        setPictureVisible(true);
    }, [])


    return(
        <View style = {styles.View}>
            <View style = {styles.DateWrapper}>
                <Text style = {styles.date}>{date}</Text>
                <Pressable onPress = {showNoticeModal}>
                    <Icon name = 'bell' size = {20} color = "black"/>
                </Pressable>
            </View>
            <View style = {styles.PictureWrapper}>
                {picture ? null
                : <View>
                    <Pressable
                     style = {styles.plusButton}
                     onPress = {showPictureModal}>
                        <FontAwesomeIcon icon={faPlusCircle} size = {20} color = "#e4bd12"/>
                    </Pressable>
                    <Text>등록된 사진이 없습니다</Text>
                    <Text>사진을 등록해주세요</Text>
                  </View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View : {
        marginHorizontal : 15,
        marginVertical : 10,
    },
    DateWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    date : {
        color : 'black',
        fontSize : 15,
        fontWeight : '500'
    },
    PictureWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    plusButton : {
        justifyContent : 'center',
        alignItems : 'center',
    }
})

export default Obesity;