import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {

  return (
      <LinearGradient
        colors={['#BE1636', '#2B1838']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.buttonTransparent}>
              <Text style={styles.buttonTextTransparent}>Login</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/register" asChild>
            <TouchableOpacity style={styles.buttonWhite}>
              <Text style={styles.buttonTextWhite}>Registro</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,

  },
  title: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    marginBottom: 52,
  },
  buttonContainer: {
    gap: 59,
    width: '100%',
  },
  buttonWhite: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 80,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonTransparent: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 80,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonTextWhite: {
    color: '#BE1636',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Raleway',
  },
  buttonTextTransparent: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Raleway',
  },
});
