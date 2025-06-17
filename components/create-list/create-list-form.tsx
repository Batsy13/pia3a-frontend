import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import styles from "@/styles/create-list/create-list-form";
import * as LucideIcons from "lucide-react-native";
import IconPicker from "./icon-picker";

export default function CreateListForm({ onFormChange }: { onFormChange: (data: { name?: string; icon?: string }) => void }) {
  const [icon, setIcon] = useState("HelpCircle");
  const [listName, setListName] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false);

  const IconComponent = (LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ color: string; size: number }>) || LucideIcons.HelpCircle;

  useEffect(() => {
    onFormChange({ icon, name: listName });
  }, [icon, listName, onFormChange]);

  const handleIconSelect = (selectedIcon: string) => {
    setIcon(selectedIcon);
    setPickerVisible(false);
  };

  const handleNameChange = (text: string) => {
    setListName(text);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setPickerVisible(true)}>
          <View style={styles.inputIcon}>
            <IconComponent color={"white"} size={24} />
          </View>
          <Text style={{ color: "white" }}>{(icon == "HelpCircle") ? "Escolher ícone" : icon}</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nomeie sua lista"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
            value={listName}
            onChangeText={handleNameChange}
          />
        </View>

        <Modal visible={isPickerVisible} animationType="slide">
          <IconPicker onSelect={handleIconSelect} onClose={() => setPickerVisible(false)} />
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
}