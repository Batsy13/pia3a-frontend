import React from "react";
import { View } from "react-native";
import MapComponent from "../../components/home/Map";
import { LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyle";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapComponent
        onInitialized={function (zoomToGeoJSONFunc: () => void): void {}}
        onMapPress={function (coordinates: [number, number]): void {}}
      />
      <View style={styles.homeButton} onTouchEnd={() => navigation.navigate("index")}>
        <LogOut size={20} color={"white"} />
      </View>
    </View>
  );
}
