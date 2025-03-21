import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Lists() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de listas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "red",
  },
});
