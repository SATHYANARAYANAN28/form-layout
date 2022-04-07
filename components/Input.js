import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// this is a Custom input component which hold the label and the input field
function Input({ label, textInputConfig, icon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...textInputConfig}></TextInput>
        {icon ? <Ionicons name="md-search" size={30} /> : <></>}
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    width: 250,
    borderBottomWidth: 2,
    borderColor: "#72063c",
  },
  inputContainer: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    color: "#3b021f",
    marginBottom: 4,
  },
  input: {
    flex: 1,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
});
