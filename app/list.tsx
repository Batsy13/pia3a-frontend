import React from "react";
import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import ListHeader from "@/components/list/list-header";
import ListItems from "@/components/list/list-items";
import styles from "@/styles/list/list";
import { getLists } from "@/api/lists";
import { List as ListType } from "@/types/lists";
import { useQuery } from '@tanstack/react-query';

type ListRouteParams = {
  listId: string;
};

export default function List() {
  const params = useLocalSearchParams<ListRouteParams>();
  const listId = Number(params.listId);

  const { data: allLists, isLoading: isLoadingAllLists, isError: isErrorAllLists, error: errorAllLists } = useQuery<ListType[], Error>({
    queryKey: ['lists'],
    queryFn: getLists,
  });

  const selectedList = allLists?.find(list => list.id === listId);

  if (isLoadingAllLists) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#BE1636" />
        <Text style={{ marginTop: 10, color: '#BE1636' }}>Carregando listas...</Text>
      </View>
    );
  }

  if (isErrorAllLists) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red', textAlign: 'center' }}>{errorAllLists?.message || "Erro ao carregar as listas."}</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20, padding: 10, backgroundColor: '#BE1636', borderRadius: 5 }}>
          <Text style={{ color: '#FFF' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isNaN(listId) || listId <= 0 || !selectedList) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red', textAlign: 'center' }}>Lista não encontrada ou ID inválido.</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20, padding: 10, backgroundColor: '#BE1636', borderRadius: 5 }}>
          <Text style={{ color: '#FFF' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <>
        <ListHeader selectedList={selectedList}/>
        <ListItems selectedList={selectedList} />
      </>
    </View>
  );
}