import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "@/hooks/useAuth";
import type { RegisterFormData } from "@/types/auth";
import styles from "./styles/registerStyle"

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { errors, handleRegister, clearErrors } = useAuth();

  const onSubmit = () => {
    const data: RegisterFormData = { name, email, password, confirmPassword };
    handleRegister(data);
  };

  return (
    <LinearGradient
      colors={["#BE1636", "#2B1838"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}>
      <View style={styles.titleDiv}>
        <Text style={styles.title}>Crie sua <br />Conta</Text>
      </View>
      <View style={styles.form}>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <View style={styles.inputDiv}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={[styles.input, errors.name ? styles.inputError : null]}
              placeholder="Nome completo"
              placeholderTextColor={"#8D8C9A"}
              value={name}
              onChangeText={(text) => {
                setName(text);
                clearErrors("name");
              }}
              autoCapitalize="words"
              selectionColor="transparent"
              cursorColor="#BE1636"
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
          </View>
          <View style={styles.inputDiv}>
            <Text style={styles.inputLabel}>E-mail</Text>
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
            <Text style={styles.inputLabel}>Senha</Text>
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
          <View style={styles.inputDiv}>
            <Text style={styles.inputLabel}>Confirmar Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, errors.confirmPassword ? styles.inputError : null]}
                placeholderTextColor={"#8D8C9A"}
                placeholder="exemplo123"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  clearErrors("confirmPassword");
                }}
                secureTextEntry={!showConfirmPassword}
                selectionColor="transparent"
                cursorColor="#BE1636"
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color="#BE1636" />
                ) : (
                  <Eye size={20} color="#BE1636" />
                )}
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <LinearGradient
            colors={["#BE1636", "#2B1838"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}>
            <TouchableOpacity onPress={onSubmit}>
              <Text style={styles.buttonText}>REGISTRAR</Text>
            </TouchableOpacity>
          </LinearGradient>
        
          <View style={styles.linkButton}>
            <Text style={{ fontFamily: 'Raleway' }}>Já tem uma conta?</Text>
            <Link href="/login" asChild>
              <Text style={{ color: '#BE1636', fontFamily: 'Raleway' }}>
                Entre
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}