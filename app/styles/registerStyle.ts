import { StyleSheet } from "react-native";

export default StyleSheet.create({
    inputContainer: {
      position: 'relative',
      width: '100%',
    },
    eyeIcon: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: [{ translateY: -10 }],
    },
    errorText: {
      color: '#BE1636',
      fontSize: 12,
      marginTop: 4,
    },
    inputError: {
      borderBottomColor: '#BE1636',
      borderBottomWidth: 1,
    },
    container: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      fontFamily: "Raleway",
    },
    titleDiv: {
      height: '30%',
      display: "flex",
      width: '100%',
      padding: 32,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    title: {
      color: "white",
      textAlign: "left",
      fontSize: 36,
      fontWeight: "bold",
      fontFamily: "Raleway",
    },
    form: {
      width: "100%",
      backgroundColor: "white",
      height: "70%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "space-between",
      paddingHorizontal: 32,
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      paddingVertical: 46,
    },
    inputLabel: {
      color: "#BE1636",
      fontWeight: "600",
      fontSize: 24,
      fontFamily: "Raleway",
    },
    input: {
      width: "100%",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: "#ccc",
      fontSize: 16,
    },
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      height: 52,
      padding: 12,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 24,
      fontWeight: "600",
      fontFamily: "Raleway",
    },
    linkButton: {
      alignItems: "flex-end",
      fontFamily: "Raleway",
      gap: 4,
    },
  });