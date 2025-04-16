import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "@/styles/create-place/create-place-footer";
import { PlusIcon } from "lucide-react-native";

export default function CreatePlaceFooter({ formData, onSubmit }: any) {
  const isFormValid = formData.images && formData.listName && formData.description;

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
