import {
    GoogleSignin, statusCodes,
    GoogleSigninButton
} from "@react-native-google-signin/google-signin";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
import getGoogleSignin from "../model/User/getGoogleSignin";
import Config from "react-native-config";
import { setSocialToken } from "../model/User/slice/loginSlice";
/**
 * 
 * @param toAnimal : navigate function to animal page
 * @param toSignup : navigate function to signup page
 * @returns Google singup Button JSX
 */
const SocialLoginComponent = ({toAnimal, toSignup} : any) => {
    
    const dispatch = useDispatch();
    //google oauth server client id
    GoogleSignin.configure({
        webClientId: `${Config.GOOGLE_OAUTH}`,
        offlineAccess: true
    });
    //useSelector is declared
    //if user or token value is chaged, immediately applied
    const user = useSelector((state: RootState) => state.memberData.userData);

    const googleSignin = async () => {
        try {
            //checking google services are available
            //error : play service are not available
            await GoogleSignin.hasPlayServices
                ({ showPlayServicesUpdateDialog: true });
            //google oauth
            //return value is google infomation(authcode include)
            const userInfo = await GoogleSignin.signIn();

            //tokens : idToken, accessToken
            const tokens = await GoogleSignin.getTokens();
            dispatch(setSocialToken(tokens));

            //get accessToken from Spring Server
            const isSigned = await getGoogleSignin(tokens, dispatch, userInfo);
            console.log(isSigned);
            if(isSigned === 201){
                console.log('not Signed');
                toSignup();
            } else if(isSigned === 200){
                console.log('signed');
                toAnimal();
            } else if (isSigned === 202) {
                //alert
                //gmail already exist. So, Link account to Google Social
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

export default SocialLoginComponent;