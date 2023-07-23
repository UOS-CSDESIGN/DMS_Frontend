import { StyleSheet, Text, TextInput, View } from "react-native";

type MainNameProps = {
    name : string;
}

function MainName(props : MainNameProps){
    return(
        <View style = {styles.NameWrapper}>
            <View style = {styles.NameInnerWrapper1}>
                <Text style = {styles.NameDescriptionWrapper}>이름 : </Text>
            </View>
            <View style = {styles.NameInnerWrapper2}>
                <Text style = {styles.NameText}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NameWrapper : {
        backgroundColor : 'snow',
        paddingVertical : '1%',
    },
    NameDescriptionWrapper : {

    },
    NameInnerWrapper1 :{

    },
    NameInnerWrapper2 : {

    },
    NameText : {
        color : 'black'
    }
})

export default MainName;