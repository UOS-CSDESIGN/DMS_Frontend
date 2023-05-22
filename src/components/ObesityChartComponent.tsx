import { Dimensions, Pressable, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart} from "react-native-chart-kit"
import { StyleSheet } from "react-native";
import { GestureResponderEvent } from "react-native-modal";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface ObesityChartProps {
    data : any;
    showModal : (event : GestureResponderEvent) => void;
}

function ObesityChart(props : ObesityChartProps){
    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom : "#eceae8",
        backgroundGradientTo : "#919693",
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

    