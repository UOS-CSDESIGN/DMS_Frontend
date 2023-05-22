import { Text, View, Pressable, StyleSheet, ScrollView, TextInput, GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import 'moment/locale/ko';
import Picture from "./PictureComponent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Dimensions } from "react-native";


interface WeightProps {
    goal : string;
    tempGoal : string;
    weight : string;
    tempWeight : string;
    obesity : number;
    isEditWeight : boolean;
    isEditGoal : boolean;
    onChangeWeight : (event : GestureResponderEvent) => void;
    onChangeWeightText : (text : string) => void;
    onChangeGoal : (event : GestureResponderEvent) => void;
    onChangeGoalText : (text : string) => void;
    onSaveWeight : (event : NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onSaveGoal : (event : NativeSyntheticEvent<TextInputFocusEventData>) => void;
    }

function Obesity(props : WeightProps){   
    const [noticeVisible, setNoticeVisible] = useState<boolean>(false);
    const showNoticeModal = useCallback(() => {
        setNoticeVisible(true);
    },[])
    
    const [picture, setPicture] = useState<string>('');
    //사진 받아오는 코드
    const [obesity, setObesity] = useState<number>(0);
    //비만도 받아오는 코드
    const [pictureVisible, setPictureVisible] = useState<boolean>(false);
    const showPictureModal = useCallback(() => {
        setPictureVisible(true);
    }, [])
    return(
        <View style = {styles.View}>
            <View style = {styles.PictureWrapper}>
                {picture ? <Text>비만도 : {obesity}</Text>
                : <View>
                    <Pressable
                     style = {styles.plusButton}
                     onPress = {showPictureModal}>
                        <FontAwesomeIcon icon={faPlusCircle} size = {20} color = "#e4bd12"/>
                    </Pressable>
                    <View style = {styles.pictureTextWrapper}>
                        <Text style = {styles.text}>등록된 비만도가 없습니다</Text>
                        <Text style = {styles.text}>사진을 등록해주세요</Text>
                    </View>
                  </View>}
            </View>
            <View style = {styles.GoalWrapper}>
                <View style = {styles.GoalInnerWrapper1}>
                    <Text style = {styles.text}>현재 몸무게</Text>
                    {props.isEditWeight ? (
                        <TextInput
                        style = {styles.textInput}
                        value = {props.tempWeight}
                        onChangeText = {props.onChangeWeightText}
                        onBlur = {props.onSaveWeight}
                        keyboardType = 'numeric'/>
                    ) : <Text style = {styles.textWeight}>{props.weight}</Text>}
                    <Pressable
                     onPress = {props.onChangeWeight}
                     style = {styles.editButton}>
                        <Text style = {styles.textButton}>수정</Text>
                    </Pressable>
                </View>
                <View style = {styles.GoalInnerWrapper2}>
                    <Text style = {styles.text}>목표 몸무게</Text>
                    {props.isEditGoal? (
                        <TextInput
                        style = {styles.textInput}
                        value = {props.tempGoal}
                        onChangeText = {props.onChangeGoalText}
                        onBlur = {props.onSaveGoal}
                        keyboardType = 'numeric'/>
                    ) : <Text style = {styles.textGoal}>{props.goal}</Text>}
                    <Pressable
                     onPress = {props.onChangeGoal}
                     style = {styles.editButton}>
                        <Text style = {styles.textButton}>수정</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View : {
        paddingHorizontal : 15,
        paddingVertical : 10,
    },
    DateWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        borderBottomWidth : 1,
    },
    text : {
        color : 'black',
        fontSize : 15,
        fontWeight : '500'
    },
    PictureWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 10,
        borderBottomWidth : 1,
    },
    plusButton : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    pictureTextWrapper : {
        alignItems : 'center',
    },
    GoalWrapper : {
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderBottomWidth : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    GoalInnerWrapper1 : {
        justifyContent : 'center',
    },
    GoalInnerWrapper2 : {
        justifyContent : 'center',
    },
    EditWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    textInput : {
        fontSize : 15,
    },
    textWeight : {
        color : 'black',
        fontSize : 20,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
    textGoal : {
        color: 'black',
        fontSize : 20,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
    editButton : {
        alignItems : 'center',
    },
    editText : {
        color : 'black',
        fontWeight : '500',
        backgroundColor : "#f3c315a2",
        borderRadius : 5,
    },
    textButton : {
        color : 'black',
        fontSize : 14,
        fontWeight : '400',
        textAlign : 'center',
        backgroundColor : "#f3c315a2",
        borderRadius : 5,
        paddingVertical : 2,
        paddingHorizontal : 5,
    },
})

export default Obesity;