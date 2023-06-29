import { Dimensions, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart} from "react-native-chart-kit"
import { StyleSheet } from "react-native";
import { GestureResponderEvent } from "react-native-modal";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import { useState } from "react";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface ObesityChartProps {
    data : any;
    showModal : (event : GestureResponderEvent) => void;
}

function ObesityChart(props : ObesityChartProps){
    let [tooltipPos, setTooltipPos] = useState({ x : 50, y :200 , visible : true, value : 0})
    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom : "#f7fcf7",
        backgroundGradientTo : "#f7fcf7",
        decimalPlaces: 1, // 소수점 n째자리까지
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
      };

    return(
        <View style = {styles.GraphWrapper}>
            <Pressable onPress = {props.showModal}>
                <Icon name = 'list' size = {20} color = "#000"/>
            </Pressable>
            <View style = {styles.ChartWrapper}>
                <LineChart
                    data = {props.data}
                    chartConfig = {chartConfig}
                    width = {width*0.9}
                    height = {height/2}
                    decorator={() => {
                        return tooltipPos.visible? <View>
                            <Svg>
                                <Rect x = {tooltipPos.x-15}
                                    y = {tooltipPos.y + 10}
                                    width = "40"
                                    height = "30"
                                    fill = "white"/>
                                <TextSVG
                                    x = {tooltipPos.x + 5}
                                    y = {tooltipPos.y + 30}
                                    fill = "black"
                                    fontSize = "16"
                                    fontWeight = "bold"
                                    textAnchor = "middle">
                                    {tooltipPos.value.toFixed(1)}
                                    </TextSVG>
                                    {/*<TextSVG
                                    x = {tooltipPos.x + 5}
                                    y = {tooltipPos.y + 50}
                                    fill = "black"
                                    fontSize = "16"
                                    fontWeight = "bold"
                                    textAnchor = "middle">
                                    {tooltipPos.obesity}
                                </TextSVG> */}
                            </Svg>
                        </View> : null
                    }}
                    onDataPointClick={(data) => {
                        let isSamePoint = (tooltipPos.x === data.x && tooltipPos.y === data.y);
                        isSamePoint
                          ? setTooltipPos((previousState) => ({
                              ...previousState,
                              value: data.value,
                              visible: !previousState.visible,
                            }))
                          : setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true, });
                      }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GraphWrapper : {
        marginHorizontal : '5%',
        marginVertical : '5%',
    },
    ChartWrapper : {
        justifyContent : 'center',
        alignItems : 'center',
    }
})

export default ObesityChart;

    