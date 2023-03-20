import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import { Text, View } from "react-native-animatable";

type ObesityScreenProps = NativeStackScreenProps<RootStackParamList, 'Obesity'>

function Obesity({navigation} : ObesityScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default Obesity;