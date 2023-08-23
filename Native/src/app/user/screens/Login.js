import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../utilities/UserContext";

const Login = (props) => {
  const { navigation } = props;
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("nhat@gmail.com");
  const [password, setPassword] = useState("1");

  // const handleLogin = async () => {  //   if (!email || !password) {
  //     Alert.alert("Please enter your email and password");
  //   }
  //   const result = await login(email, password);
  //   console.log(result);
  // };
  const handleLogin = async () => {
    const result = await login(email, password);
    if(!result){
      ToastAndroid.show('Login failed', ToastAndroid.LONG);
      setEmail('');
      setPassword('');
      
    }
  }

  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.hello}>Hello</Text>
      <Text style={loginStyle.again}>Again!</Text>
      <Text style={loginStyle.welcom}>Welcome back you’ve been missed</Text>

      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.label}>Email*</Text>
        {/* <Text style={loginStyle.input} /> */}
        <TextInput
          style={loginStyle.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.lable}>Password*</Text>
        {/* //<TextInput style={loginStyle.input} secureTextEntry /> */}
        <TextInput
          style={loginStyle.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Image
          source={require("../../../media/images/eye.png")}
          style={loginStyle.eyeIcon}
        />
      </View>

      <Pressable onPress={handleLogin} style={loginStyle.buttonContainer}>
        <Text style={loginStyle.buttonLoginLable}>Login</Text>
      </Pressable>

      <View style={loginStyle.continue}>
        <Text style={loginStyle.continueLable}>or continue with</Text>
      </View>

      <View style={loginStyle.socialButtonContainer}>
        <Pressable style={loginStyle.buttonFBGG}>
          <Image
            source={require("../../../media/images/fb.png")}
            style={loginStyle.fbIcon}
          />
          <Text style={loginStyle.buttonFBGGLable}>Facebook</Text>
        </Pressable>

        <Pressable style={loginStyle.buttonFBGG}>
          <Image
            source={require("../../../media/images/gg.png")}
            style={loginStyle.fbIcon}
          />
          <Text style={loginStyle.buttonFBGGLable}>Google</Text>
        </Pressable>
      </View>

      <View style={loginStyle.account}>
        <Text style={loginStyle.accountLable}>don’t have an account ?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={loginStyle.signUpLable}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};
//rnfes
export default Login;

const loginStyle = StyleSheet.create({
  signUpLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#1877F7",
  },
  accountLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#667080",
  },
  account: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonFBGGLable: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#667080",
    letterSpacing: 0.12,
    marginLeft: 10,
  },
  buttonFBGG: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: "47%",
    height: 48,
    backgroundColor: "#EEF1F4",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  continueLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#4E4B66",
  },
  continue: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonLoginLable: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    letterSpacing: 0.12,
  },
  buttonContainer: {
    paddingVertical: 13,
    paddingHorizontal: 24,
    width: "100%",
    height: 50,
    backgroundColor: "#1877F2",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  eyeIcon: {
    position: "absolute",
    top: 37,
    right: 10,
  },
  inputContainer: {
    marginBottom: 16,
    position: "relative",
  },
  lable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    marginBottom: 4,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#4EB66",
    borderRadius: 6,
    padding: 10,
  },
  welcom: {
    width: 222,
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: "#4e4b66",
    marginBottom: 48,
    marginTop: 4,
  },
  again: {
    fontWeight: "700",
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: "#1877f2",
  },
  hello: {
    fontWeight: "700",
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: "#050505",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
});
