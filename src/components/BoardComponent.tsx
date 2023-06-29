import { Text, View, Pressable, StyleSheet, GestureResponderEvent} from 'react-native'

type BoardProps = {
    name : string;
    onPress : (event : GestureResponderEvent) => void;
}

function BoardComponent(props : BoardProps){
    return(
        <View style = {styles.BoardWrapper}>
            <Pressable onPress = {props.onPress}>
                <Text style = {styles.Text}>{props.name}게시판</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    BoardWrapper : {
        paddingVertical : '1%',
    },
    Text : {
        color : 'black',
        fontWeight : '600',
    }
})

export default BoardComponent