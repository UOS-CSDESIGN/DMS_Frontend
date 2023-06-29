import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import {View, Text, StyleSheet} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import DropDownComponent from "../components/DropDownComponent";

type ObesityTimeScreenProps = NativeStackScreenProps<RootStackParamList, 'ObesityTimePage'>

function ObesityTimePage({navigation} : ObesityTimeScreenProps){
    const [obesityData, setObesityData] = useState<Array<{label : string, value : string}>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [items, setItems] = useState<Array<{label : string, value : string}>>([]);
    const text = "연도 선택"
    const [value, setValue] = useState<string[]>([]);
    useEffect(() => {
        const data = ["2020-12-10 1회차", "2021-12-17 2회차", "2022-05-03 3회차", "2023-05-10 4회차"];
        const items = data.map((item) => {
            const [date, count] = item.split(' ');
            const year = date.split('-')[0];
            return{
                label : year,
                value : count
            }
        })
        console.log(items);
        setItems(items);
    },[])

    useEffect(() => {
        const year = Array.from(new Set(items.map((data) => data.label)));
        setValue(year);
    },[obesityData])

    return(
        <View style = {styles.ObesityTimePageWrapper}>
            <View style = {styles.ObesityTimePageNameWrapper}>
                <Text style = {styles.ObesityTimePageNameText}>회차 선택</Text>
            </View>
            <View style = {styles.ObesityTimeDescriptionWrapper}>
                <Text style = {styles.ObesityTimeDescriptionText}>연도를 선택해주세요</Text>
            </View>
            <View style = {styles.ObesityTimeWrapper}>
                <DropDownComponent
                    open = {open}
                    setOpen = {setOpen}
                    items = {items}
                    setItems = {setItems}
                    value = {value}
                    setValue={setValue}
                    text = {text}
                    />
            </View>
            <View style = {styles.ObesityTimeDescriptionWrapper}>
                <View>
                    <Text style = {styles.ObesityTimeDescriptionText}>달을 선택해주세요</Text>
                </View>
                <View style = {styles.ObesityTimeWrapper}>
                    {/*<DropDownComponent
                     open = {open}
                     setOpen = {setOpen}
                     items = {items}
                     setItems = {setItems}
                     value = {value}
                     setValue = {setValue}
                     text = {text}
                    /> */}
                </View>
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
        paddingHorizontal : '3%',
        paddingVertical : '2%',
    },
    ObesityTimeDescriptionText : {
        color : 'black',
        fontWeight : '500',
        fontSize : 16,
    },
    ObesityTimeWrapper : {
        paddingLeft : '3%',
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : '2%',
    },
})

export default ObesityTimePage;