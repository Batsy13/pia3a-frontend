import React from "react";
import { View, Text } from "react-native";
import styles from "@/styles/list/place-item"

export default function () {
    return (
        <View style={styles.container}>
            <View style={styles.images}>

                <View style={{ width: 200, height: 124, backgroundColor: "red" , borderRadius: 20}}></View>
                <View style={{ width: 200, height: 124, backgroundColor: "red" , borderRadius: 20}}></View>

            </View>
            <View style={{gap: 10, paddingVertical: 20}}>
                <Text style={{ color: "white", fontSize:18, fontWeight: "bold" }}>IESB</Text>
                <Text style={{ fontWeight: "bold", color: "#9A9A9A" }}>Descrição poggers demais da conta mds</Text>
            </View>
        </View>
    )
}