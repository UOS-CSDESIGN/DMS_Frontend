import React, {useCallback, useState} from 'react';
import {Button , Pressable, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import Picture from './PictureComponent';

interface IModal{
    show : boolean;
    handleClose : () => void;
}

function AnimalModal({show, handleClose} : IModal){
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    let image = {
        imageUrl : "",
        imageName : "",
    }

    const onChangeName = useCallback((text:string) => {
        setName(text.trim())
    }, []);
    const onChangeBirth = useCallback((text:string) =>{
        setBirth(text.trim())
    }, []);
    const onChangeGender = useCallback((text:string) => {
        setGender(text.trim())
    }, []);
    const onChangeBreed = useCallback((text:string) => {
        setBreed(text.trim())
    }, []);
    const onChangeWeight = useCallback((text:string) => {
        setWeight(text.trim())
    }, []);

    const [visible, setVisible] = useState(false);
    const handleSave = () => {
        handleClose();
    }
    return(
        <Modal
            animationIn = "slideInUp"
            animationOut= "slideOutDown"
            isVisible = {show}
            onBackdropPress={() => handleClose()}
            onModalHide={handleClose}
            backdropColor= 'gray'>
            <View style = {styles.Modal}>
               <View style = {styles.wrapper}>
                 <Text style = {styles.text}>사진</Text>
                 <Pressable
                    onPress = {Picture}/>
              </View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>이름</Text>
                  <TextInput
                    style = {styles.textInput}
                    value = {name}
                    placeholder = "이름"
                    placeholderTextColor= "#666"
                    onChangeText={onChangeName}
                    clearButtonMode= "while-editing"
                    blurOnSubmit = {false}/>
              </View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>생일</Text>
                <TextInput
                    style = {styles.textInput}
                    value = {birth}
                    placeholder = "생일"
                    placeholderTextColor= "#666"
                    onChangeText={onChangeBirth}
                    clearButtonMode= "while-editing"
                    blurOnSubmit = {false}/>
              </View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>성별</Text>
                <TextInput
                    style = {styles.textInput}
                    value = {gender}
                    placeholder = "성별"
                    placeholderTextColor= "#666"
                    onChangeText={onChangeGender}
                    clearButtonMode= "while-editing"
                    blurOnSubmit = {false}/>
              </View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>견종</Text>
                <TextInput
                    style = {styles.textInput}
                    value = {breed}
                    placeholder = "견종"
                    placeholderTextColor= "#666"
                    onChangeText={onChangeBreed}
                    clearButtonMode= "while-editing"
                    blurOnSubmit = {false}/>
              </View>
              <View style = {styles.wrapper}>
                <Text style = {styles.text}>몸무게</Text>
                <TextInput
                    style = {styles.textInput}
                    value = {weight}
                    placeholder = "몸무게"
                    placeholderTextColor= "#666"
                    onChangeText={onChangeWeight}
                    clearButtonMode= "while-editing"
                    blurOnSubmit = {false}/>
              </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    Modal : {
        backgroundColor : "white",
        borderRadius : 20,
    },
    wrapper : {
        flexDirection : "row",
        paddingLeft : 10,
        marginVertical : 5,
    },
    text : {
        marginTop : 14,
        borderBottomWidth : StyleSheet.hairlineWidth,
    },
    textInput : {
        marginLeft : 10,
    }
})

export default AnimalModal