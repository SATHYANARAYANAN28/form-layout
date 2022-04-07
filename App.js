import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import UserForm from "./components/UserForm";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/images/background.png")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <UserForm />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
