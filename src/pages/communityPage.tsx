import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import {View, Text, Pressable} from "react-native"

type CommunityScreenProps = NativeStackScreenProps<RootStackParamList, 'CommunityPage'>

function CommunityPage({navigation} : CommunityScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default CommunityPage