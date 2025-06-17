import React from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "@/styles/create-place/create-place-footer";
import { PlusIcon } from "lucide-react-native";

interface FormData {
  images: string[];
  listName: string;
  description: string;
}

export default function CreatePlaceFooter({ formData, onSubmit, isLoading }: { formData: FormData; onSubmit: () => void; isLoading: boolean }) {
  const isFormValid = formData.listName && formData.description && formData.images && formData.images.length > 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.newListButton,
          (isFormValid && !isLoading) && styles.newListButtonEnabled,
          (!isFormValid || isLoading) && styles.newListButtonDisabled
        ]}
        onPress={onSubmit}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={"white"} size="small" />
        ) : (
          <PlusIcon color={"white"} size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
}