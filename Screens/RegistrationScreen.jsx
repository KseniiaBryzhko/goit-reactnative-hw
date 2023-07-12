import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import BackgroundImage from "../assets/images/background-image.png";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={styles.container}>
        <View style={styles.avatar}></View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput placeholder="Логін" style={styles.input} />
        <TextInput
          placeholder="Адреса електронної пошти"
          style={styles.input}
        />
        <TextInput placeholder="Пароль" style={styles.input} />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "##F6F6F6" : "#FF6C00",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </Pressable>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
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
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    height: 549,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
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
    marginTop: 32,
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
});
