import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppInner";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import Withdrawl from "./WithdrawalComponent";

type SocialWithdrawalScreenProps = NativeStackScreenProps<RootStackParamList, 'SocialWithdrawal'>

function SocialWithdrawal({navigation} : SocialWithdrawalScreenProps){
    const [password, setPassword] = useState<boolean>(false);
    useEffect(() => {
        setPassword(false);
    },[])
    return(
        <Withdrawl password = {password}/>
    )
}

export default SocialWithdrawal;