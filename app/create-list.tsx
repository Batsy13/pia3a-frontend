import React from "react";
import { View } from "react-native";
import styles from "@/styles/create-list/create-list"
import CreateListHeader from "@/components/create-list/creat-list-header";
import CreateListFooter from "@/components/create-list/create-list-footer";
import CreateListForm from "@/components/create-list/create-list-form";

export default function CreateList() {
  return (
    <View style={styles.container}>
      <>
        <CreateListHeader />
        <CreateListForm />
      </>
      <CreateListFooter />
    </View>
  );
}
