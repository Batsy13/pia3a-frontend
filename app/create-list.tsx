import React, { useState, useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useNavigation, router, RelativePathString } from "expo-router";
import Toast from "react-native-toast-message";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from "@/styles/create-list/create-list";
import CreateListHeader from "@/components/create-list/create-list-header";
import CreateListFooter from "@/components/create-list/create-list-footer";
import CreateListForm from "@/components/create-list/create-list-form";
import { createList, CreateListPayload } from "@/api/lists";

const createListFormSchema = z.object({
  name: z.string().min(1, "O nome da lista é obrigatório."),
  icon: z.string().min(1, "Um ícone para a lista é obrigatório.").refine(icon => icon !== "HelpCircle", "Escolha um ícone para a lista."),
});

interface FormData {
  name: string;
  icon: string;
}

export default function CreateList() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    icon: "HelpCircle",
  });

  const mutation = useMutation({
    mutationFn: (data: CreateListPayload) => createList(data),
    onSuccess: (newList) => {
      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: "Lista criada com sucesso!",
        position: "bottom",
        props: styles.toast,
        visibilityTime: 2000,
      });

      queryClient.invalidateQueries({ queryKey: ['lists'] });

      setTimeout(() => {
        if (newList?.id) {
          router.replace(`/lists/${newList.id}` as RelativePathString);
        } else {
          router.replace("/lists");
        }
      }, 2000);
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: error?.response?.data?.message || error.message || "Não foi possível criar a lista.",
        position: "bottom",
        props: styles.toast,
        visibilityTime: 3000,
      });
      console.error("Erro ao criar lista:", error);
    },
  });

  const handleFormChange = useCallback((data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  }, []);

  const handleSubmit = () => {
    try {
      const validatedData = createListFormSchema.parse(formData);
      
      const payload: CreateListPayload = {
        name: validatedData.name,
        icon: validatedData.icon,
        places: [],
      };

      mutation.mutate(payload);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        Toast.show({
          type: "error",
          text1: "Erro de validação!",
          text2: error.errors.map(err => err.message).join("\n"),
          position: "bottom",
          props: styles.toast,
          visibilityTime: 3000,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: error.message || "Ocorreu um erro inesperado na validação.",
          position: "bottom",
          props: styles.toast,
          visibilityTime: 3000,
        });
      }
      console.error("Erro na validação do formulário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Toast type="success" />
      <CreateListHeader />
      <CreateListForm onFormChange={handleFormChange} />
      <CreateListFooter formData={formData} onSubmit={handleSubmit} isLoading={mutation.isPending} />
    </View>
  );
}