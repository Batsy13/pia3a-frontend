import { ListItemProps } from "@/types/lists";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItem({ name, placesCount, type, isLast }: ListItemProps) {
  return (
    <View>
      <View style={styles.listItem}>
        <View style={styles.placeholderIcon} />

        <View style={styles.textContainer}>
          <Text style={styles.listItemTitle}>{name}</Text>
          <Text style={styles.listItemSubtitle}>
            Particular · {placesCount} {type === "viagem" ? "viagem" : "lugares"}
          </Text>
        </View>
        <Text style={styles.options}>⋮</Text>
      </View>
      {!isLast && <View style={styles.separator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 12,
    marginVertical: 30,
    borderRadius: 8,
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#555",
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
