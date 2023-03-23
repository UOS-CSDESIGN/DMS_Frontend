import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type GenderProps = {
    onGenderChange : (gender : number) => void;
}

function GenderComponent({onGenderChange} : GenderProps){
    const [etc, setEtc] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const onChangeEtc = useCallback(() => {
        setEtc(true);
        setMale(false);
        setFemale(false);
        onGenderChange(0);
    }, [])
    const onChangeMale = useCallback(() => {
        setMale(true);
        setFemale(false);
        setEtc(false);
        onGenderChange(1);
    }, [])
    const onChangeFemale = useCallback(() => {
        setFemale(true);
        setMale(false);
        setEtc(false);
        onGenderChange(2);
    }, [])
    
    return(
        <View style = {styles.genderBox}>
            <CheckBox
                disabled = {false}
                value = {etc}
                onValueChange = {onChangeEtc}
            />
            <Text style = {styles.gender}>기타</Text>
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

export default GenderComponent;