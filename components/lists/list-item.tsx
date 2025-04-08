import { ListItemProps } from "@/types/lists";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as LucideIcons from "lucide-react-native";
import { EllipsisVertical } from "lucide-react-native";

export default function ListItem({
  id,
  name,
  placesCount,
  isLast,
  icon, 
}: ListItemProps) {
  const router = useRouter();
  const IconComponent = (LucideIcons[icon] as React.ComponentType<{ color: string; size: number }>) || LucideIcons.HelpCircle;

  return (
    <View>
      <View
        style={styles.listItem}
        onTouchEnd={() => router.push(`/list?listId=${id}`)}
      >
        <View style={styles.iconContainer}>
          <IconComponent color="white" size={24} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.listItemTitle}>{name}</Text>
          <Text style={styles.listItemSubtitle}>
            {placesCount > 1 ? `${placesCount} lugares` : `${placesCount} lugar`}
          </Text>
        </View>
        <Text style={styles.options}><EllipsisVertical /></Text>
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
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
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
