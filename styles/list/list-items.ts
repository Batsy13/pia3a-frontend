import { StyleSheet } from "react-native";

export default StyleSheet.create({

    listNameContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        borderColor: "black",
        borderWidth: 1,
    },

    listTitle: {
        gap: 5,
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
    },

    listButton: {
        flexDirection: "row",
        width: "auto",
        gap: 5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#FFF",
    }
})