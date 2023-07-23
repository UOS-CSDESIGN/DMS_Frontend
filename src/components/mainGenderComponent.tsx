import { StyleSheet, Text, View } from "react-native";

type MainGenderProps = {
    gender : string;
}

function MainGender(props : MainGenderProps){
    return(
        <View style = {styles.GenderWrapper}>
            <Text>성별 : </Text>
            <Text style = {styles.GenderText}>{props.gender}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    GenderWrapper : {
        flexDirection : 'row',
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    GenderText : {
        color : 'black',
    }
})

export default MainGender;