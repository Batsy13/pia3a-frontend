import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "@/hooks/useAuth";
import type { LoginFormData } from "@/types/auth";
import styles from "./styles/loginStyle"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { errors, handleLogin, clearErrors } = useAuth();

  const onSubmit = () => {
    const data: LoginFormData = { email, password };
    handleLogin(data);
  };

  return (
    <LinearGradient
      colors={["#BE1636", "#2B1838"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}>
      <View style={styles.titleDiv}>
        <Text style={styles.title}>Olá {"\n"}Entre!</Text>
      </View>
      <View style={styles.form}>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          <View style={styles.inputDiv}>
            <Text style={{ color: "#BE1636", fontWeight: 600, fontSize: 24 }}>
              E-mail
            </Text>
            <TextInput
              style={[styles.input, errors.email ? styles.inputError : null]}
              placeholderTextColor={"#8D8C9A"}
              placeholder="email@exemplo.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                clearErrors("email");
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              selectionColor="transparent"
              cursorColor="#BE1636"
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          </View>
          <View style={styles.inputDiv}>
            <Text style={{ color: "#BE1636", fontWeight: 600, fontSize: 24 }}>
              Senha
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.password ? styles.inputError : null]}
                placeholderTextColor={"#8D8C9A"}
                placeholder="exemplo123"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  clearErrors("password");
                }}
                secureTextEntry={!showPassword}
                selectionColor="transparent"
                cursorColor="#BE1636"
                selectionHandleColor={"none"}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#BE1636" />
                ) : (
                  <Eye size={20} color="#BE1636" />
                )}
              </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <LinearGradient
            colors={["#BE1636", "#2B1838"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}>
            <TouchableOpacity onPress={onSubmit}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={styles.linkButton}>
            <Text style={{ fontFamily: 'Raleway' }}>Não tem uma conta?
            </Text>
            <Link href="/register" asChild>
              <Text style={{ color: '#BE1636', fontFamily: 'Raleway', fontWeight: 800}}>
                Registre-se
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}