import {View, Text, Pressable, GestureResponderEvent, StyleSheet} from 'react-native';

type PostAddProps = {
    onPress : (event : GestureResponderEvent) => void;
}

function PostAddButtonComponent(props : PostAddProps){
    return(
        <View style = {styles.PostAddWrapper}>
            <Pressable onPress = {props.onPress}>
                <Text style = {styles.PostAddText}>글쓰기</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    PostAddWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 7,
        borderWidth : 1,
        marginHorizontal : '35%',
        paddingVertical : '1.5%',
        backgroundColor : "#e4b671"
    },
    PostAddText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 16
    }
})

export default PostAddButtonComponent;