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
    const [picture, setPicture] = useState<string>(''); //서버에 사진이 있으면 여기에 저장
    const [goal, setGoal] = useState<string>('5.0');
    const [weight, setWeight] = useState<string>('5.8');
    const [obesity, setObesity] = useState<number>(0);
    const toObesityRegister = useCallback(()=>{
        navigation.navigate("ObesityRegisterPage")
    },[navigation])
    useEffect(()=>{
    //서버로부터 weight, goal, obesity 받아서 각각 setWeight, setObesity, setGoal하기
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

    const [modalVisible, setModalVisible] = useState<boolean>(false); //회수 modal
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
                 picture = {picture}
                 goal = {goal}
                 tempGoal={tempGoal}
                 isEditGoal = {isEditGoal}
                 weight = {weight}
                 obesity = {obesity}
                 toObesityRegister={toObesityRegister}
                 onChangeGoalText={onChangeGoalText}
                 onSaveGoal={onSaveGoal}
                 onChangeGoal ={onChangeGoal}/>
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