import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import {View, Text, StyleSheet} from 'react-native'
import ObesityTimeComponent from "../components/ObesityTimeComponent";
import { useCallback, useEffect, useState } from "react";
import DropDownComponent from "../components/DropDownComponent";

type ObesityTimeScreenProps = NativeStackScreenProps<RootStackParamList, 'ObesityTimePage'>

function ObesityTimePage({navigation} : ObesityTimeScreenProps){
    const [obesityData, setObesityData] = useState<Array<{label : string, value : string}>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [items, setItems] = useState<Array<{label : string, value : string}>>([]);
    const text = "연도 선택"
    const [selectedYear, setSelectedYear] = useState<string>('');
    useEffect(() => {
        const data = ["2022-12-10 1회차", "2022-12-17 2회차", "2023-05-03 1회차", "2023-05-10 2회차",
         "2023-05-17 3회차", "2023-05-24 4회차", "2023-05-31 5회차"];
        const items = data.map((item) => {
            const [date, count] = item.split(' ');
            const year = date.split('-')[0];
            return{
                label : year,
                value : count
            }
        })
        setObesityData(items);
    },[])

    useEffect(() => {
        const year = Array.from(new Set(obesityData.map((data) => data.label)));
        const years = year.map(label => {
            const value = obesityData.find(item => item.label === label)?.value;
            return {label, value};
        })
        setItems(prevItems => [
            ...prevItems,
            {label : "2022", value : "1회차"},
            {label : "2023", value : "2회차"}
        ]);
        console.log(items);
    },[obesityData])

    return(
        <View style = {styles.ObesityTimePageWrapper}>
            <View style = {styles.ObesityTimePageNameWrapper}>
                <Text style = {styles.ObesityTimePageNameText}>회차 선택</Text>
            </View>
            <View style = {styles.ObesityTimeDescriptionWrapper}>
                <Text style = {styles.ObesityTimeDescriptionText}>연도와 회차를 선택해 주세요.</Text>
            </View>
            <View style = {styles.ObesityTimeWrapper}>
                <DropDownComponent
                    open = {open}
                    setOpen = {setOpen}
                    items = {obesityData}
                    setItems = {setObesityData}
                    selectedItem = {selectedYear}
                    setSelectedItem={setSelectedYear}
                    text = {text}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ObesityTimePageWrapper : {
        paddingHorizontal : '5%',
        paddingVertical : '5%',
        backgroundColor : 'snow',
    },
    ObesityTimePageNameWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : '5%',
    },
    ObesityTimePageNameText : {
        color : 'black',
        fontSize : 20,
        fontWeight : '600',
    },
    ObesityTimeDescriptionWrapper : {
        flexDirection : 'row',
        paddingHorizontal : '3%'
    },
    ObesityTimeDescriptionText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 16,
    },
    ObesityTimeWrapper : {

    }
})

export default ObesityTimePage;