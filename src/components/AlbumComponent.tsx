import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import { Text, View } from "react-native-animatable";

type AlbumScreenProps = NativeStackScreenProps<RootStackParamList, 'Album'>

function Album({navigation} : AlbumScreenProps){
    return(
        <View>
            <Text>hello</Text>
        </View>
    )
}

export default Album;