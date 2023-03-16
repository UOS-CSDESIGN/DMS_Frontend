import {
    GoogleSignin, User, statusCodes,
    GoogleSigninButton
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
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
    const [isChanged, setChanged] = useState(0);
    const dispatch = useDispatch();

    //useSelector가 선언
    //store값이 변경되면 바로 변경
    const { user, token } = useSelector((state: RootState) => ({
            user: state.memberData.userData,
            token: state.login.accessToken,
        }));
    useEffect(() => {
        console.log(`changed token : ${token}`);
    }, [token]);

    const googleSignin = async () => {
        try {
            //google services are available
            //error : paly service are not available
            await GoogleSignin.hasPlayServices
                ({
                    //show alert to slove problem
                    showPlayServicesUpdateDialog: true
                });

            const userInfoIn = await GoogleSignin.signIn();
            setUserInfo({
                userGoogleInfo: userInfoIn,
                loaded: true
            });
            console.log(token);
            postSocialSignin(userInfoIn, dispatch, user, token);
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
                <Text>Signed</Text> :
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