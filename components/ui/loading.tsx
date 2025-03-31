import { LoaderCircle } from "lucide-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Animated } from "react-native";
    
export const Loading = () => {
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <LoaderCircle size={40} color={"#FFF"}/>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
});
