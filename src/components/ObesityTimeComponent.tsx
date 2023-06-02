import {View, Text, StyleSheet} from 'react-native';
import React from 'react'

type ObesityTimeProps = {
    obesityData : string[];
}

function ObesityTimeComponent(props : ObesityTimeProps){
    if(props.obesityData.length ===0){
        return null;
    }
    return(
        <View style = {styles.ObesityTimeWrapper}>
            {props.obesityData.map((data : string, index : number) => (
                <Text
                 key = {index}
                 style = {styles.ObesityTimeText}>{data}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    ObesityTimeWrapper : {
        paddingHorizontal : '5%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    ObesityTimeText : {
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 5,
        paddingVertical : '1%',
    }
})

export default ObesityTimeComponent;