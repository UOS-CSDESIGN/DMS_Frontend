import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

let gender = 0;

function GenderComponent(){
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const onChangeMale = useCallback(() => {
        setMale(true);
        setFemale(false);
        gender = 1;
    }, [])
    const onChangeFemale = useCallback(() => {
        setFemale(true);
        setMale(false);
        gender = 2;
    }, [])
    
    return(
        <View style = {styles.genderBox}>
            <CheckBox
                disabled = {false}
                value = {male}
                onValueChange= {onChangeMale}
            />
            <Text style = {styles.gender}>남성</Text>
            <CheckBox
                disabled = {false}
                value = {female}
                onValueChange = {onChangeFemale}
            />
            <Text style = {styles.gender}>여성</Text>
        </View>
    )
}

const styles = ({
    genderBox : {
        flexDirection : 'row',
    },
    gender : {
        marginTop : 5,
    }
})

export {GenderComponent, gender};