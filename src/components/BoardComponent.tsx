import { Text, View, Pressable, StyleSheet, GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { handlingBoradPress } from '../model/Community/slice/postPreviewSlice';
import { useDispatch } from 'react-redux';
import { Board } from '../model/Community/Category';

type BoardProps = {
    boardData: Board;
    name : string;
    isBookMark : boolean
    onPressBookMark : (event : GestureResponderEvent) => void;
    onPress : (event : GestureResponderEvent) => void;
}

function BoardComponent(props: BoardProps) {
    const dispatch = useDispatch();
    return(
        <View style = {styles.BoardWrapper}>
            <Pressable
             style = {styles.BookMarkWrapper}
             onPress = {props.onPressBookMark}>
                {props.isBookMark ?
                    <Icon name = "bookmark-alt" size = {18} color = "#ecde13"/> :
                    <Icon name = "bookmark" size = {18}/>}
            </Pressable>
            <Pressable
             onPress = {props.onPress}
             style = {styles.BoardInnerWrapper}>
                <Text style = {styles.Text}>{props.name}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    BoardWrapper : {
        paddingVertical : '1%',
        flexDirection : 'row',
        alignItems : 'center',
    },
    BookMarkWrapper : {
        paddingRight : '4%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    BoardInnerWrapper : {
        paddingVertical : '1%',
    },
    BookMarkIcon : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    Text : {
        color : 'black',
        fontWeight : '500',
        fontSize : 18,
    }
})

export default BoardComponent