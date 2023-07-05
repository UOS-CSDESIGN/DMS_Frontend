import {Text, View} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../AppInner';

type InstructionScreenProps = NativeStackScreenProps<RootParamList, 'InstructionPage'>

function InstructionPage({navigation} : InstructionScreenProps){
    return(
        <View>
            <Text>커뮤니티 규칙</Text>
        </View>
    )
}

export default InstructionPage;