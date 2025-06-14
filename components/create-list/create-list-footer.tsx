import React from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "@/styles/create-list/create-list-footer";
import { PlusIcon } from "lucide-react-native";

interface FormData {
  name: string;
  icon: string;
}

export default function CreateListFooter({ formData, onSubmit, isLoading }: { formData: FormData; onSubmit: () => void; isLoading: boolean }) {
  const isFormValid = formData.name && formData.icon && formData.icon !== "HelpCircle";

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