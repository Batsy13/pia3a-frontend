import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const API_BASE_URL = "https://pia3a-backend-71ff8b85da4f.herokuapp.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao obter o token do AsyncStorage:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401 || status === 403) {
        console.warn("Token inválido ou expirado. Deslogando usuário...");
        await AsyncStorage.removeItem("userToken");
        
        if (router.canGoBack()) {
          router.replace("/login");
        } else {
          router.replace("/login");
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;