import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import ObesityDetailListComponent from "../components/ObesityDetailListComponent";
import ObesityDateComponent from "../components/ObesityDateComponent";

type ObesityDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'ObesityDetailPage'>

function ObesityDetailPage({navigation} : ObesityDetailScreenProps){
    const [date, setDate] = useState<string[]>([]);
    const onChangeDate = useCallback(() => {

    },[])
    const [weight ,setWeight] = useState<string[]>([]);
    const [weightChange, setWeightChange] = useState<string>('');
    const [obesity, setObesity] = useState<number[]>([]);
    useEffect(() => {
        //날짜가 바뀌면 몸무게 바꿔줌
        //날짜가 바뀌면 몸무게변화량 바꿔줌
        //날짜가 바뀌면 비만도 바꿔줌
    },[date])
    return(
        <View>
            <View style = {styles.DateWrapper}>
                <ObesityDateComponent date = {date} weight = {weight} onChangeDate={onChangeDate}/>
            </View>
            <ObesityDetailListComponent weight={weight} weightChange={weightChange} obesity={obesity}/>
        </View>
    )
}

const styles = StyleSheet.create({
    DateWrapper : {

    }
})

export default ObesityDetailPage;