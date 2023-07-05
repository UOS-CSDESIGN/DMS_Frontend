import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../AppInner";
import { Text, View } from "react-native";
import Withdrawl from "./WithdrawalComponent";
import { useEffect, useState } from "react";

type NonSocialWithdrawalScreenProps = NativeStackScreenProps<RootParamList, "NonSocialWithdrawalPage">

function NonSocialWithdrawal({navigation} : NonSocialWithdrawalScreenProps){
    const [password, setPassword] = useState<boolean>(false);
    useEffect(() => {
        setPassword(true);
    },[]);
    return(
        <Withdrawl password = {password}/>
    )
}

export default NonSocialWithdrawal