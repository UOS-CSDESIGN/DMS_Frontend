
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import { Text, View } from "react-native-animatable";

type FindScreenProps = NativeStackScreenProps<RootStackParamList, 'FindPage'>

function Find({navigation} : FindScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default Find;