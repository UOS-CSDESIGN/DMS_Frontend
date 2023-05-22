import {View, Text, Pressable, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

type ObesityDateProps = {
    date : string[];
    weight : string[];
    onChangeDate : () => void;
}

function ObesityDateComponent(props : ObesityDateProps){
    return(
    <View style = {styles.DateWrapper}>
        <Pressable
        style = {styles.dateIcon}
        onPress = {props.onChangeDate}>
            <Icon name = "chevron-left" color = "black" size = {22}/>
        </Pressable>
        <Text>{props.date}</Text>
        <Pressable
        style = {styles.dateIcon}
        onPress = {props.onChangeDate}>
            <Icon name = "chevron-right" color = "black" size = {22}/>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    DateWrapper : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    dateIcon : {
        marginHorizontal : "2%",
    }
})

export default ObesityDateComponent;