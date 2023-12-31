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

export const LoginScreen = () => {
  const [isFocused, setIsFocused] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {
    setEmailError(!email);
    setPasswordError(!password);

    if (email && password) {
      console.log(`Email: ${email}; Password: ${password}.`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.wrapper}
        keyboardVerticalOffset={-500}
      >
        <View style={styles.wrapper}>
          <ImageBackground
            source={BackgroundImage}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                style={[
                  styles.input,
                  isFocused === "Email" && styles.inputFocused,
                ]}
                value={email}
                onChangeText={setEmail}
                onFocus={() => {
                  setIsFocused("Email");
                }}
                onBlur={() => {
                  setIsFocused("");
                }}
              />
              {emailError && (
                <Text style={styles.errorMessage}>
                  Please fill in the email field
                </Text>
              )}

              <View style={styles.passwordWrapper}>
                <TextInput
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isPasswordShown ? false : true}
                  style={[
                    styles.input,
                    isFocused === "Password" && styles.inputFocused,
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => {
                    setIsFocused("Password");
                  }}
                  onBlur={() => {
                    setIsFocused("");
                  }}
                />
                <Text
                  style={styles.showPassword}
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                >
                  {isPasswordShown ? "Сховати" : "Показати"}
                </Text>
              </View>
              {passwordError && (
                <Text style={styles.errorMessage}>
                  Please fill in the password field
                </Text>
              )}

              <Pressable
                onPress={handleSubmit}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "##F6F6F6" : "#FF6C00",
                  },
                  styles.button,
                ]}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </Pressable>

              <View style={styles.textRegWrapper}>
                <Text style={styles.text}>Немає акаунту?</Text>
                <Pressable>
                  <Text style={styles.textRegistration}>Зареєструватися</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
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
    paddingTop: 32,
    paddingBottom: 132,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
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
  errorMessage: {
    marginTop: 4,
    color: "red",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 12,
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
  textRegWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  textRegistration: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
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
