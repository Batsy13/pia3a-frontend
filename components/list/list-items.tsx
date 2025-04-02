import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/list/list-items";
import { Heart, MapPinCheck } from "lucide-react-native";
import PlaceItem from "./place-item";

export default function ListItems() {
  return (
    <View>
      <View style={styles.listNameContainer}>
        <View style={styles.listTitle}>
          <Heart color={"red"} size={24} />
          <Text style={{ color: "#FFF", fontSize: 24 }}>Titulo Lista</Text>
        </View>
        <Text style={{ color: "#9A9A9A" }}>2 lugares</Text>
        <TouchableOpacity style={styles.listButton}>
          <MapPinCheck color={"black"} />
          <Text> Adicionar </Text>
        </TouchableOpacity>

      </View>

      <PlaceItem />
    </View>
  );
}
