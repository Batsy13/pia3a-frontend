import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 28,
  },

  title: {
    fontSize: 24,
    paddingTop: 20,
    fontWeight: "bold",
    color: "white",
  },

  backButton: {
    position: "absolute",
    alignSelf: "flex-start",
    left: 20,
    top: 48,
    alignItems: "center",
    justifyContent: "center",
    height: 32,
  }
});
