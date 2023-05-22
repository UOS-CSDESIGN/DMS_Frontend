import { Pressable, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface ButtonProps {
    canGoNext : boolean;
    onSubmit : () => void;
    buttonName : string;
}

function ButtonComponent(props : ButtonProps){
    return(
        <View>
            <Pressable 
             style = {
                props.canGoNext?
                StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
                : styles.loginButton}
             disabled = {!props.canGoNext}
             onPress = {props.onSubmit}
             >
            <Text style = {styles.loginButtonText}>{props.buttonName}</Text>
            </Pressable>
        </View>
    )    
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: 'gray',
        paddingHorizontal: width/40,
        paddingVertical: height/70,
        borderRadius: 5,

      },
      loginButtonActive: {
        backgroundColor: 'blue',
        fontSize : 14,
        textAlign : 'center',
        paddingHorizontal : 100,
      },
      loginButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign : 'center',
      },
})

export default ButtonComponent;