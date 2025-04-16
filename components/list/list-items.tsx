import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "@/styles/list/list-items";
import { MapPinCheck } from "lucide-react-native";
import * as LucideIcons from "lucide-react-native";
import PlaceItem from "./place-item";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { router } from "expo-router";

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

  const IconComponent = (LucideIcons[selectedList.icon as keyof typeof LucideIcons] as React.ComponentType<{ color: string; size: number }>) || LucideIcons.HelpCircle;

  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
        <View style={styles.listNameContainer}>
          <View style={styles.listTitle}>
            <IconComponent color={"#FFF"} size={24} />
            <Text style={{ color: "#FFF", fontSize: 24 }}>
              {selectedList.name}
            </Text>
          </View>
          <Text style={{ color: "#9A9A9A" }}>
            {selectedList.places.length > 1 ? selectedList.places.length + " lugares": selectedList.places.length + " lugar"}
          </Text>
          <TouchableOpacity style={styles.listButton} onPress={ () => { router.navigate("/create-place") }}>
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
      icon: "Heart",
      places: [
        {
          id: 1,
          name: "IESB",
          description: "Centro universitário IESB - Asa Sul.",
          images: [
            "https://uploads.metroimg.com/wp-content/uploads/2024/09/05171252/IESB.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Campuss-iesb.jpg/300px-Campuss-iesb.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    },
    {
      id: 2,
      name: "Quero Visitar",
      icon: "MapPin",
      places: [
        {
          id: 1,
          name: "Congresso Nacional",
          description: "O Congresso Nacional é o órgão legislativo do Brasil, composto pela Câmara dos Deputados e pelo Senado Federal. É uma instituição que exerce o Poder Legislativo na esfera federal.",
          images: [
            "https://img.melhoresdestinos.com.br/image/upload/v1740615484/guia/cache/772d700d39c49c8e37544b0f610e6230.jpg",
            "https://www.df.gov.br/wp-conteudo/uploads/2016/02/congresso_do_brasil_ebc.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        },
        {
          id: 2,
          name: "Catedral",
          description: "A Catedral de Brasília segue o traço ousado e inovador característico de Niemeyer. Sua estrutura é composta por 16 colunas de concreto, que formam um desenho hiperboloide, simbolizando mãos em oração voltadas para o céu.",
          images: [
            "https://acrosstheuniverse.blog.br/wp-content/uploads/2020/06/A-catedral-de-Brasi%CC%81lia.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    },
    {
      id: 3,
      name: "Viagens Salvas",
      icon: "Map",
      places: [
        {
          id: 1,
          name: "PIER 21",
          description: "Um centro de lazer completo às margens do Lago Paranoá, com lojas, restaurantes, cinemas e uma atmosfera agradável para toda a família.",
          images: [
            "https://antigo.visitebrasilia.com.br/vb/wp-content/uploads/2017/06/FAC_6594.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/5b/6e/f2/vista-pro-lago-1.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2d/39/85/pier-21.jpg?w=1200&h=1200&s=1"
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        },
        {
          id: 2,
          name: "Pontão do Lago Sul",
          description: "Um charmoso cartão postal de Brasília com restaurantes, bares vibrantes e uma vista deslumbrante para o Lago Paranoá, ideal para lazer e contemplação.",
          images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/dc/5a/1f/vista-geral-do-pontao.jpg?w=1200&h=1200&s=1",
            "https://silveiraimoveis.com/wp-content/uploads/2023/09/8-motivos-para-visitar-o-Pontao-do-Lago-Sul-em-Brasilia-hOZ4l1.jpeg"
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    },
    {
      id: 4,
      name: "Marcados",
      icon: "MapPinned",
      places: [
        {
          id: 1,
          name: "Congresso Nacional",
          description: "O Congresso Nacional é o órgão legislativo do Brasil, composto pela Câmara dos Deputados e pelo Senado Federal. É uma instituição que exerce o Poder Legislativo na esfera federal.",
          images: [
            "https://img.melhoresdestinos.com.br/image/upload/v1740615484/guia/cache/772d700d39c49c8e37544b0f610e6230.jpg",
            "https://www.df.gov.br/wp-conteudo/uploads/2016/02/congresso_do_brasil_ebc.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        },
        {
          id: 2,
          name: "Catedral",
          description: "A Catedral de Brasília segue o traço ousado e inovador característico de Niemeyer. Sua estrutura é composta por 16 colunas de concreto, que formam um desenho hiperboloide, simbolizando mãos em oração voltadas para o céu.",
          images: [
            "https://acrosstheuniverse.blog.br/wp-content/uploads/2020/06/A-catedral-de-Brasi%CC%81lia.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    },
    {
      id: 5,
      name: "Lugares Salvos",
      icon: "MapPinHouse",
      places: [
        {
          id: 1,
          name: "Congresso Nacional",
          description: "O Congresso Nacional é o órgão legislativo do Brasil, composto pela Câmara dos Deputados e pelo Senado Federal. É uma instituição que exerce o Poder Legislativo na esfera federal.",
          images: [
            "https://img.melhoresdestinos.com.br/image/upload/v1740615484/guia/cache/772d700d39c49c8e37544b0f610e6230.jpg",
            "https://www.df.gov.br/wp-conteudo/uploads/2016/02/congresso_do_brasil_ebc.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        },
        {
          id: 2,
          name: "Catedral",
          description: "A Catedral de Brasília segue o traço ousado e inovador característico de Niemeyer. Sua estrutura é composta por 16 colunas de concreto, que formam um desenho hiperboloide, simbolizando mãos em oração voltadas para o céu.",
          images: [
            "https://acrosstheuniverse.blog.br/wp-content/uploads/2020/06/A-catedral-de-Brasi%CC%81lia.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    },
    {
      id: 6,
      name: "Poggers Lugares",
      icon: "MapPinMinusInside2",
      places: [
        {
          id: 1,
          name: "Congresso Nacional",
          description: "O Congresso Nacional é o órgão legislativo do Brasil, composto pela Câmara dos Deputados e pelo Senado Federal. É uma instituição que exerce o Poder Legislativo na esfera federal.",
          images: [
            "https://img.melhoresdestinos.com.br/image/upload/v1740615484/guia/cache/772d700d39c49c8e37544b0f610e6230.jpg",
            "https://www.df.gov.br/wp-conteudo/uploads/2016/02/congresso_do_brasil_ebc.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        },
        {
          id: 2,
          name: "Catedral",
          description: "A Catedral de Brasília segue o traço ousado e inovador característico de Niemeyer. Sua estrutura é composta por 16 colunas de concreto, que formam um desenho hiperboloide, simbolizando mãos em oração voltadas para o céu.",
          images: [
            "https://acrosstheuniverse.blog.br/wp-content/uploads/2020/06/A-catedral-de-Brasi%CC%81lia.jpg",
          ],
          added_at: "2025-03-22T14:12:33.731Z"
        }
      ]
    }
  ]
};
