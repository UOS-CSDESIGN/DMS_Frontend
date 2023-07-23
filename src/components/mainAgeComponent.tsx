import { StyleSheet, Text, View } from "react-native";

type MainAgeProps = {
    age : number;
}

function MainAge(props : MainAgeProps){
    return(
        <View style = {styles.AgeWrapper}>
            <Text>나이 : </Text>
            <Text style = {styles.AgeText}>{props.age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AgeWrapper : {
        flexDirection : 'row',
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    AgeText : {
        color : 'black',
    }
})

export default MainAge;