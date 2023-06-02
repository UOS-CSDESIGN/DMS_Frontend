import {View, Text, StyleSheet, Image} from 'react-native';
import Survey from './SurveyComponent';


type ObesityDetailListProps = {
    sidePicture : string;
    upPicture : string;
    weight : string;
    obesity : number;
}

function ObesityDetailListComponent(props : ObesityDetailListProps){
    return(
        <View style = {styles.DetailWrapper}>
            <View style = {styles.PictureWrapper}>
                {props.sidePicture ? <Image
                    source = {{uri : props.sidePicture}}
                    style = {styles.Image}/> : null}
                {props.upPicture ?<Image
                    source = {{uri : props.upPicture}}
                    style = {styles.Image}/> : null}
            </View>
            <View style = {styles.DetailDescriptionWrapper}>
                <View style = {styles.DetailDescriptionInnerWrapper}>
                    <Text style = {styles.Description}>몸무게</Text>
                    <Text style = {styles.Text}>{props.weight}</Text>
                </View>
                <View style = {styles.DetailDescriptionInnerWrapper}>
                    <Text style = {styles.Description}>비만도</Text>
                    <Text style = {styles.Text}>{props.obesity}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PictureWrapper : {
        flexDirection : 'row',
    },
    Image : {
        width : 200,
        height : 200
    },
    DetailWrapper : {

    },
    DetailDescriptionWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    DetailDescriptionInnerWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    Description : {
        color : 'black',
        fontSize : 20,
        fontWeight : '600',
    },
    Text : {
        color : 'black',
        fontSize : 18,
        fontWeight : '600',
    },
    SurveyWrapper : {

    }
})

export default ObesityDetailListComponent;