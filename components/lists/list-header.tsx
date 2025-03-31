import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/app/styles/lists/listHeader";

export default function ListHeader() {
  return (  
    <View style={styles.container}>
      <Text style={styles.title}>Salvos</Text>
      <TouchableOpacity style={styles.newListButton} onPress={() => console.log("apertou")}>
        <Text style={styles.newListText}>+ Nova Lista</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Suas listas</Text>
    </View>
  );
}