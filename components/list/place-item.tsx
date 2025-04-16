import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styles from "@/styles/list/place-item";
import { Place } from "@/types/lists";

export default function PlaceItem({ place }: { place: Place }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.images}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {place.images?.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={{ width: 200, height: 124, borderRadius: 20 }}
          />
        ))}
      </ScrollView>
      <View style={{ gap: 10, paddingVertical: 20 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          {place.name}
        </Text>
        <Text style={{ fontWeight: "bold", color: "#9A9A9A", textAlign: "justify" }}>
          {place.description}
        </Text>
      </View>
    </View>
  );
}
