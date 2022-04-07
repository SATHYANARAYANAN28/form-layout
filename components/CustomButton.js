import { Pressable, StyleSheet, View, Text } from "react-native";

function CustomButton({ children, onPress, addStyle }) {
  return (
    <View
      style={
        addStyle
          ? [styles.buttonOuterContainer, styles.additionalStyles]
          : styles.buttonOuterContainer
      }
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // calling the prop function and execute in parent component
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "40%",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  additionalStyles: {
    width: "83%",
  },
});
