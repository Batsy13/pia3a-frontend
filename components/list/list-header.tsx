import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/create-list/create-list-header";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { List as ListType } from "@/types/lists";

export default function ListHeader({ selectedList }: { selectedList: ListType }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color={"white"} size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{selectedList?.name}</Text>
    </View>
  );
}
