import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "@/styles/create-list/create-list-form";
import { CircleFadingPlus } from "lucide-react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CreateListForm() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.inputIcon}>
            <CircleFadingPlus color={"white"} />
          </View>
          <Text style={{ color: "white" }}>Escolher Ícone</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nomeie sua lista"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
          />
          <TextInput
            placeholder="Adicione uma descrição a sua lita"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
