import React from "react";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import styles from "@/styles/create-list/create-list-footer";
import { PlusIcon } from "lucide-react-native";

export default function CreateListFooter() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity style={styles.newListButton} onPress={() => console.log("Add new list")}>
        <PlusIcon color={"white"} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
