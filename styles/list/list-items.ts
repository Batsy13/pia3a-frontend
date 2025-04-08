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
        gap: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },

    listButton: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        backgroundColor: "#FFF",
        alignSelf: "flex-start",
    }
})