import {Text, View} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppInner';

type InstructionScreenProps = NativeStackScreenProps<RootStackParamList, 'InstructionPage'>

function InstructionPage({navigation} : InstructionScreenProps){
    return(
        <View>
            <Text>커뮤니티 규칙</Text>
        </View>
    )
}

export default InstructionPage;