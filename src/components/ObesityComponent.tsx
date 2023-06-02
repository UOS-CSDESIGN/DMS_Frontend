import { Text, View, Pressable, StyleSheet, ScrollView, TextInput, GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import 'moment/locale/ko';
import Picture from "./PictureComponent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Dimensions } from "react-native";


interface WeightProps {
    picture : string;
    goal : string;
    tempGoal : string;
    weight : string;
    obesity : number;
    isEditGoal : boolean;
    toObesityRegister : (event : GestureResponderEvent) => void;
    onChangeGoal : (event : GestureResponderEvent) => void;
    onChangeGoalText : (text : string) => void;
    onSaveGoal : (event : NativeSyntheticEvent<TextInputFocusEventData>) => void;
    }

function Obesity(props : WeightProps){   
    return(
        <View style = {styles.View}>
            <View style = {styles.PictureWrapper}>
                {props.picture ? <Text>비만도 : {props.obesity}</Text>
                : <View>
                    <Pressable
                     style = {styles.plusButton}
                     onPress = {props.toObesityRegister}>
                        <FontAwesomeIcon icon={faPlusCircle} size = {20} color = "#e4bd12"/>
                    </Pressable>
                    <View style = {styles.pictureTextWrapper}>
                        <Text style = {styles.text}>등록된 비만도가 없습니다</Text>
                        <Text style = {styles.text}>비만도 정보를 등록해주세요</Text>
                    </View>
                  </View>}
            </View>
            <View style = {styles.GoalWrapper}>
                <View style = {styles.GoalInnerWrapper1}>
                    <Text style = {styles.text}>현재 몸무게</Text>
                    <Text style = {styles.textWeight}>{props.weight}</Text>
                </View>
                <View style = {styles.GoalInnerWrapper2}>
                    <Text style = {styles.text}>목표 몸무게</Text>
                    <Pressable onPress = {props.onChangeGoal}>
                        {props.isEditGoal? (
                            <TextInput
                            style = {styles.textInput}
                            value = {props.tempGoal}
                            onChangeText = {props.onChangeGoalText}
                            onBlur = {props.onSaveGoal}
                            keyboardType = 'numeric'/>
                        ) : <Text style = {styles.textGoal}>{props.goal}</Text>}
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
        alignItems : 'center',
    },
    GoalInnerWrapper2 : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    EditWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    textInput : {
        fontSize : 15,
        height : 34,
        alignItems : 'center',
        justifyContent : 'center',
    },
    textWeight : {
        color : 'black',
        fontSize : 25,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
    textGoal : {
        color: 'black',
        fontSize : 25,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
})

export default Obesity;