import React from "react";
import { View } from "react-native";
import styles from "@/styles/list/list";
import ListHeader from "@/components/list/list-header";
import ListItems from "@/components/list/list-items";
import { useSearchParams } from "expo-router/build/hooks";

export default function List() {
  const searchParams = useSearchParams();
  const listId = searchParams.get("listId");

  return (
    <View style={styles.container}>
      <>
        <ListHeader selectedListId={Number(listId)}/>
        <ListItems selectedListId={Number(listId)} />
      </>
    </View>
  );
}
