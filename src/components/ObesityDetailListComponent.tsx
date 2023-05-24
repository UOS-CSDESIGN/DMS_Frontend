import {View, Text, StyleSheet} from 'react-native';


type ObesityDetailListProps = {
    weight : string;
    obesity : number;
}

function ObesityDetailListComponent(props : ObesityDetailListProps){
    return(
        <View style = {styles.DetailWrapper}>
            <View style = {styles.DetailDescriptionWrapper}>
                <Text>몸무게</Text>
                <Text>{props.weight}</Text>
            </View>
            <View style = {styles.DetailDescriptionWrapper}>
                <Text>비만도</Text>
                <Text>{props.obesity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DetailWrapper : {

    },
    DetailDescriptionWrapper : {
        flexDirection : 'row',
    },
})

export default ObesityDetailListComponent;