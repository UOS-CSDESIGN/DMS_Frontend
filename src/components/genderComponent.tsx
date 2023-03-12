import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type GenderProps = {
    onGenderChange : (gender : number) => void;
}

function GenderComponent({onGenderChange} : GenderProps){
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const onChangeMale = useCallback(() => {
        setMale(true);
        setFemale(false);
        onGenderChange(1);
    }, [])
    const onChangeFemale = useCallback(() => {
        setFemale(true);
        setMale(false);
        onGenderChange(2);
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

export default GenderComponent;