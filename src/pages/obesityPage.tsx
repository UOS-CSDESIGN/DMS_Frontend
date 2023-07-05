import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootParamList } from "../AppInner"
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput} from 'react-native'
import { useCallback, useEffect, useState } from "react";
import Obesity from "../components/ObesityComponent";
import CurrentDate from "../components/CurrentDateComponent";
import NoticeModal from "../components/NoticeModalComponent";
import ObesityChart from "../components/ObesityChartComponent";
import ObesityModal from "../components/ObesityModalComponent";

type ObesityScreenProps = DrawerScreenProps<RootParamList, 'ObesityPage'>

interface WeightData{
    date : string[];
    weight : string[];
}

function ObesityPage({navigation} : ObesityScreenProps){
    const [goal, setGoal] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [obesity, setObesity] = useState<number>(0);
    const [isEditWeight, setIsEditWeight] = useState<boolean>(false);
    const [tempWeight, setTempWeight] = useState<string>('');
    const onChangeWeight = useCallback(() => {
        setWeight('0');
        setIsEditWeight(true);
      }, [weight]);
      const onSaveWeight = useCallback(() => {
        setWeight(tempWeight);
        setIsEditWeight(false);
        setTempWeight('');
        //서버로 변경된 최신몸무게 전송
      }, [tempWeight]);
      const onChangeWeightText = useCallback((weight : string) => {
        setTempWeight(weight);
      },[])

    const [isEditGoal, setIsEditGoal] = useState<boolean>(false); 
    const [tempGoal, setTempGoal] = useState<string>('');
    const onChangeGoal = useCallback(() => {
        setGoal('0');
        setIsEditGoal(true);
    },[]);
    const onSaveGoal = useCallback(() => {
        setGoal(tempGoal);
        setIsEditGoal(false);
        setTempGoal('');
        //서버로 변경된 목표몸무게 전송
    },[tempGoal]);
    const onChangeGoalText = useCallback((goal : string) => { 
        setTempGoal(goal);
    },[]);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [enableModal, setEnableModal] = useState<boolean>(false);
    const showModal = () => {
        setModalVisible(true);
        setEnableModal(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    const [frequency, setFrequency] = useState<number>(0);
    const onChangeButton1 = useCallback(() => {
        setFrequency(10)
    }, []);
    const onChangeButton2 = useCallback(() => {
        setFrequency(20)
    },[])
    const onChangeButton3 = useCallback(() => {
        setFrequency(30)
    },[])
    const onChangeButton4 = useCallback(() => {
        setFrequency(10)
    },[])
    useEffect(() =>{
        console.log(frequency)
    },[frequency])


    const [dateSet, setDateSet] = useState<WeightData[]>([]);
    //서버로부터 날짜+몸무게를 받아옴
    //const xValues = dateSet.map((data) => data.date);
    //const yValues = dateSet.map((data) => parseFloat(data.weight));
    const xValues = ["January", "February", "March", "April", "June"];
    const yValues = [Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10]
    const data = {
        labels : xValues,
        datasets : [
            {
                data : yValues,
            }
        ],
    }
    const onSubmitFrequency = useCallback(() =>{
    },[]);


    return(
        <ScrollView style = {styles.ObesityPage}>
            <View style = {styles.dateAndModalWrapper}>
                <CurrentDate/>
                <NoticeModal/>
            </View>
            <View>
                <Obesity
                 goal = {goal}
                 tempGoal={tempGoal}
                 isEditGoal = {isEditGoal}
                 weight = {weight}
                 tempWeight={tempWeight}
                 isEditWeight = {isEditWeight}
                 obesity = {obesity}
                 onChangeGoalText={onChangeGoalText}
                 onChangeWeightText={onChangeWeightText}
                 onSaveGoal={onSaveGoal}
                 onSaveWeight={onSaveWeight}
                 onChangeGoal ={onChangeGoal}
                 onChangeWeight={onChangeWeight}/>
            </View>
            <View>
                <ObesityChart
                 data = {data}
                 showModal = {showModal}/>
            </View>
            <View>
                {enableModal?
                <ObesityModal
                    modalVisible = {modalVisible}
                    closeModal={closeModal}
                    frequency={frequency}
                    onChangeButton1={onChangeButton1}
                    onChangeButton2={onChangeButton2}
                    onChangeButton3={onChangeButton3}
                    onChangeButton4={onChangeButton4}
                    onSubmit={onSubmitFrequency}
                    /> : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ObesityPage : {
        backgroundColor : 'snow',
    },
    dateAndModalWrapper : {
        marginHorizontal : '5%',
        marginVertical : '5%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderBottomWidth : 1,
    },
})


export default ObesityPage;