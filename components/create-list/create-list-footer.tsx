import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "@/styles/create-list/create-list-footer";
import { PlusIcon } from "lucide-react-native";

export default function CreateListFooter({ formData, onSubmit }: any) {
  const isFormValid = formData.icon && formData.listName && formData.description;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.newListButton,
          isFormValid && styles.newListButtonEnabled,
        ]}
        onPress={onSubmit}
        disabled={!isFormValid}
      >
        <PlusIcon color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
