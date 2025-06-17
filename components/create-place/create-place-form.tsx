import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Text, Platform } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import styles from "@/styles/create-place/create-place-form";
import { ImagePlus, Trash2 } from "lucide-react-native";
import * as FileSystem from 'expo-file-system';

interface FormData {
  images: string[];
  listName: string;
  description: string;
  addedAt: string;
}

export default function CreatePlaceForm({ onFormChange }: { onFormChange: (data: Partial<FormData>) => void }) {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [base64Images, setBase64Images] = useState<string[]>([]); 

  useEffect(() => {
    onFormChange({ listName, description, images: base64Images });
  }, [listName, description, base64Images, onFormChange]);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Precisamos de permissão para acessar suas fotos!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.7,
      allowsMultipleSelection: true,
      base64: true,
    });

    if (!result.canceled) {
      const newImageUris: string[] = [];
      const newBase64Images: string[] = [];

      for (const asset of result.assets) {
        newImageUris.push(asset.uri);
        if (asset.base64) {
          newBase64Images.push(asset.base64);
        } else {
          try {
            const base64 = await FileSystem.readAsStringAsync(asset.uri, {
              encoding: FileSystem.EncodingType.Base64,
            });
            newBase64Images.push(base64);
          } catch (e) {
            console.error("Erro ao ler arquivo como Base64:", e);
          }
        }
      }
      
      setImages(prev => [...prev, ...newImageUris]);
      setBase64Images(prev => [...prev, ...newBase64Images]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setBase64Images(prev => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
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
            onChangeText={setListName}
          />
          <TextInput
            placeholder="Adicione uma descrição ao lugar"
            style={styles.inputStyle}
            placeholderTextColor={"#9A9A9A"}
            selectionColor="transparent"
            cursorColor="#BE1636"
            value={description}
            onChangeText={setDescription}
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