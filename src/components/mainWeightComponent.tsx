import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

type MainWeightProps = {
    weight : number;
}

function MainWeight(props : MainWeightProps){
    return(
        <View style = {styles.WeightWrapper}>
            <Text>몸무게 : </Text>
            <Text style = {styles.WeightText}>{props.weight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    WeightWrapper : {
        flexDirection : 'row',
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    WeightText : {
        color : 'black',
    }
})

export default MainWeight;