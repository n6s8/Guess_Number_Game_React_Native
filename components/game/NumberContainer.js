import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";
import Color from "../../constants/color";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: deviceWidth < 300 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
