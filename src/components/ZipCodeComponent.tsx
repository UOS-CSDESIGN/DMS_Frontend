import React, { useState } from 'react';
import {View, StyleSheet, Text, Modal, Pressable} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';


interface AddressProps{
    onAddressSelected : (address : {
        zonecode : string,
        street : string;
    }) => void;
}
function ZipCode({onAddressSelected} : AddressProps){
    const [modal, setModal] = useState(false);
    const getAddressData = (data : any) => {
        let zonecode = '';
        let address = '';
        let buildingName = '';
        if (data.zonecode) {
            zonecode = data.zonecode;
          }
          if (data.address) {
            address = data.address;
          }
          if (data.buildingName) {
            buildingName = data.buildingName;
          }
          const street = `${address}${buildingName ? ` (${buildingName})` : ''}`;
          onAddressSelected({zonecode, street});
          setModal(false);
    }

    return(
        <View style = {styles.zipCode}>
            <Pressable 
              style = {styles.zipCodeZone}
              onPress = {() => setModal(true)}>
            <Text>검색</Text>
            </Pressable>
            <Modal 
              visible = {modal}
              animationType= "slide">
                <Postcode
                style = {styles.form}
                jsOptions={{ animation: true}}
                onSelected={data => getAddressData(data)}
                onError={function (error: unknown): void {
                throw new Error('Function not implemented.');
                }}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    zipCode : {
        marginRight : 322,
    },
    zipCodeZone : {
        backgroundColor : 'gray',
        borderRadius : 5,
    },
    form : {
        width : 320,
        height : 320,
    },
})

export default ZipCode;