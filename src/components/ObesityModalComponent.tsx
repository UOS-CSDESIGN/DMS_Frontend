import { Text, View, Pressable, StyleSheet, ScrollView, TextInput, GestureResponderEvent} from 'react-native'
import Modal from 'react-native-modal'
import { useCallback, useEffect, useState } from "react";

interface ObesityModalProps{
    modalVisible : boolean;
    closeModal : () => void;
    onSubmit : (event : GestureResponderEvent) => void;
    frequency : number;
    onChangeButton1 : (event : GestureResponderEvent) => void;
    onChangeButton2 : (event : GestureResponderEvent) => void;
    onChangeButton3 : (event : GestureResponderEvent) => void;
    onChangeButton4 : (event : GestureResponderEvent) => void;
}
function ObesityModal(props : ObesityModalProps){
    return(
        <Modal
            style = {styles.Modal}
            isVisible={props.modalVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropColor='#f5f4f4'
            onBackButtonPress = {props.closeModal}
            onBackdropPress = {props.closeModal}>
            <View style = {styles.frequencyDescriptionWrapper}>
                <Text style = {styles.Text}>회차</Text>
            </View>
            <View style = {styles.frequencyWrapper}>
                <Pressable
                 onPress = {props.onChangeButton1}
                 style = {styles.frequencyButton}>
                    <Text style = {styles.frequencyText}>10회</Text>
                </Pressable>
                <Pressable
                 onPress = {props.onChangeButton2}
                 style = {styles.frequencyButton}>
                    <Text style = {styles.frequencyText}>20회</Text>
                </Pressable>
                <Pressable
                 onPress = {props.onChangeButton3}
                 style = {styles.frequencyButton}>
                    <Text style = {styles.frequencyText}>30회</Text>
                </Pressable>
                <Pressable
                 onPress = {props.onChangeButton4}
                 style = {styles.frequencyButton}>
                    <Text style = {styles.frequencyText}>전체</Text>
                </Pressable>
            </View>
            <View style ={styles.submitWrapper}>
                <Pressable
                 style = {styles.submitButton}
                 onPress = {props.onSubmit}>
                    <Text style = {styles.Text}>확인</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    Modal: {
        width: '80%', 
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        margin: '50%', 
    },
    Text: {
        fontWeight: '600',
        fontSize: 18,
    },
    frequencyDescriptionWrapper : {
        justifyContent : 'center',
        marginLeft : '6.5%',
        marginVertical : '3%',
    },
    frequencyWrapper: {
        flexDirection: 'row',
        marginVertical : '3%',
    },
    frequencyButton : {
        backgroundColor : "#f3c315a2",
        marginHorizontal : '6.5%',
        borderWidth : 1,
        borderRadius : 5,
    },
    frequencyText : {
        fontSize : 16,
        fontWeight : '500',
    },
    submitWrapper : {
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : '3%',
    },
    submitButton:{
        backgroundColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
    },
    submitButtonActive:{
        backgroundColor : 'blue',
    }
})


export default ObesityModal