import React, {useCallback, useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

interface BirthProps {
    onBirthSelected : (birth : string) => void;
}

function BirthComponent({onBirthSelected} : BirthProps){
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState<boolean>(false);
    const showModal = useCallback(() => {
        setVisible(true);
    }, []);
    const onChangeDate = useCallback((selectedDate : Date) => {
        const year = selectedDate.getFullYear();
        const month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
        const date = ("0" + selectedDate.getDate()).slice(-2);
        const birth = `${year}-${month}-${date}`;
        onBirthSelected(birth);
        setDate(selectedDate);
        setVisible(false);
    }, [onBirthSelected])
    return(
        <View>
          <Pressable onPress = {showModal}>
            <Icon name = 'calendar' size = {20} color = "#000"/>
          </Pressable>
          <Modal style = {styles.modal}
            isVisible = {visible}>
            <DatePicker date = {date}
            onDateChange = {setDate}
            mode = "date"/>
            <Pressable 
            onPress = {() => onChangeDate(date)}
            style = {styles.confirmButton}>
                <Text style = {styles.confirmButtonText}>확인</Text>
            </Pressable>
          </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal : {
        height : 300,
        width : '80%',
        justifyContent : 'center',
        padding : 20,
    },
    confirmButton : {
        marginTop : 20,
        backgroundColor : 'blue',
        padding : 10,
        borderRadius : 5,
        alignItems : 'center',
    },
    confirmButtonText : {
        color : 'white',
    }
})

export default BirthComponent;