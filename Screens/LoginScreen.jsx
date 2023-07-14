import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import BackgroundImage from "../assets/images/background-image.png";
import { AntDesign } from "@expo/vector-icons";

export const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={-500}
    >
      <View style={styles.wrapper}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <View>
            <TextInput placeholder="Пароль" style={styles.input} />
            <Text style={styles.showPassword}>Показати</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "##F6F6F6" : "#FF6C00",
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Увійти</Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Text style={styles.text}>Немає акаунту?</Text>
            <Pressable>
              <Text style={styles.textRegistration}>Зареєструватися</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    height: 489,
  },
  input: {
    width: 343,
    height: 50,
    paddingBottom: 15,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 6,
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 16,
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
    width: 343,
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
  textRegistration: {
    marginTop: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  showPassword: {
    position: "absolute",
    top: 26,
    right: 16,
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
