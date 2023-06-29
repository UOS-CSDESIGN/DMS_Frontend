import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import {View, Text, Pressable, StyleSheet, ScrollView} from "react-native"

type PostScreenProps = NativeStackScreenProps<RootStackParamList, 'PostPage'>

function PostPage(props : PostScreenProps){
    return(
        <View>
            <Text>Hello</Text>
        </View>
    )
}

export default PostPage;