import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../utilities/UserContext";

const Register = (props) => {
  const { navigation } = props;
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("nhat@gmail.com");
  const [password, setPassword] = useState("nhatnam");
  const [confirmPassword, setConfirmPassword] = useState("nhatnam");
const [name, setname] = useState("nhat");

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Cần điền đủ thông tin");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Mật khẩu không khớp");
      return;
    }
    const result = await register(email, password, name);
    if(result){
      navigation.navigate("Login");
     }else{
       Alert.alert('Đăng kí thành công');
     }
  }

  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.hello}>Hello</Text>
      <Text style={loginStyle.again}>Again!</Text>
      <Text style={loginStyle.welcom}>Welcome back you’ve been missed</Text>

      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.labelUsername}>Email*</Text>
        <TextInput
          style={loginStyle.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.lablePassword}>Password*</Text>
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

      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.lablePassword}>Confirm Password*</Text>
        <TextInput
          style={loginStyle.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Image
          source={require("../../../media/images/eye.png")}
          style={loginStyle.eyeIcon}
        />
      </View>

      <Pressable 
      onPress={handleRegister}
      style={loginStyle.buttonContainer}>
        <Text style={loginStyle.buttonLoginLable}>Register</Text>
      </Pressable>

      <View style={loginStyle.account}>
        <Text style={loginStyle.accountLable}>already having an account ?</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={loginStyle.signUpLable}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};
//rnfes
export default Register;

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
