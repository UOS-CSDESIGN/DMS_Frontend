import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type GenderProps = {
    onGenderChange : (gender : number) => void;
}

function PetGenderComponent({onGenderChange} : GenderProps){
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [neutral, setNeutral] = useState(false);
    const onChangeMale = useCallback(() => {
        setMale(true);
        setFemale(false);
        setNeutral(false);
        onGenderChange(1);
    }, [])
    const onChangeFemale = useCallback(() => {
        setFemale(true);
        setMale(false);
        setNeutral(false);
        onGenderChange(2);
    }, [])
    const onChangeNeutral = useCallback(() => {
        setNeutral(true);
        setMale(false);
        setFemale(false);
        onGenderChange(0);
    }, [])
    
    return(
        <View style = {styles.genderBox}>
            <CheckBox
                disabled = {false}
                value = {male}
                onValueChange= {onChangeMale}
            />
            <Text style = {styles.gender}>수컷</Text>
            <CheckBox
                disabled = {false}
                value = {female}
                onValueChange = {onChangeFemale}
            />
            <Text style = {styles.gender}>암컷</Text>
            <CheckBox
                disabled = {false}
                value = {neutral}
                onValueChange = {onChangeNeutral}
            />
            <Text style = {styles.gender}>중성</Text>
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

export default PetGenderComponent;