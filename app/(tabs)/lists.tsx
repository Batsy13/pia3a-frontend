import React from "react";
import { View } from "react-native";
import { getLists } from "@/api/lists";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/components/ui/loading";
import { ListContainer } from "@/components/lists/list-container";
import ListHeader from "../../components/lists/list-header";
import { List } from "@/types/lists";
import styles from '@/styles/lists/list-style';

export default function Lists() {
  const { data, isLoading } = useQuery<List[] | undefined>({
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
      <ListContainer data={data} />
    </View>
  );
}
