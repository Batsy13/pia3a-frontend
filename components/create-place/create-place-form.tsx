import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Platform } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import styles from "@/styles/create-place/create-place-form";
import { ImagePlus, Trash2 } from "lucide-react-native";

export default function CreatePlaceForm({ onFormChange }: any) {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleInputChange = (field: any, value: any) => {
    if (field === "listName") setListName(value);
    if (field === "description") setDescription(value);
    onFormChange({ listName, description, images });
  };

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Precisamos de permissão para acessar suas fotos!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ 'images' ],
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newImages = result.assets.map((asset: { uri: any; }) => asset.uri);
      setImages([...images, ...newImages]);
      onFormChange({ listName, description, images: [...images, ...newImages] });
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    onFormChange({ listName, description, images: newImages });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nomeie seu lugar"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
            value={listName}
            onChangeText={(text) => handleInputChange("listName", text)}
          />
          <TextInput
            placeholder="Adicione uma descrição ao lugar"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
            value={description}
            onChangeText={(text) => handleInputChange("description", text)}
          />
          
          <TouchableOpacity 
            style={styles.addImageButton} 
            onPress={pickImage}
          >
            <Text style={styles.addImageButtonText}>Adicionar Imagens</Text>
            <ImagePlus size={24} color="#BE1636" />
          </TouchableOpacity>
          
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image 
                  source={{ uri: image }} 
                  style={styles.selectedImage} 
                />
                <TouchableOpacity 
                  style={styles.deleteImageButton}
                  onPress={() => removeImage(index)}
                >
                  <Trash2 size={12} color="white" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}