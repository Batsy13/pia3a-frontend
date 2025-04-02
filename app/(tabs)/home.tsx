import React from "react";
import { View } from "react-native";
import MapComponent from "../../components/home/Map";
import { LogOut } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styles from "@/styles/home-style";

type Props = NavigationProp<{
  index: undefined;
}>;

export default function HomeScreen() {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <MapComponent
        onInitialized={function (zoomToGeoJSONFunc: () => void): void {}}
        onMapPress={function (coordinates: [number, number]): void {}}
      />
      <View style={styles.homeButton} onTouchEnd={() => navigation.navigate('index')}>
        <LogOut size={20} color={"white"} />
      </View>
    </View>
  );
}
