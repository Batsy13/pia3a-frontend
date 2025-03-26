import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  name: string;
  placesCount: number;
  type?: string;
};

export default function ListItem({ name, placesCount, type }: Props) {
  return (
    <View>
      <View style={styles.listItem}>
        {/* Simulando a imagem com uma View */}
        <View style={styles.placeholderIcon} />

        <View style={styles.textContainer}>
          <Text style={styles.listItemTitle}>{name}</Text>
          <Text style={styles.listItemSubtitle}>
            Particular · {placesCount} {type === "viagem" ? "viagem" : "lugares"}
          </Text>
        </View>
        <Text style={styles.options}>⋮</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
  },
  placeholderIcon: {
    width: 30, // Tamanho da "imagem"
    height: 30,
    borderRadius: 6,
    backgroundColor: "#555", // Cor de fundo para simular a imagem
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  listItemTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemSubtitle: {
    color: "gray",
    fontSize: 14,
  },
  options: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10,
  },
});
