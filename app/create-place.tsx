import React, { useState } from "react";
import { View } from "react-native";
import styles from "@/styles/create-list/create-list";
import CreatePlaceHeader from "@/components/create-place/create-place-header";
import CreatePlaceForm from "@/components/create-place/create-place-form";
import CreatePlaceFooter from "@/components/create-place/create-place-footer";
import Toast from "react-native-toast-message";
import { useNavigation } from "expo-router";

interface FormData {
  images: string[];
  listName: string;
  description: string;
}

export default function CreatePlace() {
  const navigate = useNavigation();

  const [formData, setFormData] = useState<FormData>({
    images: [],
    listName: "",
    description: "",
  });

  const handleFormChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting data:", formData);

    Toast.show({
      type: "success",
      text1: "Sucesso!",
      text2: "Lugar criado com sucesso!",
      position: "bottom",
      visibilityTime: 2000,
    });

    setTimeout(() => {
      navigate.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Toast />
      <>
        <CreatePlaceHeader />
        <CreatePlaceForm onFormChange={handleFormChange} />
      </>
      <CreatePlaceFooter formData={formData} onSubmit={handleSubmit} />
    </View>
  );
}
