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
      height: '20%',
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
      height: "80%",
      display: 'flex',
      gap: 20,
      flexDirection: 'column',
      justifyContent: "space-between",
      paddingHorizontal: 32,
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      paddingVertical: 46,
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
    linkButton: {
      fontWeight: 900,
      alignItems: "flex-end",
      fontFamily: "Raleway",
      gap: 4,
    },
  });