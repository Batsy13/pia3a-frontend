import React, { useState } from "react";
import { View } from "react-native";
import styles from "@/styles/create-list/create-list";
import CreateListHeader from "@/components/create-list/create-list-header";
import CreateListFooter from "@/components/create-list/create-list-footer";
import CreateListForm from "@/components/create-list/create-list-form";
import { useNavigation } from "expo-router";
import Toast from "react-native-toast-message";

export default function CreateList() {
  const navigate = useNavigation();

  const [formData, setFormData] = useState({
    icon: "",
    listName: "",
    description: "",
  });

  const handleFormChange = (data: any) => {
    setFormData(data);
  };

  const handleSubmit = () => {
    console.log("Submitting data:", formData);

    Toast.show({
      type: "success",
      text1: "Sucesso!",
      text2: "Lista criada com sucesso!",
      position: "bottom",
      props: styles.toast,
      visibilityTime: 2000,
    });

    setTimeout(() => {
      navigate.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Toast type="success" />
      <>
        <CreateListHeader />
        <CreateListForm onFormChange={handleFormChange} />
      </>
      <CreateListFooter formData={formData} onSubmit={handleSubmit} />
    </View>
  );
}
