import React from "react";
import { View } from "react-native";
import Map from "../../components/home/Map";
import { LogOut } from "lucide-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styles from "@/styles/home-style";
import { logout } from "@/api/auth";

type Props = NavigationProp<{
  index: undefined;
}>;

export default function HomeScreen() {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <Map
        onInitialized={function (zoomToGeoJSONFunc: () => void): void {}}
        onMapPress={function (coordinates: [number, number]): void {}}
      />
      <View style={styles.homeButton} onTouchEnd={() => logout().then(() => navigation.navigate("index"))}>
        <LogOut size={20} color={"white"} />
      </View>
    </View>
  );
}