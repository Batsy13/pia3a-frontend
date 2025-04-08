import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/create-list/create-list-header";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { mockData } from "./list-items";

export default function ListHeader({ selectedListId }: { selectedListId: number }) {
  const router = useRouter();

  const selectedList = mockData.lists.find((list) => list.id === selectedListId);
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color={"white"} size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{selectedList?.name}</Text>
    </View>
  );
}
