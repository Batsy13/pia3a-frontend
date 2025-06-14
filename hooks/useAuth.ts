import { useState, useCallback, useEffect } from 'react';
import { router } from 'expo-router';
import { z } from 'zod';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as apiLogin, register as apiRegister, logout as apiLogout } from '@/api/auth';
import { loginSchema, registerSchema } from '@/lib/auth';
import type { LoginFormData, RegisterFormData, AuthErrors } from '@/types/auth';

export function useAuth() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<AuthErrors>({});

  const loadToken = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
    } catch (e) {
      console.error("Erro ao carregar o token do AsyncStorage:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadToken();
  }, [loadToken]);

  const clearErrors = useCallback((field?: keyof AuthErrors) => {
    if (field) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } else {
      setErrors({});
    }
  }, []);

  const handleLogin = useCallback(async (data: LoginFormData) => {
    clearErrors();
    setIsLoading(true);

    try {
      const validatedData = loginSchema.parse(data);

      const response = await apiLogin({
        email: validatedData.email,
        password: validatedData.password,
      });


      if (response && response.token) {
        await AsyncStorage.setItem("userToken", response.token); 
        setUserToken(response.token);
        router.replace("/(tabs)/home"); 
      }
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const formattedErrors: AuthErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof AuthErrors] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else {
        setErrors(prev => ({ ...prev, general: "Ocorreu um erro inesperado ao fazer login." }));
        console.error("Erro desconhecido no login:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [clearErrors]);

  const handleRegister = useCallback(async (data: RegisterFormData) => {
    clearErrors();
    setIsLoading(true);

    try {
      const validatedData = registerSchema.parse(data);

      const response = await apiRegister({
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password,
      });

      if (response && response.token) {
        await AsyncStorage.setItem("userToken", response.token); 
        setUserToken(response.token);
        router.replace("/(tabs)/home"); 
      }
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const formattedErrors: AuthErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof AuthErrors] = err.message;
          }
        });
        setErrors(formattedErrors);
      } 
      else {
        setErrors(prev => ({ ...prev, general: "Ocorreu um erro inesperado ao se registrar." }));
        console.error("Erro desconhecido no registro:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [clearErrors]);

  const handleLogout = useCallback(async () => {
    try {
      setIsLoading(true);
      await apiLogout();
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
      router.replace("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setErrors(prev => ({ ...prev, general: "Não foi possível fazer logout. Tente novamente." }));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    userToken,
    isLoading,
    errors,
    handleLogin,
    handleRegister,
    handleLogout,
    clearErrors,
  };
}