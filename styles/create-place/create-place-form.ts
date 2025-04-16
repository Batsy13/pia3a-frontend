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
  },

  addImageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#9A9A9A",
    borderRadius: 8,
    marginVertical: 10,
  },

  addImageButtonText: {
    color: "#BE1636",
    marginRight: 8,
    fontWeight: "bold",
  },

  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  imageWrapper: {
    position: "relative",
    margin: 5,
  },

  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },

  deleteImageButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#BE1636",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
