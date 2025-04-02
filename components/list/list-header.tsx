import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/create-list/create-list-header";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

export default function ListHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color={"white"} size={24}/>
      </TouchableOpacity>
      <Text style={styles.title}>*List Name*</Text>
    </View>
  );
}
