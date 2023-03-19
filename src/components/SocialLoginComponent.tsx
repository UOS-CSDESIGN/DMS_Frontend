import {
    GoogleSignin, User, statusCodes,
    GoogleSigninButton
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
import postSocialSignin from "../model/User/getGoogleSignin";

const SocialLoginComponent = ({ toAnimal, toSignup }) => {
    GoogleSignin.configure({
        webClientId: '984908362495-kolhf54om4me453ha1gnl7u4thcqlp20.apps.googleusercontent.com',
        offlineAccess: true

    });
    const dispatch = useDispatch();

    //useSelector is declared
    //if user or token value is chaged, immediately applied
    const { user, token } = useSelector((state: RootState) => ({
            user: state.memberData.userData,
            token: state.login.accessToken,
        }));
    useEffect(() => {
        console.log(`changed token : ${token}`);
    }, [token]);

    const googleSignin = async () => {
        try {
            //checking google services are available
            //error : play service are not available
            await GoogleSignin.hasPlayServices
                ({ showPlayServicesUpdateDialog: true });
            //google oauth
            //return value is google infomation
            const userInfo = await GoogleSignin.signIn();
            console.log(token);
            //get accessToken from Spring Server
            const isSigned = await postSocialSignin(userInfo, dispatch, user, token);
            console.log('isSigned');
            console.log(isSigned);
            if(isSigned == false){
                console.log('not signed');
                toSignup();
            } else {
                console.log('signed');
                toAnimal();
            }
        }
        catch (error:any) {
            //GoogleSignin error catch
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                //user cancels the signin in flow
                console.log("calceled");
            }
            else if (error.code === statusCodes.IN_PROGRESS) {
                //previous progress not yet finished
                console.log("in progress");
            }
            else if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                //no user signed yet
                console.log("required signin");
            }
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                //play services not available
                console.log("not available");
            }
            console.log("Failed to social signin : ", error);
        }
        console.log("fin");
    };
    return (
        <View>
            <View style={styles.socialLoginButton}>              
                <GoogleSigninButton                  
                    style={styles.googleButton}                  
                    size={GoogleSigninButton.Size.Wide}                  
                    color={GoogleSigninButton.Color.Dark}
                    onPress={googleSignin}        
                />
            </View>
        </View>
    );
}
export default SocialLoginComponent;
const styles = StyleSheet.create({
    socialLoginButton : {
        marginTop : 20,
        paddingHorizontal : 20,
        justifyContent : "center",
        alignItems : "center",
      },
      googleButton : {
        width : 312,
        height : 48,
      },
})