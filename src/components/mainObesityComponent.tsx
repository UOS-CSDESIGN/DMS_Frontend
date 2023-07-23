import { StyleSheet, Text, View } from "react-native";

type MainObesityProps = {
    obesity : number;
}

function MainObesity(props : MainObesityProps){
    return(
        <View style = {styles.ObesityWrapper}>
            <Text>비만도 : </Text>
            <Text style = {styles.ObesityText}>{props.obesity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ObesityWrapper : {
        flexDirection : 'row',
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    ObesityText : {
        color : 'black',
    }
})

export default MainObesity;