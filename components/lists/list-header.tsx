import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/lists/list-header";
import { useRouter } from "expo-router";

export default function ListHeader() {

  const router = useRouter();

  return (  
    <View style={styles.container}>
      <Text style={styles.title}>Salvos</Text>
      <TouchableOpacity style={styles.newListButton} onPress={() => router.push("/create-list")}>
        <Text style={styles.newListText}>+ Nova Lista</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Suas listas</Text>
    </View>
  );
}