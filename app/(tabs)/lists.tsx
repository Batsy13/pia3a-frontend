import React from "react";
import { View, StyleSheet } from "react-native";
import { getLists } from "@/api/lists";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/components/ui/loading";
import { ListConteiner } from "@/components/lists/listConteiner";
import ListHeader from "../../components/lists/list-header";
import { List } from "@/types/lists";

export default function Lists() {
  const { data, isLoading } = useQuery<List[]>({
    queryFn: getLists,
    queryKey: ["lists"],
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ListHeader />
      <ListConteiner data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 28,
    paddingTop: 20,
  },
});
