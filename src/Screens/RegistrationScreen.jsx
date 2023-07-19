import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import BackgroundImage from "../images/background-image.png";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!login || !email || !password) {
      Alert.alert("Please fill in all the fields");
      return;
    }
    console.log(`Login: ${login}; Email: ${email}; Password: ${password}.`);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.wrapper}
        keyboardVerticalOffset={-500}
      >
        <View style={styles.wrapper}>
          <ImageBackground
            source={BackgroundImage}
            resizeMode="cover"
            style={styles.image}
          ></ImageBackground>
          <View style={styles.container}>
            <View style={styles.avatar}>
              <AntDesign name="pluscircleo" size={25} style={styles.icon} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              value={login}
              onChangeText={setLogin}
              onFocus={() => setIsLoginFocused(true)}
              onBlur={() => setIsLoginFocused(false)}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={isPasswordShown ? false : true}
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
              <Text
                style={styles.showPassword}
                onPress={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? "Сховати" : "Показати"}
              </Text>
            </View>

            <Pressable
              onPress={handleSubmit}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "##F6F6F6" : "#FF6C00",
                },
                styles.button,
              ]}
            >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </Pressable>

            <Pressable>
              <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 66,
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 0,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  icon: {
    position: "absolute",
    color: "#FF6C00",
    bottom: 14,
    right: "-10%",
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    paddingBottom: 15,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 6,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 16,
    textDecorationLine: "none",
  },
  inputFocused: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },
  title: {
    marginBottom: 17,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.3,
  },
  button: {
    marginTop: 43,
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    fontFamily: "Roboto-Regular",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  text: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  textLogin: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  showPassword: {
    position: "absolute",
    top: 27,
    right: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
