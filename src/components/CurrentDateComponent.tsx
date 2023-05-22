import moment from 'moment';
import 'moment/locale/ko';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function CurrentDate(){
    const [date, setDate] = useState<string>('');
    const currentDate = moment();
    const year = currentDate.format('YYYY');
    const month = currentDate.format('M');
    const day = currentDate.format('D');
    const dayName = currentDate.format('dddd');
    const FormDate = `${year}/${month}/${day}/${dayName}`;
    useEffect(() => {
        setDate(FormDate);
    },[])
    return(
        <View>
            <Text style = {styles.date}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    date : {
        fontSize : 16,
        fontWeight : '500',
        color : 'black',
    }
})

export default CurrentDate;