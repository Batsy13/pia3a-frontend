import React, { useState, useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation, useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import { z } from 'zod';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "@/styles/create-list/create-list";
import CreatePlaceHeader from "@/components/create-place/create-place-header";
import CreatePlaceForm from "@/components/create-place/create-place-form";
import CreatePlaceFooter from "@/components/create-place/create-place-footer";
import { createPlace, CreatePlacePayload } from "@/api/lists";

const placeFormSchema = z.object({
  listName: z.string().min(1, "O nome do lugar é obrigatório."),
  description: z.string().min(1, "A descrição é obrigatória."),
  images: z.array(z.string()).min(1, "Pelo menos uma imagem é obrigatória."),
});

interface FormData {
  images: string[];
  listName: string;
  description: string;
}

type ValidationErrors = {
  listName?: string;
  description?: string;
  images?: string;
  general?: string;
};

type CreatePlaceRouteParams = { listId: string };

export default function CreatePlace() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const params = useLocalSearchParams<CreatePlaceRouteParams>();

  const rawListId = params.listId;
  const listId = typeof rawListId === 'string' ? Number(rawListId) : NaN;

  const [formData, setFormData] = useState<FormData>({
    images: [],
    listName: "",
    description: "",
  });
  
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const mutation = useMutation({
    mutationFn: (payload: { listId: number; placeData: CreatePlacePayload }) => createPlace(payload.listId, payload.placeData),
    onSuccess: (newPlace) => {
      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: "Lugar criado com sucesso!",
        position: "bottom",
        visibilityTime: 2000,
      });

      queryClient.invalidateQueries({ queryKey: ['lists'] }); 
      queryClient.invalidateQueries({ queryKey: ['list', listId] });

      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        setValidationErrors(prev => ({ ...prev, general: error.response.data.message }));
        Toast.show({
          type: "error",
          text1: "Erro na API!",
          text2: error.response.data.message,
          position: "bottom",
          visibilityTime: 3000,
        });
      } else {
        setValidationErrors(prev => ({ ...prev, general: error.message || "Ocorreu um erro inesperado." }));
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: error.message || "Não foi possível criar o lugar.",
          position: "bottom",
          visibilityTime: 3000,
        });
      }
      console.error("Erro ao criar lugar:", error);
    },
  });

  const handleFormChange = useCallback((data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    if (data.listName !== undefined) setValidationErrors(prev => ({ ...prev, listName: undefined }));
    if (data.description !== undefined) setValidationErrors(prev => ({ ...prev, description: undefined }));
    if (data.images !== undefined) setValidationErrors(prev => ({ ...prev, images: undefined }));
  }, []);

  const handleSubmit = () => {
    setValidationErrors({});

    try {
      const validatedData = placeFormSchema.parse(formData);

      if (isNaN(listId) || listId <= 0) {
        setValidationErrors(prev => ({ ...prev, general: "ID da lista inválido na URL." }));
        throw new Error("ID da lista inválido.");
      }

      const now = new Date();
      const addedAt = now.toISOString();

      const payload: CreatePlacePayload = {
        name: validatedData.listName,
        description: validatedData.description,
        images: validatedData.images,
        addedAt: addedAt,
      };

      mutation.mutate({ listId, placeData: payload });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const formattedErrors: ValidationErrors = {};
        error.errors.forEach((err) => {
          const key = err.path[0] as keyof ValidationErrors;
          if (key) {
             formattedErrors[key] = err.message;
          }
        });
        setValidationErrors(formattedErrors);
        Toast.show({
          type: "error",
          text1: "Erro de validação!",
          text2: "Verifique os campos do formulário.",
          position: "bottom",
          visibilityTime: 3000,
        });
      } else {
        setValidationErrors(prev => ({ ...prev, general: error.message || "Ocorreu um erro inesperado na validação." }));
        Toast.show({
          type: "error",
          text1: "Erro!",
          text2: error.message || "Ocorreu um erro inesperado na validação.",
          position: "bottom",
          visibilityTime: 3000,
        });
      }
      console.error("Erro na validação do formulário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Toast />
      <>
        <CreatePlaceHeader />
        <CreatePlaceForm onFormChange={handleFormChange} />
      </>
      {validationErrors.listName ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 5 }}>{validationErrors.listName}</Text> : null}
      {validationErrors.description ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 5 }}>{validationErrors.description}</Text> : null}
      {validationErrors.images ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 5 }}>{validationErrors.images}</Text> : null}
      {validationErrors.general ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{validationErrors.general}</Text> : null}
      
      <CreatePlaceFooter formData={formData} onSubmit={handleSubmit} isLoading={mutation.isPending} />
    </View>
  );
}