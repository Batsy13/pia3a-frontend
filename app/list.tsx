import React from "react";
import { View } from "react-native";
import styles from "@/styles/list/list"
import ListHeader from "@/components/list/list-header";
import ListItems from "@/components/list/list-items";

export default function List() {
  return (
    <View style={styles.container}>
      <>
        <ListHeader />
        <ListItems />
      </>
    </View>
  );
}
