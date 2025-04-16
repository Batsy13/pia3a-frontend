import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import styles from "@/styles/create-list/create-list-form";
import * as LucideIcons from "lucide-react-native";
import IconPicker from "./icon-picker";

export default function CreateListForm({ onFormChange }: any) {
  const [icon, setIcon] = useState("HelpCircle");
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false);

  const IconComponent = (LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ color: string; size: number }>) || LucideIcons.HelpCircle;

  const handleIconSelect = (selectedIcon: any) => {
    setIcon(selectedIcon);
    setPickerVisible(false);
    onFormChange({ icon: selectedIcon, listName, description });
  };

  const handleInputChange = (field:any, value: any) => {
    if (field === "listName") setListName(value);
    if (field === "description") setDescription(value);
    onFormChange({ icon, listName, description });
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
            onChangeText={(text) => handleInputChange("listName", text)}
          />
          <TextInput
            placeholder="Adicione uma descrição à lista"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
            value={description}
            onChangeText={(text) => handleInputChange("description", text)}
          />
        </View>

        <Modal visible={isPickerVisible} animationType="slide">
          <IconPicker onSelect={handleIconSelect} onClose={() => setPickerVisible(false)} />
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
}
