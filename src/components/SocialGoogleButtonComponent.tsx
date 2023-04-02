import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../model";

const SocialGoogleButtonComponent = () => {
    GoogleSignin.configure({
        webClientId: '984908362495-m81t2habh3570afnlq7s6cvl0q4dfu8e.apps.googleusercontent.com',
        offlineAccess: true
    });
    const token = useSelector((state: RootState) => state.login.accessToken);

    const googleSocial = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true
            });
            const userInfo = await GoogleSignin.signIn();
            //add linkGoogleSocial function

            //add navigate function after link operation
            if () {
                
            } else {
                
            }
        } catch (error: any) {
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
            <View style={styles.socialButton}>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={googleSocial}
                />
            </View>
        </View>
    )
};
export default SocialGoogleButtonComponent;
const styles = StyleSheet.create({
    socialButton: {
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    googleButton: {
        width: 312,
        height: 48
    }
});