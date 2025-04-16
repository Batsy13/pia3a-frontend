import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import * as LucideIcons from "lucide-react-native";

export default function IconPicker({ onSelect, onClose }: any) {
  const [search, setSearch] = useState("");

  const filteredIcons = Object.keys(LucideIcons).filter((icon) =>
    icon.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 20 }}>
      <TextInput
        placeholder="Pesquisar ícone"
        style={{ borderBottomWidth: 1, borderColor: "#ccc", marginBottom: 20, color: "white" }}
        placeholderTextColor="#9A9A9A"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredIcons}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const IconComponent = LucideIcons[item as keyof typeof LucideIcons]  as React.ComponentType<{ color: string; size: number }>;
          return (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
              onPress={() => onSelect(item)}
            >
              <IconComponent color="white" size={24} />
              <Text style={{ marginLeft: 10, color: "white" }}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
        <Text style={{ color: "red", textAlign: "center" }}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}
