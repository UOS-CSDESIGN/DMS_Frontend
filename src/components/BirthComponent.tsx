import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';


function BirthComponent( ){
    const [date, setDate] = useState(new Date());
    return(
        <DatePicker date = {date}
        onDateChange = {setDate}
        mode = "date"/>
    )
}

export default BirthComponent;