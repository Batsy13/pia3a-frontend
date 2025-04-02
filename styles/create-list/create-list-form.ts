import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        paddingVertical: 20,
        paddingHorizontal: 28,
        color: "white",
        gap: 10,
        display: "flex",
        fontWeight: "bold",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    iconContainer: {
        paddingVertical: 20,
        color: "white",
        gap: 10,
        display: "flex",
        fontWeight: "bold",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    inputIcon: {
        borderRadius: 15,
        backgroundColor: "#250000",
        padding: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
    },

    inputContainer: {
        width: "100%",
        gap: 20,
    },

    inputStyle: {
        padding: 20,
        borderRadius: 10,
        borderColor: "#9A9A9A",
        borderWidth: 1,
        color: "#fff",
    }

});
