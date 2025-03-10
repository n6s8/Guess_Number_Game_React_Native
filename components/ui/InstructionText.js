import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";

export default function InstructionTextInput({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
