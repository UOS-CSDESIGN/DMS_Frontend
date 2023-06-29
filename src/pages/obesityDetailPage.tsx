import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../AppInner';
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput, Alert} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import ObesityDetailListComponent from "../components/ObesityDetailListComponent";
import ObesityDateComponent from "../components/ObesityDateComponent";

type ObesityDetailScreenProps = DrawerScreenProps<RootDrawerParamList, 'ObesityDetailPage'>

function ObesityDetailPage({navigation} : ObesityDetailScreenProps){
    const [date, setDate] = useState<string>('2023/05/29');
    const onChangeDate = useCallback(() => {

    },[])
    const [sidePicture, setSidePicture] = useState<string>('');
    const [upPicture, setUpPicture] = useState<string>('');
    const [weight ,setWeight] = useState<string>('0');
    const [obesity, setObesity] = useState<number>(0);
    useEffect(() => {
        //가장 최신 날짜의 모든 비만도 데이터를 업데이트해줌
    },[date])

    const [surveyIndex, setSurveyIndex] = useState<number[]>([]);

    const toDate = useCallback(() => {
        navigation.navigate("ObesityTimePage")
    },[navigation])

    const onDelete = useCallback(() =>{
        Alert.alert(
            '데이터 삭제',
            '데이터를 삭제하시겠습니까?',
            [
                {
                  text: '아니오',
                  style: 'cancel',
                },
                {
                  text: '예',
                  onPress: () => {
                    // 데이터 삭제 처리
                  },
                },
              ],
              {cancelable : false}
              )
    },[])
    return(
        <ScrollView style = {styles.ObesityDetailPage}>
            <View style = {styles.DateWrapper}>
                <Pressable onPress = {toDate}>
                    <ObesityDateComponent date = {date} weight = {weight} onChangeDate={onChangeDate}/>
                </Pressable>
            </View>
            <View style = {styles.ObesityAndWeightWrapper}>
                <ObesityDetailListComponent
                 sidePicture = {sidePicture}
                 upPicture = {upPicture}
                 weight = {weight}
                 obesity = {obesity}/>
            </View>
            <View style = {styles.ObesitySurveyWrapper}>
                <View style = {styles.ObesitySurveyInnerWrapper}>
                    <Text style = {styles.SurveyDescription}>1. 갈비뼈가 만져지나요?</Text>
                    <Text>{surveyIndex[0]}</Text>
                </View>
                <View style = {styles.ObesitySurveyInnerWrapper}>
                    <Text style = {styles.SurveyDescription}>2. 갈비뼈가 보이나요?</Text>
                    <Text>{surveyIndex[0]}</Text>
                </View>
                <View style = {styles.ObesitySurveyInnerWrapper}>
                    <Text style = {styles.SurveyDescription}>3. 배를 만졌을 때 지방이 어느정도 느껴지나요?</Text>
                    <Text>{surveyIndex[0]}</Text>
                </View>
                <View style = {styles.ObesitySurveyInnerWrapper}>
                    <Text style = {styles.SurveyDescription}>4. 위에서 봤을 때 허리가 보이나요?</Text>
                    <Text>{surveyIndex[0]}</Text>
                </View>
                <View style = {styles.ObesitySurveyInnerWrapper}>
                    <Text style = {styles.SurveyDescription}>5. 옆에서 보았을 때 허리가 보이나요?</Text>
                    <Text>{surveyIndex[0]}</Text>
                </View>
            </View>
            <View style = {styles.DeleteButtonWrapper}>
                <Pressable onPress = {onDelete}>
                    <Text style = {styles.DeleteButtonText}>삭제하기</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ObesityDetailPage : {
        paddingHorizontal : '5%',
    },
    DateWrapper : {
    },
    ObesityAndWeightWrapper : {
        paddingHorizontal : '5%',
        paddingVertical : '5%'
    },
    ObesitySurveyWrapper :{
        paddingVertical : '5%',
    },
    ObesitySurveyInnerWrapper : {
        flexDirection : 'row',
        paddingVertical : '3%'
    },
    SurveyDescription : {
        color : 'black',
        fontSize : 15,
    },
    DeleteButtonWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    DeleteButtonText : {
        backgroundColor : "#2d83f3",
        paddingHorizontal : '2%',
        paddingVertical : '1%',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : 'black',
    }
})

export default ObesityDetailPage;