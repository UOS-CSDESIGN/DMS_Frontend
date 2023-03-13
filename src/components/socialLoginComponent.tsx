import {
    GoogleSignin, User, statusCodes,
    GoogleSigninButton
} from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
import postSocialSignin from "../model/User/postSocialSignin";

const SocialLoginComponent = () => {
    GoogleSignin.configure({
        webClientId: '984908362495-kolhf54om4me453ha1gnl7u4thcqlp20.apps.googleusercontent.com',
        offlineAccess: true

    });
    const [userInfo, setUserInfo] =
        useState<{
            userGoogleInfo: User;
            loaded: boolean;
        }>({
            userGoogleInfo: {} as User,
            loaded: false
        });
    
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => (state.memberData.userData));
    const token = useSelector((state: RootState) => (state.login.accessToken));

    const googleSignin = async () => {
        console.log("in signin");
        try {
            //google services are available
            //error : paly service are not available
            await GoogleSignin.hasPlayServices
                ({
                    //show alert to slove problem
                    showPlayServicesUpdateDialog: true
                });
            console.log("pass play");

            const userInfo = await GoogleSignin.signIn();
            console.log("pass login");
            setUserInfo({
                userGoogleInfo: userInfo,
                loaded: true
            });
            postSocialSignin(userInfo, dispatch, user, token);
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
            {userInfo.loaded ?
                <View>
                    <Text>{userInfo.userGoogleInfo.user.name}</Text>
                        <Text>{userInfo.userGoogleInfo.user.email}</Text>
                        <Text>{userInfo.userGoogleInfo.idToken}</Text>
                </View> :
                <Text>Not Signin</Text>
            }
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