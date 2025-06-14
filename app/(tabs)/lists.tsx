import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { getLists } from "@/api/lists";
import { useQuery } from "@tanstack/react-query";
import { ListContainer } from "@/components/lists/list-container";
import ListHeader from "../../components/lists/list-header";
import { List } from "@/types/lists";
import styles from "@/styles/lists/list-style";

export default function Lists() {
  const { data, isLoading, isError, error } = useQuery<List[], Error>({
    queryFn: getLists,
    queryKey: ["lists"],
  });

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#BE1636" />
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <ListHeader />
        <View
          style={[
            styles.container,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text style={{ color: "#9A9A9A", fontSize: 18 }}>
            Nenhuma lista encontrada.
          </Text>
          <Text style={{ color: "#9A9A9A", fontSize: 16, marginTop: 10 }}>
            Crie uma nova para começar!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ListHeader />
      <ListContainer data={data} />
    </View>
  );
}
