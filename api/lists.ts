import { List, Place } from "@/types/lists";
import api from "./api";
export interface CreatePlacePayload {
  name: string;
  description: string;
  images: string[];
  addedAt: string;
}

export interface CreateListPayload {
  name: string;
  icon: string;
  places?: any[];
}

export const getLists = async () => {
    try {
        const response = await api.get("/lists", {
            headers: {
                Accept: "application/json",
            },
        });
        console.log(response)
        return response.data;
    } catch (error: any) {
        console.error("Erro ao buscar listas salvas");
    }
};

export const getList = async (listId: number) => {
  try {
    const response = await api.get(`/lists/${listId}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.error(`Erro ao buscar a lista ${listId}:`, error.response?.data || error.message);
    throw error;
  }
};

export const createPlace = async (
  listId: number,
  placeData: CreatePlacePayload
): Promise<Place | undefined> => {
  try {
    const response = await api.post<Place>(
      `/lists/${listId}/place`,
      placeData
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao criar lugar:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createList = async (
  listData: CreateListPayload
): Promise<List | undefined> => {
  try {
    const response = await api.post<List>(
      "/lists", 
      listData
    );
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar lista:", error.response?.data || error.message);
    throw error;
  }
};