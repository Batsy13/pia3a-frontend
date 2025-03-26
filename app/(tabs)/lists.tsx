import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import ListHeader from "../../components/list-header";
import ListItem from "../../components/list-item";
import ShowMoreButton from "../../components/show-more-button";

type List = {
  id: number;
  name: string;
  places: { id: number; name: string }[];
  type?: string;
};

export default function Lists() {
  const [lists, setLists] = useState<List[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("https://mock.apidog.com/m1/844414-824492-default/api/places", {
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Dados recebidos da API:", response.data);

      if (response.data?.lists) {
        setLists(response.data.lists);
      } else {
        console.error("A API não retornou a estrutura esperada:", response.data);
      }
    } catch (error: any) {
      console.error(
        "Erro ao buscar listas salvas:",
        error.response?.status || "Sem status",
        error.response?.data || error.message
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <ListHeader onNewListPress={() => console.log("Criar nova lista")} />

      {/* Listas */}
      <FlatList
        data={showAll ? lists : lists.slice(0, 4)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem name={item.name} placesCount={item.places.length} type={item.type} />
        )}
      />

      {/* Botão "Mais" */}
      {lists.length > 1 && <ShowMoreButton onPress={() => setShowAll(!showAll)} showAll={showAll} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
});
