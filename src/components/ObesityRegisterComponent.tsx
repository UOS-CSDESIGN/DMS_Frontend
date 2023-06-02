import Picture from "./PictureComponent"
import { Image, Keyboard, StyleSheet, TextInput } from "react-native";
import {View, Text} from 'react-native';
import { Dimensions } from "react-native";

type ObesityRegisterProps = {
    sidePicture : string;
    upPicture : string;
    weight : string;
    onChangeSidePicture : (picture : string) => void;
    onChangeUpPicture : (picture : string) => void;
    onChangeWeight : (weight : string) => void;
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
function ObesityRegister(props : ObesityRegisterProps){
    return(
        <View style = {styles.ObesityRegisterPage}>
            <View style = {styles.PictureTextWrapper}>
                <Text style = {styles.Text}>사진</Text>
            </View>
            <View style = {styles.PictureWrapper}>
                <View style = {styles.PictureInnerWrapper}>
                    <Text style = {styles.Description}>옆사진</Text>
                    {props.sidePicture? 
                    <Image
                    source = {{uri : props.sidePicture}}
                    style = {styles.Image}/> :
                    <Picture onPictureSelected={props.onChangeSidePicture}/>}
                </View>
                <View style = {styles.PictureInnerWrapper}>
                    <Text style = {styles.Description}>윗사진</Text>
                    {props.upPicture?
                    <Image
                    source = {{uri : props.upPicture}}
                    style = {styles.Image}/> :
                    <Picture onPictureSelected={props.onChangeUpPicture}/>}
                </View>
            </View>
            <View style = {styles.WeightTextWrapper}>
                <Text style = {styles.Text}>몸무게</Text>
                <TextInput
                    style = {styles.TextInput}
                    onChangeText = {props.onChangeWeight}
                    placeholder = "몸무게"
                    placeholderTextColor="gray"
                    keyboardType= "decimal-pad"
                    value = {props.weight}
                    clearButtonMode="while-editing"
                    onSubmitEditing={() => Keyboard.dismiss()}
                    blurOnSubmit={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ObesityRegisterPage : {
        paddingVertical : '5%',
        paddingHorizontal : '5%',
        backgroundColor : 'snow',
    },
    PictureTextWrapper : {
        justifyContent : 'center',
        paddingHorizontal : '1%',
        paddingVertical : '2%',
    },
    Text : {
        fontSize : 20,
        color : 'black',
        fontWeight : '600',
    },
    PictureWrapper : {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingVertical : '1%',
    },
    Description : {
        fontSize : 16,
        color : 'black',
        fontWeight : '600',
    },
    PictureInnerWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : width/10,
    },
    Image : {
        width : width/3,
        height : height/5,
    },
    WeightTextWrapper : {
        paddingHorizontal : '1%',
        paddingVertical : '3%',
    },
    TextInput : {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor : 'white',
        borderRadius : 10,
        marginTop : '4%',
        marginRight : '60%',
    },
    SurveyWrapper : {
        paddingHorizontal : '1%',
        paddingVertical : '3%',
    },
    SurveyDescriptionWrapper : {
        paddingBottom : '3%',
    }
})

export default ObesityRegister;