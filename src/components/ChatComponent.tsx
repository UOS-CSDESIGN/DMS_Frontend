import {View, Text, GestureResponderEvent, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { handlingonPress } from '../model/Community/slice/replySlice';


type ChatProps = {
    name : string;
    content: string;
    id: number;
    modifiedDate: string;
    onPressReChat : (event : GestureResponderEvent) => void;
    onPressRecommend : (event : GestureResponderEvent) => void;
    onPressOptions : (event : GestureResponderEvent) => void;
}

function ChatComponent(props: ChatProps) {
    const dispatch = useDispatch();

    return(
        <View style = {styles.ChatWrapper}>
            <View style = {styles.ChatTextWrapper}>
                <View style = {styles.ChatDescriptionWrapper}>
                    <Icon name = "person-sharp" size = {30} color = "black"/>
                    <Text>{props.name}</Text>
                </View>
                <View style={styles.ChatDescriptionWrapper}>
                    <Text>{props.modifiedDate}</Text>
                </View>
                <View style = {styles.ChatContentWrapper}>
                    <Text>{props.content}</Text>
                </View>
            </View>
            <View style = {styles.OptionWrapper}>
                <Pressable onPress={() => {
                    const id: number = props.id;
                    dispatch(handlingonPress(
                        {
                            id: id,
                            content:'',
                        }
                    ));
                    props.onPressReChat();
                }}>
                    <Icon name = 'chatbox' size = {18}/>
                </Pressable>
                <Pressable onPress = {props.onPressRecommend}>
                    <Icon name = "thumbs-up-outline" size = {18} color = "red"/>
                </Pressable>
                <Pressable onPress = {props.onPressOptions}>
                    <Icon name = "ellipsis-vertical-sharp" size = {18} color = "black"/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ChatWrapper : {

    },
    ChatTextWrapper : {
    },
    ChatDescriptionWrapper : {
        flexDirection : 'row',
    },
    ChatContentWrapper : {

    },
    OptionWrapper : {
        flexDirection : 'row',
    }
})

export default ChatComponent;