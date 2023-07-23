import { Image, Text, View } from "react-native";
import Picture from "./PictureComponent";
import { StyleSheet } from "react-native";

type MainPictureProps = {
    picture : string;
    onChangePicture : (picture : string) => void;
}

function MainPicture(props : MainPictureProps){
    return(
        <View style = {styles.PictureWrapper}>
            <Text>사진</Text>
            <Picture onPictureSelected={props.onChangePicture}/>
            {props.picture ? <Image
            source = {{uri : props.picture}}
            style = {styles.ImageWrapper}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    PictureWrapper : {
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    ImageWrapper : {
        width : 200,
        height : 200,
    }
})

export default MainPicture;