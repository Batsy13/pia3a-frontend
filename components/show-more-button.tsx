import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  showAll: boolean;
};

export default function ShowMoreButton({ onPress, showAll }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{showAll ? "Menos" : "Mais"}</Text>
      <MaterialCommunityIcons name={showAll ? "chevron-up" : "chevron-down"} size={18} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginRight: 4,
  },
});
