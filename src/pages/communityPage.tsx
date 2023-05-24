import { DrawerScreenProps } from "@react-navigation/drawer"
import { RootDrawerParamList } from "../AppInner"
import {View, Text, Pressable} from "react-native"

type CommunityScreenProps = DrawerScreenProps<RootDrawerParamList, 'CommunityPage'>

function CommunityPage({navigation} : CommunityScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default CommunityPage