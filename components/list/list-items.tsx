import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/list/list-items";
import { MapPinCheck } from "lucide-react-native";
import * as LucideIcons from "lucide-react-native";
import PlaceItem from "./place-item";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import { List as ListType } from "@/types/lists";

export default function ListItems({
  selectedList,
}: {
  selectedList: ListType;
}) {
  const IconComponent = (LucideIcons[selectedList.icon as keyof typeof LucideIcons] as React.ComponentType<{ color: string; size: number }>) || LucideIcons.HelpCircle;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        <View style={styles.listNameContainer}>
          <View style={styles.listTitle}>
            <IconComponent color={"#FFF"} size={24} />
            <Text style={{ color: "#FFF", fontSize: 24 }}>
              {selectedList.name}
            </Text>
          </View>
          <Text style={{ color: "#9A9A9A" }}>
            {selectedList.places.length > 1 ? selectedList.places.length + " lugares": selectedList.places.length + " lugar"}
          </Text>
          <TouchableOpacity style={styles.listButton} onPress={ () => { router.navigate(`/create-place?listId=${selectedList.id}`) }}>
            <MapPinCheck color={"black"} />
            <Text> Adicionar </Text>
          </TouchableOpacity>
        </View>

        {selectedList.places.length > 0 ? (
          selectedList.places.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))
        ) : (
          <Text style={{ color: '#9A9A9A', textAlign: 'center', marginTop: 20 }}>
            Nenhum lugar adicionado a esta lista ainda.
          </Text>
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
}