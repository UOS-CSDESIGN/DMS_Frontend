import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import {View, Text, ScrollView, Pressable} from 'react-native'
import ObesityRegister from "../components/ObesityRegisterComponent";
import { useCallback, useState } from "react";
import Survey from "../components/SurveyComponent";
import { StyleSheet } from "react-native";

type ObesityRegisterScreenProps = NativeStackScreenProps<RootStackParamList, "ObesityRegisterPage">

function ObesityRegisterPage({navigation} : ObesityRegisterScreenProps){
    const [name, setName] = useState<string>('');
    const [sidePicture, setSidePicture] = useState<string>('');
    const [upPicture, setUpPicture] = useState<string>('');
    const onChangeSidePicture = useCallback((picture : string) => {
        setSidePicture(picture)
    },[sidePicture])
    const onChangeUpPicture = useCallback((picture : string) => {
        setUpPicture(picture)
    },[upPicture])

    const [weight, setWeight] = useState<string>('');
    const onChangeWeight = useCallback((weight : string) => {
        setWeight(weight);
    },[weight]);

    const [surveyIndex, setSurveyIndex] = useState<number[]>([]);
    const onChangeSurveyIndex = useCallback((index : number, value : number) => {
        setSurveyIndex((prevSurveyIndex : any) => {
            const updatedSurveyIndex = [...prevSurveyIndex];
            updatedSurveyIndex[index] = value;
            return updatedSurveyIndex
        })
    },[surveyIndex])

    const canGoNext: boolean =
        !!sidePicture && !!upPicture && !!weight &&
        typeof surveyIndex[0] === 'number' &&
        typeof surveyIndex[1] === 'number' &&
        typeof surveyIndex[2] === 'number' &&
        typeof surveyIndex[3] === 'number' &&
        typeof surveyIndex[4] === 'number';
    const onSubmit = () => {
        //사진2장, 몸무게, 설문내용 전송
    }
    return(
        <ScrollView style ={styles.ObesityRegisterPage}>
            <View>
                <Text>이름</Text>
                <Text>{name}</Text>
            </View>
            <View>
                <ObesityRegister
                    sidePicture = {sidePicture}
                    upPicture = {upPicture}
                    weight = {weight}
                    onChangeSidePicture = {onChangeSidePicture}
                    onChangeUpPicture = {onChangeUpPicture}
                    onChangeWeight = {onChangeWeight}/>
            </View>
            <View>
                <View>
                    <Survey
                        surveyText = "1. 갈비뼈가 만져지나요?"
                        surveyIndex = {surveyIndex[0]}
                        onChangeSurveyIndex = {(value) => onChangeSurveyIndex(0, value)}/>
                </View>
                <View>
                    <Survey
                        surveyText = "2. 갈비뼈가 보이나요?"
                        surveyIndex = {surveyIndex[1]}
                        onChangeSurveyIndex = {(value) => onChangeSurveyIndex(1, value)}/>
                </View>
                <View>
                    <Survey
                        surveyText = "3. 배를 만졌을 때 지방이 어느정도 느껴지나요?"
                        surveyIndex = {surveyIndex[2]}
                        onChangeSurveyIndex = {(value) => onChangeSurveyIndex(2, value)}/>
                </View>
                <View>
                    <Survey
                        surveyText = "4. 위에서 봤을 때 허리가 보이나요?"
                        surveyIndex = {surveyIndex[3]}
                        onChangeSurveyIndex = {(value) => onChangeSurveyIndex(3, value)}/>
                </View>
                <View>
                    <Survey
                        surveyText = "5. 옆에서 보았을 때 허리가 보이나요?"
                        surveyIndex = {surveyIndex[4]}
                        onChangeSurveyIndex = {(value) => onChangeSurveyIndex(4, value)}/>
                </View>
            </View>
            <View style = {styles.ButtonWrapper}>
                <Pressable
                 onPress = {onSubmit}
                 disabled = {!canGoNext}>
                    <Text
                     style = {canGoNext ?
                     styles.ButtonTextActive : styles.ButtonTextInActive}>
                    등록</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ObesityRegisterPage : {
        backgroundColor : 'snow',
    },
    ButtonWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    ButtonTextInActive : {
        fontSize : 20,
        color : 'black',
        backgroundColor : "gray",
        borderRadius : 5,
        paddingHorizontal : '2%',
        paddingVertical : '1%',
    },
    ButtonTextActive : {
        fontSize : 20,
        color : 'black',
        backgroundColor : "#2d83f3",
        borderRadius : 5,
        paddingHorizontal : '2%',
        paddingVertical : '1%',
    }
})

export default ObesityRegisterPage