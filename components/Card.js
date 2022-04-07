import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 24,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#4e0329",

    // for adding shadow - elevation is only for android
    elevation: 4,

    // to add shadow to IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
