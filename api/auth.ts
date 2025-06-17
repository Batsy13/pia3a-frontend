import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";
import { AuthResponse, RegisterCredentials, UserCredentials } from "@/types/auth";

export const login = async (
  credentials: UserCredentials
): Promise<AuthResponse | undefined> => {
  try {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      credentials
    );

    await AsyncStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao realizar login:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse | undefined> => {
  try {
    const response = await api.post<AuthResponse>(
      "/auth/register",
      credentials
    );

    await AsyncStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao realizar registro:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    console.log("Fazendo logout...");
    await AsyncStorage.removeItem("userToken");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};
