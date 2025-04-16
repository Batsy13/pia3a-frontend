import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/create-place/create-place-header";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

export default function CreatePlaceHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color={"white"} size={24}/>
      </TouchableOpacity>
      <Text style={styles.title}>Novo Lugar</Text>
    </View>
  );
}
