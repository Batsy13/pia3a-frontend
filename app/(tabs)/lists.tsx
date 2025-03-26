import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import ListHeader from "../../components/lists/list-header";
import ListItem from "../../components/lists/list-item";
import ShowMoreButton from "../../components/lists/show-more-button";
import { List } from "@/types/lists";



export default function Lists() {
  const [lists, setLists] = useState<List[]>([]);
  const [showAll, setShowAll] = useState(false);

  // const { data, isLoading } = useQuery({queryFn: getLists, queryKey: ["lists"]})

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

      setLists(response.data.lists);
    } catch (error: any) {
      console.error(
        "Erro ao buscar listas salvas."
      );
    }
  };

  return (
    <View style={styles.container}>

      <ListHeader />
      <FlatList
        data={showAll ? lists : lists.slice(0, 4)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem name={item.name} placesCount={item.places.length} type={item.type} />
        )}
      />
      {lists.length > 4 && <ShowMoreButton onPress={() => setShowAll(!showAll)} showAll={showAll} />}

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
