import { useState } from 'react';
import { router } from 'expo-router';
import { loginSchema, registerSchema } from '@/lib/auth';
import type { LoginFormData, RegisterFormData, AuthErrors } from '@/types/auth';
import { z } from 'zod';

export function useAuth() {
  const [errors, setErrors] = useState<AuthErrors>({});

  const handleLogin = async (data: LoginFormData) => {
    try {
      const result = loginSchema.parse(data);
      console.log("Login válido:", result);
      setErrors({});
      router.push("/(tabs)/home");
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
    }
  };

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const result = registerSchema.parse(data);
      console.log("Registro válido:", result);
      setErrors({});
      router.push("/(tabs)/home");
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
    }
  };

  const clearErrors = (field?: keyof AuthErrors) => {
    if (field) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    } else {
      setErrors({});
    }
  };

  return {
    errors,
    handleLogin,
    handleRegister,
    clearErrors
  };
}
