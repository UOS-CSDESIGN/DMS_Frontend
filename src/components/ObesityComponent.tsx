import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../AppInner"
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useCallback, useEffect, useState } from "react";
import moment from 'moment';
import 'moment/locale/ko';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native";
import Picture from "./PictureComponent";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import BirthComponent from "./BirthComponent";
import {LineChart} from "react-native-chart-kit"
import { Dimensions } from "react-native";


interface WeightData {
    date : string;
    weight : string;
}
type ObesityScreenProps = NativeStackScreenProps<RootStackParamList, 'Obesity'>

function Obesity({navigation} : ObesityScreenProps){
    const [date, setDate] = useState<string>('');
    const [goal, setGoal] = useState<string>('0');
    const [weight, setWeight] = useState<string>('0');
    const [weightDate1, setWeightDate1] = useState<string | null>(null);
    const [weightDate2, setWeightDate2] = useState<string | null>(null);
    //서버에서 몸무게를 받아오면, 받아온 몸무게를 setGoal로 설정
    const currentDate = moment();
    const year = currentDate.format('YYYY');
    const month = currentDate.format('M');
    const day = currentDate.format('D');
    const dayName = currentDate.format('dddd');
    const FormDate = `${year}/${month}/${day}/${dayName}`;
    useEffect(() => {
        setDate(FormDate);
    }, [])
    
    const [noticeVisible, setNoticeVisible] = useState<boolean>(false);
    const showNoticeModal = useCallback(() => {
        setNoticeVisible(true);
    },[])
    
    const [picture, setPicture] = useState<string>('');
    //사진 받아오는 코드
    const [obesity, setObesity] = useState<number>(0);
    //비만도 받아오는 코드
    const [pictureVisible, setPictureVisible] = useState<boolean>(false);
    const showPictureModal = useCallback(() => {
        setPictureVisible(true);
    }, [])

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

    const onChangeWeightDate1 = useCallback((date : string) => {
        setWeightDate1(date);
    },[weightDate1]);
    const onChangeWeightDate2 = useCallback((date : string) => {
        setWeightDate2(date);
    },[weightDate2]);

    const [dateSet, setDateSet] = useState<WeightData[]>([]);
    //서버로부터 날짜를 받아옴
    //const xValues = dateSet.map((data) => data.date);
    //const yValues = dateSet.map((data) => parseFloat(data.weight));
    const xValues = ["January", "February", "March", "April", "June"];
    const yValues = [Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100]
    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels : xValues,
        datasets : [
            {
                data : yValues,
            }
        ],
    }
    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom : "#eceae8",
        backgroundGradientTo : "#919693",
        decimalPlaces: 1, // 소수점 n째자리까지
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
      };


    return(
        <ScrollView style = {styles.View}>
            <View style = {styles.DateWrapper}>
                <Text style = {styles.text}>{date}</Text>
                <Pressable onPress = {showNoticeModal}>
                    <Icon name = 'bell' size = {20} color = "black"/>
                </Pressable>
            </View>
            <View style = {styles.PictureWrapper}>
                {picture ? <Text>비만도 : {obesity}</Text>
                : <View>
                    <Pressable
                     style = {styles.plusButton}
                     onPress = {showPictureModal}>
                        <FontAwesomeIcon icon={faPlusCircle} size = {20} color = "#e4bd12"/>
                    </Pressable>
                    <View style = {styles.pictureTextWrapper}>
                        <Text style = {styles.text}>등록된 비만도가 없습니다</Text>
                        <Text style = {styles.text}>사진을 등록해주세요</Text>
                    </View>
                  </View>}
            </View>
            <View style = {styles.GoalWrapper}>
                <View style = {styles.GoalInnerWrapper1}>
                    <Text style = {styles.text}>현재 몸무게</Text>
                    {isEditWeight ? (
                        <TextInput
                        style = {styles.textInput}
                        value = {tempWeight}
                        onChangeText = {onChangeWeightText}
                        onBlur = {onSaveWeight}
                        keyboardType = 'numeric'/>
                    ) : <Text style = {styles.textWeight}>{weight}</Text>}
                    <Pressable
                     onPress = {onChangeWeight}
                     style = {styles.editButton}>
                        <Text style = {styles.textButton}>수정</Text>
                    </Pressable>
                </View>
                <View style = {styles.GoalInnerWrapper2}>
                    <Text style = {styles.text}>목표 몸무게</Text>
                    {isEditGoal? (
                        <TextInput
                        style = {styles.textInput}
                        value = {tempGoal}
                        onChangeText = {onChangeGoalText}
                        onBlur = {onSaveGoal}
                        keyboardType = 'numeric'/>
                    ) : <Text style = {styles.textGoal}>{goal}</Text>}
                    <Pressable
                     onPress = {onChangeGoal}
                     style = {styles.editButton}>
                        <Text style = {styles.textButton}>수정</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={styles.CalenderWrapper}>
                    {weightDate1 ? (
                    <View style={styles.opaqueSquare}>
                        <Text style={styles.textDate}>{weightDate1}</Text>
                    </View>
                    ) : (
                    <View style={styles.emptySquare} />
                    )}
                    <View style = {styles.birthComponent}>
                        <BirthComponent onBirthSelected={onChangeWeightDate1} />
                    </View>
                    <Text style = {styles.textDate}>~ </Text>
                    {weightDate2 ? (
                    <View style={styles.opaqueSquare}>
                        <Text style={styles.textDate}>{weightDate2}</Text>
                    </View>
                    ) : (
                    <View style={styles.emptySquare} />
                    )}
                    <View style = {styles.birthComponent}>
                        <BirthComponent onBirthSelected={onChangeWeightDate2} />
                    </View>
                    <Pressable style = {styles.graphButton}>
                        <Text style = {styles.textButton}>확인</Text>
                    </Pressable>
                </View>
                <View>
                    <LineChart
                      data = {data}
                      chartConfig = {chartConfig}
                      width = {screenWidth}
                      height = {220}
                      />

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    View : {
        paddingHorizontal : 15,
        paddingVertical : 10,
    },
    DateWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        borderBottomWidth : 1,
    },
    text : {
        color : 'black',
        fontSize : 15,
        fontWeight : '500'
    },
    PictureWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 10,
        borderBottomWidth : 1,
    },
    plusButton : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    pictureTextWrapper : {
        alignItems : 'center',
    },
    GoalWrapper : {
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderBottomWidth : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    GoalInnerWrapper1 : {
        justifyContent : 'center',
    },
    GoalInnerWrapper2 : {
        justifyContent : 'center',
    },
    EditWrapper : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    textInput : {
        fontSize : 15,
    },
    textWeight : {
        color : 'black',
        fontSize : 20,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
    textGoal : {
        color: 'black',
        fontSize : 20,
        fontWeight : '500',
        paddingHorizontal : 30,
    },
    editButton : {
        alignItems : 'center',
    },
    editText : {
        color : 'black',
        fontWeight : '500',
        backgroundColor : "#f3c315a2",
        borderRadius : 5,
    },
    CalenderWrapper : {
        marginVertical : 10,
        flexDirection : 'row',
        height : 50,
        alignItems : 'center',
    },
    emptySquare : {
        width : 90,
        height : 30,
        marginLeft : 4,
        marginRight : 6,
        opacity : 0.2
    },
    opaqueSquare : {
        width : 90,
        height : 30,
        marginLeft : 4,
        marginRight : 6,
        justifyContent : 'center',
    },
    textDate : {
        color : 'black',
        fontSize : 16,
        fontWeight : '400',
        textAlign : 'center',
    },
    birthComponent : {
        marginRight : 10,
    },
    graphButton : {
        marginLeft : 3,
        borderRadius : 8,
    },
    textButton : {
        color : 'black',
        fontSize : 14,
        fontWeight : '400',
        textAlign : 'center',
        backgroundColor : "#f3c315a2",
        borderRadius : 5,
        paddingVertical : 2,
        paddingHorizontal : 5,
    },
})

export default Obesity;