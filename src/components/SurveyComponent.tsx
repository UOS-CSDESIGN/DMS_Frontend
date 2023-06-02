import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View } from 'react-native';

type SurveyProps = {
    surveyText : string;
    surveyIndex : number;
    onChangeSurveyIndex : (index : number) => void;
}

function Survey(props : SurveyProps){
    return(
        <View style = {styles.SurveyWrapper}>
            <Text style = {styles.SurveyText}>{props.surveyText}</Text>
            <View style = {styles.SliderWrapper}>
                <Slider
                    style = {{width : 200, height : 40}}
                    minimumValue = {0}
                    maximumValue = {5}
                    step = {1}
                    value = {props.surveyIndex}
                    onValueChange = {props.onChangeSurveyIndex}/>
                <Text style = {styles.IndexText}>{props.surveyIndex}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SurveyWrapper : {
        paddingHorizontal : '5%',
        paddingVertical : '1%',
    },
    SliderWrapper : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    SurveyText : {
        color : 'black',
        fontWeight : '600',
        fontSize : 16,
    },
    IndexText : {
        marginLeft : '5%',
        color : 'black',
        fontSize : 16,
        fontWeight : '600',
    }
})

export default Survey;