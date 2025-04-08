import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/list/list-items";
import { Heart, MapPinCheck } from "lucide-react-native";
import PlaceItem from "./place-item";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function ListItems({
  selectedListId,
}: {
  selectedListId: number;
}) {
  const selectedList = mockData.lists.find(
    (list) => list.id === selectedListId
  );

  if (!selectedList) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        <View style={styles.listNameContainer}>
          <View style={styles.listTitle}>
            <Heart color={"red"} size={24} />
            <Text style={{ color: "#FFF", fontSize: 24 }}>
              {selectedList.name}
            </Text>
          </View>
          <Text style={{ color: "#9A9A9A" }}>
            {selectedList.places.length > 1 ? selectedList.places.length + " lugares": selectedList.places.length + " lugar"}
          </Text>
          <TouchableOpacity style={styles.listButton}>
            <MapPinCheck color={"black"} />
            <Text> Adicionar </Text>
          </TouchableOpacity>
        </View>

        {selectedList.places.map((place) => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export const mockData = {
  lists: [
    {
      id: 1,
      name: "Favoritos",
      icon: "heart",
      places: [
        {
          id: 1,
          name: "IESB",
          description: "Centro universitário IESB - Asa Sul.",
          images: [
            "https://www.iesb.br/content/uploads/2021/05/CAMPUS-OESTE-2-1.png",
            "https://www.iesb.br/content/uploads/2021/05/CAMPUS-SUL-min-1-scaled.jpeg",
          ],
          added_at: "2025-03-22T14:12:33.731Z",
        },
      ],
    },
    {
      id: 2,
      name: "Quero Visitar",
      icon: "map-pin",
      places: [
        {
          id: 1,
          name: "Congresso Nacional",
          description:
            "O Congresso Nacional é o órgão legislativo do Brasil, composto pela Câmara dos Deputados e pelo Senado Federal. É uma instituição que exerce o Poder Legislativo na esfera federal.",
          images: [
            "https://img.melhoresdestinos.com.br/image/upload/v1740615484/guia/cache/772d700d39c49c8e37544b0f610e6230.jpg",
            "https://www.df.gov.br/wp-conteudo/uploads/2016/02/congresso_do_brasil_ebc.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z",
        },
        {
          id: 2,
          name: "Catedral",
          description:
            "A Catedral de Brasília segue o traço ousado e inovador característico de Niemeyer. Sua estrutura é composta por 16 colunas de concreto, que formam um desenho hiperboloide, simbolizando mãos em oração voltadas para o céu.",
          images: [
            "https://acrosstheuniverse.blog.br/wp-content/uploads/2020/06/A-catedral-de-Brasi%CC%81lia.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z",
        },
      ],
    },
  ],
};
