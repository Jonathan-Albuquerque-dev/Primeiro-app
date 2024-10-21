import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/input/input";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.txt}>Email:</Text>
        <Input />
        <Text>Senha:</Text>
        <Input />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container2: {
    width: "90%",
    textAlign: "left",
    marginHorizontal: "auto",
    gap: 10,
  },
  txt: {},
});
