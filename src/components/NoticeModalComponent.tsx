import { useState } from "react";
import { Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function NoticeModal(){
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const showNoticeModal = () => {
        setModalVisible(true);
    }
    return(
        <View>
            <Pressable onPress = {showNoticeModal}>
                <Icon name = 'bell' size = {20} color = "black"/>
            </Pressable>
        </View>
    )
}



export default NoticeModal;