import { DrawerScreenProps } from "@react-navigation/drawer"
import { RootParamList } from "../AppInner"
import {View, Text, Pressable, StyleSheet, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons'
import { useCallback, useEffect, useState } from "react"
import BoardComponent from "../components/BoardComponent"
import { Board } from "../model/Community/Category"
import getCategory from "../model/Community/getCategory"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../model"

type CommunityScreenProps = DrawerScreenProps<RootParamList, 'CommunityPage'>


function CommunityPage({navigation} : CommunityScreenProps){
    const [boardData, setBoarddData] = useState<Board[]>([]);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    const [isSet, setIsSet] = useState<boolean>(false);
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.board.items);
    const onSearch = useCallback(() => {

    },[])
    const toPost = useCallback(() => {
        navigation.navigate("PostBoardPage");
    },[navigation])

    const onChangeBookMark = useCallback(() => {
        setIsBookMark(true);
    },[])

    useEffect(() => {
        async function func() {
            await getCategory('', dispatch)
                .then((res) => {
                    setIsSet(true);
                })
                .catch((error) => {
                    setIsSet(false);
                });
        }
        func();
    }, []);

    useEffect(()=> { 
        setBoarddData(list.map((item: Board) => (
            { boardId: item.boardId, boardName: item.boardName }
        )));
        setIsSet(false);
    }, [isSet]);

    return(
        <ScrollView style = {styles.CommunityPage}>
            <View style = {styles.LogoAndSearchWrapper}>
                <View style = {styles.LogoWrapper}>
                    <Text style = {styles.LogoText}>8AM</Text>
                </View>
                <View style = {styles.SearchWrapper}>
                    <Pressable onPress = {onSearch}>
                        <Icon name = "search" size = {30} color = "black"/>
                    </Pressable>
                </View>
            </View>
            <View style = {styles.BoardWrapper}>
                <View style = {styles.BoardInnerWrapper}>
                    {boardData.map((breed) => (
                        <BoardComponent
                        isBookMark = {isBookMark}
                        onPressBookMark = {onChangeBookMark}
                        name = {breed.boardName}
                        onPress = {toPost}
                        key = {breed.boardId}/>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    CommunityPage : {
        backgroundColor : 'snow',
        paddingHorizontal : '5%',
        paddingVertical : '3%'
    },
    LogoAndSearchWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : '3%',
    },
    LogoWrapper : {
        paddingLeft : '3%',
    },
    SearchWrapper : {
        paddingRight : '3%',
    },
    LogoText : {
        color : 'black',
        fontSize : 16,
        fontWeight : '500'
    },
    BoardWrapper : {
        paddingVertical : '3%',
        borderWidth : 1,
        borderRadius : 5,
        borderColor : 'gray'
    },
    BoardInnerWrapper : {
        paddingHorizontal : '4%',
    }
})

export default CommunityPage