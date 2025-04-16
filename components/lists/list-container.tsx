import { FlatList, View } from "react-native";
import ListItem from "./list-item";
import React, { useState } from "react";
import ShowMoreButton from "./show-more-button";
import { List } from "@/types/lists";
import * as LucideIcons from "lucide-react-native";

interface ListContainerProps {
  data: List[] | undefined;
}

export const ListContainer = (data: ListContainerProps) => {
  const [showAll, setShowAll] = useState(false);
  const lists = data?.data || [];

  return (
    <View style={{ display: "flex", gap: 10, flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={showAll ? lists : lists.slice(0, 4)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            id={item.id}
            name={item.name}
            placesCount={item.places.length}
            isLast={index === lists.length - 1}
            icon={item.icon as keyof typeof LucideIcons}
          />
        )}
      />
      {lists.length > 4 && (
        <ShowMoreButton
          onPress={() => setShowAll(!showAll)}
          showAll={showAll}
        />
      )}
    </View>
  );
};
