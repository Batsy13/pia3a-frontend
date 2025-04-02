import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: "#121212",
        borderWidth: 1,
        borderColor: "#000",
    },

    images: {
        width: "100%",
        overflowX: "scroll",
        display: "flex",
        flexDirection: "row",
        gap: 10,
    }
})