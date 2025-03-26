import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListHeader() {
  return (
    <View>
      <Text style={styles.title}>Salvos</Text>
      <TouchableOpacity style={styles.newListButton} onPress={() => console.log("apertou")}>
        <Text style={styles.newListText}>+ Nova Lista</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Suas listas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  newListButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  newListText: {
    color: "black",
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
