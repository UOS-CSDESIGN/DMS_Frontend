import { DrawerScreenProps } from "@react-navigation/drawer"
import { RootDrawerParamList } from "../AppInner"
import {View, Text, Pressable, StyleSheet, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons'
import { useCallback, useEffect, useState } from "react"
import BoardComponent from "../components/BoardComponent"
import { Borad } from "../model/Community/Category"
import getCategory from "../model/Community/getCategory"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../model"

type CommunityScreenProps = DrawerScreenProps<RootDrawerParamList, 'CommunityPage'>


function CommunityPage({navigation} : CommunityScreenProps){
    const [boardData, setBoarddData] = useState<Borad[]>([]);
    const [isSet, setIsSet] = useState<boolean>(false);
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.board.items);
    const onSearch = useCallback(() => {

    },[])
    const toPost = useCallback(() => {
        navigation.navigate("PostBoardPage")
    },[navigation])

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
        setBoarddData(list.map((item: Borad) => (
            { boardId: item.boardId, boardName: item.boardName }
        )));
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
                {boardData.map((breed) => (
                    <BoardComponent
                     name = {breed.boardName}
                     onPress = {toPost}/>
                ))}
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
    },
})

export default CommunityPage