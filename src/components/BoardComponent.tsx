import { Text, View, Pressable, StyleSheet, GestureResponderEvent} from 'react-native'
import { handlingBoradPress } from '../model/Community/slice/postPreviewSlice';
import { useDispatch } from 'react-redux';
import { Board } from '../model/Community/Category';

type BoardProps = {
    boardData: Board;
    onPress : (event : GestureResponderEvent) => void;
}

function BoardComponent(props: BoardProps) {
    const dispatch = useDispatch();
    return(
        <View style = {styles.BoardWrapper}>
            <Pressable
                onPress={() => {
                    dispatch(handlingBoradPress(
                        {
                            id: props.boardData.boardId,
                            name: props.boardData.boardName
                        }
                    ));
                    props.onPress();
                }}
            >
                <Text style = {styles.Text}>{props.boardData.boardName}</Text>
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