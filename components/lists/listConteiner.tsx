import { FlatList } from "react-native";
import ListItem from "./list-item";
import React, { useState } from "react";
import ShowMoreButton from "./show-more-button";
import { List } from "@/types/lists";

interface ListConteinerProps {
  data: List[] | undefined;
}

export const ListConteiner = (data: ListConteinerProps) => {
  const [showAll, setShowAll] = useState(false);
  const lists = data?.data || [];

  return (
    <>
      <FlatList
        data={showAll ? lists : lists.slice(0, 4)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            name={item.name}
            placesCount={item.places.length}
            type={item.type}
            isLast={index === lists.length - 1}
          />
        )}
      />
      {lists.length > 4 && (
        <ShowMoreButton
          onPress={() => setShowAll(!showAll)}
          showAll={showAll}
        />
      )}
    </>
  );
};
